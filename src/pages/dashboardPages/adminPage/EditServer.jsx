import React from "react";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";

function EditServer() {
  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="contentContainer serverContentContainer">
        <div className="dataInTable editServer">
          <form action="">
          <div className="titleHeader editServerHeader">
            <h3>Edit Server</h3>
          </div>
          <div className="EditFormContainer">
            <div className="inputContainer serverName">
              <label htmlFor="serverName">Server Name</label>
              <input
                type="text"
                name="serverName"
                id="serverName"
                className="serverName"
              />
            </div>
            <div className="inputContainer serverCode">
              <label htmlFor="serverCode">Server Name</label>
              <input
                type="text"
                name="serverCode"
                id="serverCode"
                className="serverCode"
              />
            </div>
            <button className="editButton editButtonPage">Edit Server</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditServer;
