import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
function AdminSideBar() {
  return (
    <div>
      <section className="sideBarContainer">
        <Link to="/admin-page">
        <div className="adminTextContainer AdminIcon">
          <h3>
            <span>Admin</span> Dashboard
          </h3>
        </div>
        </Link>
        <Link to="/server" >
        <div  className="serverIconContainer AdminIcon">
          <StorageIcon />
          <p>Server</p>
        </div>
        </Link>
        <div className="userIconContainer AdminIcon">
          <PeopleAltIcon />
          <p>Users</p>
        </div>
        <div className="userIconContainer AdminIcon">
          <AdminPanelSettingsIcon />
          <p>Settings</p>
        </div>
      </section>
    </div>
  );
}

export default AdminSideBar;
