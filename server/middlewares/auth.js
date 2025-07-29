import jwt from 'jsonwebtoken';

// Middleware Function to decode jwt token to get clerkId
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ success: false, msg: 'No token, authorization denied' });
    }

    const token_decode = jwt.decode(token);
    req.body = req.body || {}; 
    req.body.clerkId = token_decode.clerkId;

    next();
  } catch (error) {
    console.log('Webhook Error:', error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default authUser;
