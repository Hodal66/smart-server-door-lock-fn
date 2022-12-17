import React from "react";
import "../user.css";
// import unlockImage from "../../../assets/images/unlockImage.jpeg";
import loginPageBackGroundImage from "../../../assets/images/LoginBackgroundImage.png";
import { Link } from "react-router-dom";
function LoginPage() {
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

            <Link to="/register-page">
              <p>register</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
