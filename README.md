# 🖼️ Background Removal Website

A full-stack AI-powered background remover web application. Users can upload images and remove backgrounds instantly using the Remove.bg API. Authenticated via Clerk, deployed on Vercel, and fully responsive with credit-based usage plans.

## ✨ Features

- 🔐 User Authentication with Clerk
- 🧠 Background removal using Remove.bg API
- ⚙️ Node.js + Express backend
- 💳 Credit-based usage system with upgrade plans
- 📱 Fully responsive frontend with React + Tailwind CSS
- 🚀 Deployed on Vercel (Frontend + Backend)

---
## 📸 Preview

### 🔹 Homepage
![Homepage](https://github.com/it21302862/background_removal_website/blob/main/client/public/assets/home.png)

### 🔹 Result Section
![Result Page](https://github.com/it21302862/background_removal_website/blob/main/client/public/assets/bg-remover-result.png)

### 🔹 Payment Page
![Result](https://github.com/it21302862/background_removal_website/blob/main/client/public/assets/payments.png)

### 🔹 SignIn Page
![Result](https://github.com/it21302862/background_removal_website/blob/main/client/public/assets/clerk.png)


## 🧪 Technologies Used

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js
- **Auth**: Clerk.dev
- **Background Removal**: [Remove.bg API](https://www.remove.bg/api)
- **Deployment**: Vercel

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```
https://github.com/it21302862/background_removal_website.git
```
## Setup Environment Variables

server/.env

CLERK_WEBHOOK_SECRET = your_clerk_secret
MONGO_URI = mong_uri
CLIPDROP_API = your_removebg_api_key


client/.env
VITE_CLERK_PUBLISHABLE_KEY =your_clerk_publishable_key
VITE_BACKEND_URL= http://localhost:8000

## Install Dependencies
# Backend
```
cd server
npm install
```

# Frontend
```
cd client
npm install
```

## Run Locally
# Start backend
cd server
npm run dev

# Start frontend
cd client
npm run start