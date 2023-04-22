import React from "react";
import Nav from "../components/Nav";

function OnBoarding() {
const nameInput = React.useRef(null);
const emailInput = React.useRef(null);
const numberInput = React.useRef(null);
const usernameInput = React.useRef(null);
const passwordInput = React.useRef(null);
const confirmPasswordInput = React.useRef(null);
const interestInput = React.useRef(null);
const imageInput = React.useRef(null);
const pronounInput = React.useRef(null);

const handleSubmit = (event) => {
event.preventDefault();
console.log(
nameInput.current.value,
emailInput.current.value,
numberInput.current.value,
usernameInput.current.value,
passwordInput.current.value,
confirmPasswordInput.current.value,
interestInput.current.value,
imageInput.current.value,
pronounInput.current.value

);
};

return (
<div class="registration">
<Nav />
<h1 style={{ margin: "0 35%" }}> Registration Form</h1>
<form onSubmit={handleSubmit} style={{ margin: "0 20%" }}>
<div class="mb-3">
<label for="name" class="form-label">
Name
</label>
<input
         placeholder="Please Enter Your Name"
         type="text"
         class="form-control"
         id="name"
         required
         ref={nameInput}
       />
</div>
<div class="mb-3">
<label for="email" class="form-label">
Email
</label>
<input
         placeholder="Please Enter Your Email"
         type="text"
         class="form-control"
         id="email"
         required
         ref={emailInput}
       />
</div>
<div class="mb-3">
<label for="number" class="form-label">
Number
</label>
<input
         type="tel"
         placeholder="Please Enter Your Phone Number"
         class="form-control"
         id="number"
         required
         ref={numberInput}
       />
</div>
<div class="mb-3">
<label for="username" class="form-label">
Username
</label>
<input
         type="text"
         placeholder="Please Choose a Username"
         class="form-control"
         id="username"
         required
         ref={usernameInput}
       />
</div>
<div class="mb-3">
<label for="pronouns" class="form-label">
Pronouns
</label>
<input
         placeholder="Please Enter Your Pronouns (optional)"
         type="text"
         class="form-control"
         id="pronouns"
         ref={pronounInput}
       />
</div>
<div class="mb-3">
<label for="Interests/Hobbies" class="form-label">
Bio
</label>
<input
         type="interests"
         placeholder="Share What You Enjoy Doing for People to See! (optional)"
         class="form-control"
         id="interests"
         ref={interestInput}
       />
</div>
<div class="mb-3">
<label for="Profile Picture" class="form-label">
Profile Picture
</label>
<input
         type="profile-pic"
         placeholder="Submit a Link to an Image to Be Your Profile Picture (optional)"
         class="form-control"
         id="profile-pic"
         ref={imageInput}
       />
</div>
<div class="mb-3">
<label for="password" class="form-label">
Password
</label>
<input
         type="password"
         placeholder="Please Choose a Password"
         class="form-control"
         id="password"
         required
         ref={passwordInput}
       />
</div>
<div class="mb-3">
<label for="confirmPassword" class="form-label">
Confirm Password
</label>
<input
         type="password"
         placeholder="Please Confirm Your Password"
         class="form-control"
         id="confirmPassword"
         required
         ref={confirmPasswordInput}
       />
</div>
<button type="submit" class="btn btn-primary">
Sign Up
</button>
</form>
</div>
);
}

export default OnBoarding;