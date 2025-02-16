# E-commerce Web Application

## Overview
An e-commerce web application built with Node.js, MongoDB, and deployed on Render.

## Features
- User authentication (login, registration, JWT)
- Product management (CRUD operations)
- Order history tracking
- Secure password hashing with `bcryptjs`

## Technologies Used
- **Backend:** Node.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, bcryptjs
- **Deployment:** Render

## Installation and Usage
```bash
# Clone the repository
git clone https://github.com/askhat00/e-commerse
cd e-commerse

# Install dependencies
npm install

# Start the server
npm start
```

## Environment Variables
Create a `.env` file in the root directory with:
```
PORT=5000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
```

## Deployment
This application is deployed on Render. Push changes to the `main` branch to trigger automatic redeployment.
```bash
git add .
git commit -m "any name for commit"
git push origin main
```

## Author
Askhat

