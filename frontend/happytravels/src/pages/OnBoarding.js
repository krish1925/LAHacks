import React from "react";
import Nav from "../components/Nav";

function OnBoarding() {
const nameInput = React.useRef(null);
const emailInput = React.useRef(null);
const numberInput = React.useRef(null);
const ageInput = React.useRef(null);
const usernameInput = React.useRef(null);
const passwordInput = React.useRef(null);
const confirmPasswordInput = React.useRef(null);

const handleSubmit = (event) => {
event.preventDefault();
console.log(
nameInput.current.value,
emailInput.current.value,
numberInput.current.value,
ageInput.current.value,
usernameInput.current.value,
passwordInput.current.value,
confirmPasswordInput.current.value
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
         placeholder="Please Enter Your Phone No."
         class="form-control"
         id="number"
         required
         ref={numberInput}
       />
</div>
<div class="mb-3">
<label for="age" class="form-label">
Age
</label>
<input
         type="number"
         placeholder="Please Enter Your Age"
         class="form-control"
         id="age"
         min="18"
         max="120"
         required
         ref={ageInput}
       />
</div>
<div class="mb-3">
<label for="username" class="form-label">
Username
</label>
<input
         type="text"
         placeholder="Please choose a username"
         class="form-control"
         id="username"
         required
         ref={usernameInput}
       />
</div>
<div class="mb-3">
<label for="password" class="form-label">
Password
</label>
<input
         type="password"
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
         class="form-control"
         id="confirmPassword"
         required
         ref={confirmPasswordInput}
       />
</div>
<button type="submit" class="btn btn-primary">
Register
</button>
</form>
</div>
);
}

export default OnBoarding;