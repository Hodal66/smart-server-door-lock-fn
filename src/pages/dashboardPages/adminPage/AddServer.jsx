import React from "react";
import { useState } from "react";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import { serverRowsContent } from "../../../data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AddServer() {
  const [serverContent, setServerContent] = useState(serverRowsContent);
  //Just for code scalability
  let newValue=setServerContent();
  console.log(newValue);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const name = event.target.elements.serverName.value;
    const code = event.target.elements.serverCode.value;
    // console.log(`Server name is ${name} while server code is ${code}`);
    const newServerList = {
      id: serverContent.length + 1,
      no: serverContent.length + 1,
      serverName: name,
      serverNo: code,
    };
    serverContent.push(newServerList);
    // toast("Server Saved Successfully !!!");
    toast.success(` ${name} Is saved successull`);
  };

  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="addServerContainer">
        <div className="contentContainer serverContentContainer">
          <div className="dataInTable addServer">
            <form action="" onSubmit={handleSubmitForm}>
              <div className="titleHeader addServerHeader">
                <h2>Add Server</h2>
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
                  <label htmlFor="serverCode">Server Code</label>
                  <input
                    type="text"
                    name="serverCode"
                    id="serverCode"
                    className="serverCode"
                  />
                </div>
                <button className="editButton addServerButton">Save</button>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddServer;
