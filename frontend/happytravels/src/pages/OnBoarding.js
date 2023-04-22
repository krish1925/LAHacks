import React from "react";
import Nav from "../components/Nav";

function OnBoarding() {
    return (
      <div class="registration">
          <Nav />
          <h1 style={{ margin: '0 35%' }}> Registration Form</h1>
        <form style={{ margin: '0 20%' }}>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input placeholder = "Please Enter Your Name" type="text" class="form-control" id="name" required />
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input placeholder = "Please Enter Your Email" type="text" class="form-control" id="name" required />
  </div>
  <div class="mb-3">
    <label for="number" class="form-label">Number</label>
    <input type="tel" placeholder = "Please Enter Your Phone No." class="form-control" id="number" required />
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <input type="number" placeholder = "Please Enter Your Age" class="form-control" id="age" min="18" max="120" required />
  </div>
  <div class="mb-3">
    <label for="username" class="form-label">Username</label>
    <input type="text" placeholder = "Please choose a username" class="form-control" id="username" required />
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" required />
  </div>
  <div class="mb-3">
    <label for="confirmPassword" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="confirmPassword" required />
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>

        
      </div>
    );
  }
  
  
export default OnBoarding;