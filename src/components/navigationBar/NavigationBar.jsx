import React from "react";
import "./navigation.css";
// import { useNavigate } from "react-router-dom";
import StorageIcon from "@mui/icons-material/Storage";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import InfoIcon from "@mui/icons-material/Info";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
function NavigationBar() {
  // let navigation = useNavigate();

  return (
    <div className="NavigationContainer">
      <div className="leftSideNavContainer">
        <Link to="/">
          <div className="logoIconContainer">
            <ButtonGroup size="large">
              <IconButton
                aria-label="NightlightIcon"
                className="NightlightIcon"
              >
                <StorageIcon className="logoIcon" />
              </IconButton>
            </ButtonGroup>
          </div>
        </Link>
        <div className="logoName">
          <span>
            <h2>
              SMART SERVER <span className="serverText">Door Lock</span>
            </h2>{" "}
          </span>
        </div>
      </div>

      <div className="rightSideNavContainer">
        <ButtonGroup
          size="small"
          variant="text"
          padding="2rem"
          aria-label="outlined primary button group"
          className="homeIconsContainer"
        >
          <Link to="/user-dashboard">
          <div className="darkModeIcon">
            <IconButton aria-label="NightlightIcon">
              <NightlightIcon className="icon" />
            </IconButton>
          </div>
          </Link>
          <div className="homeIcon">
            <Link to="/admin-page">
              <IconButton aria-label="AddHomeWorkIcon">
                <AddHomeWorkIcon className="icon" />
              </IconButton>
            </Link>
            {/* <p>Home</p> */}
          </div>
          <div className="aboutUsIcon">
            <Link to="/register-page">
            <IconButton aria-label="InfoIcon">
              <InfoIcon className="icon" />
            </IconButton>
            </Link>

            {/* <p>About Us</p> */}
          </div>
          <div className="goToLoginPage">
            <Link to="/login-page">
              <Button variant="contained" className="loginButton">
                Login
              </Button>
            </Link>
          </div>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default NavigationBar;
