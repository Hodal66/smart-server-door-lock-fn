import React from "react";
import { useState } from "react";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import { serverRowsContent } from "../../../data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {v4 as uuid} from "uuid"
import { useNavigate} from "react-router-dom";

function AddServerPage() {
  const [serverContent, setServerContent]=useState(serverRowsContent)
  const [serverNameState, setServerNameState]= useState("");
  const [serverCodeState, setServerCodeState]=useState("");


  const history =useNavigate();
 

  const handleSubmitForm = (event) => {
   
    event.preventDefault();
    const id = uuid();
    let uniqueId = id.split(0,2);
    console.log("The full Id is :",id);
    console.log("The specific Id is ", uniqueId);
    const Name = serverNameState;
    const code = serverCodeState;

    serverContent.push({id:uniqueId, serverName:Name, serverCode:code});
    console.log(serverContent)
    alert("welldone!!!")
    history("/server-admin");
  };

  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="addServerContainer">
        <div className="contentContainer serverContentContainer">
          <div className="dataInTable addServer">
            <form>
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
                    onChange={(e)=>setServerNameState(e.target.value)}
                    className="serverName"
                  />
                </div>
                <div className="inputContainer serverCode">
                  <label htmlFor="serverCode">Server Code</label>
                  <input
                    type="text"
                    name="serverCode"
                    id="serverCode"
                    onChange={(e)=>setServerCodeState(e.target.value)}
                    className="serverCode"
                  />
                </div>

                <button className="editButton addServerButton" onClick={handleSubmitForm}>Save</button>
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

export default AddServerPage;
