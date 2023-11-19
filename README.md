# Login
<h1> I will refractor and will create frontend later (Current frontend is too simple )</h1>
- Install it locally (take a help of package.json)

[![GitHub issues](https://img.shields.io/github/issues/manzil-infinity180/Login)](https://github.com/manzil-infinity180/Login/issues)
[![GitHub stars](https://img.shields.io/github/stars/manzil-infinity180/Login)](https://github.com/manzil-infinity180/Login/stargazers)

<h3>Language/Tools/Other</h3> 

- HTML/CSS/JS
- NodeJs
- ExpressJs
- MongodB
- Mongoose
- PugJs
- Axios
- PostManAPI
- Mailtrap
- Nodemailer
  
  

```
# User Schema 

This repository includes a MongoDB schema for user data in Node.js applications. The schema comprises the following fields:

- **email:**
  - Type: String
  - Required: true
  - Unique: true
  - Lowercase: true
  - Validation: Email format
  - Custom Error Messages: "User cannot register without an email address" and "User already exists with this email"

- **password:**
  - Type: String
  - Required: true
  - Custom Error Message: "Password is required for signup/login"

- **confirmPassword:**
  - Type: String
  - Required: true
  - Validation: Must match the password field
  - Custom Error Message: "Confirm Password must be the same as Password"

- **photo:**
  - Type: String
  - Description: URL or file path for the user's profile photo (optional)

- **resetPasswordToken:**
  - Type: String
  - Description: Token for password reset functionality (optional)

Feel free to integrate this user schema into your Node.js project for managing user data. Adjust it according to your specific requirements.

```


```
// User Routes

// Get all users
router.route('/').get(userController.getAll);

// Forgot password route
router.post('/forgotPassword', userController.forgotPassword);

// Login route
router.post('/login', userController.login);

// Signup route
router.post('/signup', userController.signup);

// Reset password route
router.patch('/resetPassword/:token', userController.resetPassword);

// User registration route
router.post('/registration', userController.registration);

// Update user profile route with photo upload
router.patch('/updateMe', userController.uploadUserPhoto, userController.updateMe);

```


```
# User Registration Schema

This repository contains a MongoDB schema for user registration, designed for use in Node.js applications. The schema includes the following fields:

- **email:**
  - Type: String
  - Required: true
  - Unique: true
  - Lowercase: true
  - Validation: Email format
  - Custom Error Messages: "User cannot register without an email address" and "User already exists with this email"

- **password:**
  - Type: String
  - Required: true
  - Custom Error Message: "Password is required for signup/login"

- **confirmPassword:**
  - Type: String
  - Required: true
  - Validation: Must match the password field
  - Custom Error Message: "Confirm Password must be the same as Password"

- **name:**
  - Type: String
  - Required: true
  - Custom Error Message: "User cannot be without a NAME!!!"

- **job:**
  - Type: String
  - Required: true
  - Custom Error Message: "User must mention their working profession!"

- **language:**
  - Type: String
  - Required: true
  - Custom Error Message: "Mention at least one skill!"

Feel free to use this schema in your Node.js project for user registration and customize it as needed.

```


```
// View Routes

// Overview page
router.get('/', viewController.getOverView);

// Login form page
router.get('/login', viewController.getLoginForm);

// Signup page
router.get('/signup', viewController.createAccount);

// Forgot password page
router.get('/forgotPassword', viewController.forgotPassword);

// Update password page
router.get('/updateMyPassword', viewController.updateMyPassword);

// Registration page
router.get('/registration', viewController.registration);

// Reset password page with token parameter
router.get('/reset-password/:resetToken', viewController.resetPasswod);

// Update user profile page
router.get('/updateMe', viewController.updateMe);

```


```
# Mailtrap & Nodemailer

Create your account on Mailtrap - https://mailtrap.io/

- Use these settings to send messages directly from your email client or mail transfer agent.
// Replace the credentials with your
EMAIL_HOST = sandbox.smtp.mailtrap.io
EMAIL_PORT = 25
EMAIL_USERNAME= *****
EMAIL_PASSWORD = ****

Use nodemailer npm package - https://www.npmjs.com/package/nodemailer (Documentation)
Transporter to setup Nodemailer 
  const transporter = nodemailer.createTransport({
    host : process.env.EMAIL_HOST,
    port : process.env.EMAIL_PORT,
    auth:{
      user: process.env.EMAIL_USERNAME,
      pass : process.env.EMAIL_PASSWORD
    }
  })

```
#Note 
Delete config_example.env with congig.env
Replace the credential in config.env file with your own credentials 


<img width="1623" alt="Screenshot 2023-10-02 at 11 21 13 AM" src="https://github.com/manzil-infinity180/Login/assets/119070053/003ed33b-7cb7-4856-a3c9-f524914eb1b1">


- <h2>Preview ( I am working on that , will update this repo soon)</h2>

  [Video Link](https://x.com/manzil_rahul/status/1708930631479198059?s=20)




