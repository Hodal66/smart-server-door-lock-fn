import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
function UserSidebarDashBoard() {
  return (
    <div>
      <section className="sideBarContainer">
        {/* <Link to="/server"> */}
        <div className="adminTextContainer AdminIcon">
          <h3>
            <span>User</span> Dashboard
          </h3>
        </div>
        {/* </Link> */}
        {/* <Link to="/server" > */}
        <div  className="serverIconContainer AdminIcon">
          <StorageIcon />
          <p>Server</p>
        </div>
        {/* </Link> */}

        <div className="userIconContainer AdminIcon">
          <AdminPanelSettingsIcon />
          <p>Settings</p>
        </div>
      </section>
    </div>
  );
}

export default UserSidebarDashBoard;
