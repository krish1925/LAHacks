//big sign up form
import "./OnBoarding.css"
// import { navigate } from '@reach/router';
import {useState} from 'react'
// import { useCookies } from 'react-cookie'
import Nav from '../components/Nav'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function OnBoarding() {
    // const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [formData, setFormData] = useState ({
        // user_id: cookies.UserId,
        username: '',
        first_name: '',
        last_name: '',
        pronouns: '',
        url: '',
        about: '',
        password: '',
        confirmpassword: ''
    })

    let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (formData.password !== formData.confirmpassword){
          alert("Passwords do not match");
        }
        else{
        // const isInvalidBirthday = formData.dob_day > 31 ||
        //   formData.dob_month > 12 ||
        //   formData.dob_year > 2023;
      
        // const isFocusOnSchool = formData.dob_year > 2010;
      
        // if (isInvalidBirthday) {
        //   alert("Invalid birthday");
        //   return; // early return to avoid clearing form data
        // }
      
        // if (isFocusOnSchool) {
        //   alert("Focus on school bro");
        //   return; // early return to avoid clearing form data
        // }
        console.log("submitted");
      
        try {
          const response = await axios.post("http://localhost:8000/users", { formData });
          const success = response.status === 200;
          if (success) navigate("/feed");
        } catch (err) {
          console.log(err);
        }
      }
      };
      

    function handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
 

        setFormData ((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    console.log(formData);

    return (
        <>
            <Nav 
                whitePage={true}
                setShowModal={() => {}}
                showModal={false}
            />
            <div className="onboarding">
                <h2>
                    SIGN UP 
                </h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <br />
                        <input 
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="  First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <br />
                        <br />

                        <label htmlFor="last_name">Last Name</label>
                        <br />
                        <input 
                            id="last_name"
                            type="text"
                            name="last_name"
                            placeholder="  Last Name"
                            required={true}
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                         <br />
                         <br />

                        <label htmlFor="username">Username</label>
                        <br />
                        <input 
                            id="username"
                            type="text"
                            name="username"
                            placeholder="  Create a username"
                            required={true}
                            value={formData.username}
                            onChange={handleChange}
                        />
                         <br />
                         <br />

                        <label htmlFor="pronouns">Pronouns</label>
                        <br />
                        <input 
                            id="pronouns"
                            type="text"
                            name="pronouns"
                            placeholder="  Pronouns"
                            required={false}
                            value={formData.pronouns}
                            onChange={handleChange}
                        />
                         <br />
                         <br />

                        <label htmlFor="about">Bio</label>
                        <br />
                        <input 
                            id="about"
                            type="text"
                            name="about"
                            placeholder="  Tell me something about yourself."
                            required={true}
                            value={formData.about}
                            onChange={handleChange}
                        />
                        <br />
                         <br />
                        
                    </section>

                    <section>
                        <label htmlFor="about">Profile Photo</label>
                        <br />
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                         <br />
                         <br />

                        <div className="photo-container">
                         {formData.url &&   <img src={formData.url} alt="profile picture preview"/>}
                        </div>


                        <label htmlFor="password">Password</label>
                        <br />
                        <input 
                            id="password"
                            type="text"
                            name="password"
                            placeholder="  Choose a password"
                            required={true}
                            value={formData.password}
                            onChange={handleChange}
                        />
                         <br />
                         <br />

                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <br />
                        <input 
                            id="confirmpassword"
                            type="text"
                            name="confirmpassword"
                            placeholder="  Choose a password"
                            required={true}
                            value={formData.confirmpassword}
                            onChange={handleChange}
                        />
                         <br />
                          <br />

                        <div className="submit">
                            <input type="submit"/>
                        </div>
                    </section>

                </form>

            </div>
        </>
    );
}

export default OnBoarding;

// import React from "react";
// import Nav from "../components/Nav";

// function OnBoarding() {
// const nameInput = React.useRef(null);
// const emailInput = React.useRef(null);
// const numberInput = React.useRef(null);
// const usernameInput = React.useRef(null);
// const passwordInput = React.useRef(null);
// const confirmPasswordInput = React.useRef(null);
// const interestInput = React.useRef(null);
// const imageInput = React.useRef(null);
// const pronounInput = React.useRef(null);

// const handleSubmit = (event) => {
// event.preventDefault();
// console.log(
// nameInput.current.value,
// emailInput.current.value,
// numberInput.current.value,
// usernameInput.current.value,
// passwordInput.current.value,
// confirmPasswordInput.current.value,
// interestInput.current.value,
// imageInput.current.value,
// pronounInput.current.value

// );
// };

// return (
// <div class="registration">
// <Nav />
// <h1 style={{ margin: "0 35%" }}> Registration Form</h1>
// <form onSubmit={handleSubmit} style={{ margin: "0 20%" }}>
// <div class="mb-3">
// <label for="name" class="form-label">
// Name
// </label>
// <input
//          placeholder="Please Enter Your Name"
//          type="text"
//          class="form-control"
//          id="name"
//          required
//          ref={nameInput}
//        />
// </div>
// <div class="mb-3">
// <label for="email" class="form-label">
// Email
// </label>
// <input
//          placeholder="Please Enter Your Email"
//          type="text"
//          class="form-control"
//          id="email"
//          required
//          ref={emailInput}
//        />
// </div>
// <div class="mb-3">
// <label for="number" class="form-label">
// Number
// </label>
// <input
//          type="tel"
//          placeholder="Please Enter Your Phone Number"
//          class="form-control"
//          id="number"
//          required
//          ref={numberInput}
//        />
// </div>
// <div class="mb-3">
// <label for="username" class="form-label">
// Username
// </label>
// <input
//          type="text"
//          placeholder="Please Choose a Username"
//          class="form-control"
//          id="username"
//          required
//          ref={usernameInput}
//        />
// </div>
// <div class="mb-3">
// <label for="pronouns" class="form-label">
// Pronouns
// </label>
// <input
//          placeholder="Please Enter Your Pronouns (optional)"
//          type="text"
//          class="form-control"
//          id="pronouns"
//          ref={pronounInput}
//        />
// </div>
// <div class="mb-3">
// <label for="Interests/Hobbies" class="form-label">
// Bio
// </label>
// <input
//          type="interests"
//          placeholder="Share What You Enjoy Doing for People to See! (optional)"
//          class="form-control"
//          id="interests"
//          ref={interestInput}
//        />
// </div>
// <div class="mb-3">
// <label for="Profile Picture" class="form-label">
// Profile Picture
// </label>
// <input
//          type="profile-pic"
//          placeholder="Submit a Link to an Image to Be Your Profile Picture (optional)"
//          class="form-control"
//          id="profile-pic"
//          ref={imageInput}
//        />
// </div>
// <div class="mb-3">
// <label for="password" class="form-label">
// Password
// </label>
// <input
//          type="password"
//          placeholder="Please Choose a Password"
//          class="form-control"
//          id="password"
//          required
//          ref={passwordInput}
//        />
// </div>
// <div class="mb-3">
// <label for="confirmPassword" class="form-label">
// Confirm Password
// </label>
// <input
//          type="password"
//          placeholder="Please Confirm Your Password"
//          class="form-control"
//          id="confirmPassword"
//          required
//          ref={confirmPasswordInput}
//        />
// </div>
// <button type="submit" class="btn btn-primary">
// Sign Up
// </button>
// </form>
// </div>
// );
// }

// export default OnBoarding;