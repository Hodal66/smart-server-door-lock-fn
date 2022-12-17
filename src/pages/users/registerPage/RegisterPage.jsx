import React from "react";
import "../user.css";
// import { Link } from "react-router-dom";
import loginPageBackGroundImage from "../../../assets/images/LoginBackgroundImage.png";
// import unlockImage from "../../../assets/images/unlockImage.jpeg";
function RegisterPage() {
  return (
    <div className="Usercontainer">
      <div className="user-pageContainer">
        <div className="leftImageContainer">
          <img src={loginPageBackGroundImage} alt="" />
        </div>
        <div className="RightContentContainer">
          {/* <div className="unlockImageContainer">
          <img src={unlockImage} alt="" />
        </div> */}
          <form className="insiderDivision">
            <div className="inputContainer">
              <label htmlFor="FullName">
                Full Name <span className="noEmptySpace">(*)</span>
              </label>
              <input
                type="text"
                placeholder="eg: MUHETO Hodal "
                name="fullName"
                id="fullName"
              />
            </div>

            <div className="inputContainer">
              <label htmlFor="FullName">
                Email <span className="noEmptySpace">(*)</span>
              </label>
              <input
                type="email"
                placeholder="eg: mhthodol@gmail.com "
                name="fullName"
                id="fullName"
              />
            </div>

            <div className="inputContainer">
              <label htmlFor="FullName">
                Password <span className="noEmptySpace">(*)</span>
              </label>
              <input
                type="password"
                placeholder="**********************"
                name="fullName"
                id="fullName"
              />
            </div>
            <button className="registerButton">Save User</button>
            {/* 
            <Link to="/login-page">
              <p>Login Page</p>
            </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
