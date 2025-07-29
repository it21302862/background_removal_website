import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/userModel.js";

// Controller function to remove bg from image
const removeBgImage = async (req, res) => {
  try {
    const { clerkId } = req.body;

    const user = await userModel.findOne({ clerkId: clerkId });
    if(!user){
        return res.status(404).json({ success: false, message: "User not found" });
    }

    if(user.creditBalance === 0){
        return res.status(400).json({ success: false, message: "Insufficient credit balance", creditBalance:user.creditBalance})
    }

    const imagePath = req.file.path;
    // Reading the image file
    const imageFile = fs.readFileSync(imagePath);
    const formdata = new FormData()

    formdata.append('image_file', imageFile);

    const {data} = await axios.post('https://api.remove.bg/v1.0/removebg', formdata, {
        headers: {
            'x-api-key' : process.env.CLIPDROP_API
        },
        responseType: 'arraybuffer'
    })

    const base64Image = Buffer.from(data, 'binary').toString('base64')
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {creditBalance:user.creditBalance-1})
    res.json({success:true, resultImage, creditBalance:user.creditBalance-1, message:'Background Removed'})

  } catch (error) {
    console.log("Webhook Error:", error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export { removeBgImage };
