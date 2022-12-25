import React from "react";
import { useState } from "react";
import { userRows } from "../../../data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {v4 as uiid} from "uuid";
import {useNavigate} from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
function AddUserPage() {
const [userContentState, setUserContent]=useState(userRows);
 const [userNameState, setUserNameState]=useState("");
 const [emailState, setEmailState] = useState("");
 const [profileState, setProfileState]=useState("");
 const [phoneState, setPhoneState] = useState("");


 const history = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const names = userNameState;
    const userEmail = emailState;
    const profilePicture = profileState;
    const phoneNumber = phoneState;
    
    let id = uiid();
    const uniqueId = id.slice(0,2);
    userContentState.push({
      id: uniqueId,
      userName:names,
      avatar: profilePicture,
      email: userEmail,
      phone: phoneNumber});
      history("/user-admin");

  }


  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="addServerContainer">
        <div className="contentContainer userContentContainer">
          <div className="dataInTable addServer">
            <form action="" onSubmit={handleSubmitForm}>
              <div className="titleHeader addServerHeader">
                <h2>Add User</h2>
              </div>
              <div className="EditFormContainer">
                <div className="inputContainer userName">
                  <label htmlFor="userName">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    className="userName"
                    placeholder="eg:Muheto Hodal"
                    required
                    value={userNameState}
                    onChange={(e)=>setUserNameState(e.target.value)}
                  />
                </div>
                <div className="inputContainer email">
                  <label htmlFor="email"> Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="email"
                    placeholder="eg:mhthodol@gmail.com"
                    required
                    value={emailState}
                    onChange={(e)=>setEmailState(e.target.value)}
                  />
                </div>
                <div className="inputContainer file">
                  <label htmlFor="file"> Upload Image:</label>
                  <input
                    type="file"
                    name="fileUpload"
                    id="fileUpload"
                    className="fileUpload"
                    value={profileState}
                    onChange={(e)=>setProfileState(e.target.value)}
                  />
                </div>
                <div className="inputContainer phone">
                  <label htmlFor="phone"> Phone Number:</label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    className="phoneContact"
                    placeholder="eg:0782439775"
                    value={phoneState}
                    onChange={(e)=>setPhoneState(e.target.value)}
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

export default AddUserPage;
