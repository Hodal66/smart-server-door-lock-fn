import React from "react";
import AdminSideBar from "../../components/sideBaer/AdminSideBar";
// import UserSidebarDashBoard from "../../components/sideBaer/UserSidebarDashBoard";

import "./dashboardContent.css";

function AdminPage() {
  return (
    <div className="container">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="contentContainer">
        <div className="AllDataOverViewContainer">
          <div className="availableContent">
            <h2>All Serves Available</h2>
            <h1>20</h1>
          </div>
          <div className="availableContent">
            <h2>All Users Available</h2>
            <h1>12</h1>
          </div>
          <div className="availableContent">
            <h2>All Active Servers Available</h2>
            <h1>20</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
