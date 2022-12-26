import React from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import axios from "axios";

function AddUserPage() {
 const [userName, setUserNameState]=useState("");
 const [email, setEmailState] = useState("");
 const [userPassword, setUserPassword]=useState("");
 const [avatar, setProfileState]=useState("");
 const [phone, setPhoneState] = useState("");
 const [validation, setValidation]=useState("");

 const history = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    
    //upload image
    const formData = new FormData();
    formData.append("fileUpload",avatar);
    axios.post("http://localhost:8000/userRows",formData).then((res)=>{console.log("This is image to be uploaded",res)});

    const userContentState = {userName, email, avatar, phone, userPassword};
    
   fetch("http://localhost:8000/userRows",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(userContentState)
   }).then((response)=>{
    alert("User Saved successfully");
    history("/user-admin")
   }).catch((err)=>console.log(err.message));

  }
const handleImageUpload=(e)=>{
  console.log(e.target.files[0].name);

  setProfileState(e.target.files[0]);
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
              <div className="EditFormContainer AboutCreateUSer">
                <div className="leftSideContent">
                <div className="inputContainer userName">
                  <label htmlFor="userName">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    className="userName"
                    placeholder="eg:Muheto Hodal"
                    onMouseDown={(e)=>setValidation(true)}
                    value={userName}
                    onChange={(e)=>setUserNameState(e.target.value)}
                  />
                  {userName.length === 0 && validation && <p className="text-danger">Enter valid name</p>}
                </div>
                <div className="inputContainer userPassword">
                  <label htmlFor="userPassword">User Password</label>
                  <input
                    type="text"
                    name="userPassword"
                    id="userPassword"
                    className="userPassword"
                    placeholder="eg:Muheto Hodal"
                    onMouseDown={(e)=>setValidation(true)}
                    value={userPassword}
                    onChange={(e)=>setUserPassword(e.target.value)}
                  />
                   {userPassword.length === 0 && validation && <p className="text-danger">Enter valid User Password</p>}
                </div>
                </div>
                <div className="inputContainer email">
                  <label htmlFor="email"> Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="email"
                    placeholder="eg:mhthodol@gmail.com"
                   onMouseDown={(e)=>setValidation(true)}
                    value={email}
                    onChange={(e)=>setEmailState(e.target.value)}
                  />
                   {email.length === 0 && validation && <p className="text-danger">Enter valid Email</p>}
                </div>
               
                <div className="inputContainer phone">
                  <label htmlFor="phone"> Phone Number:</label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    className="phoneContact"
                    placeholder="eg:0782439775"
                    value={phone}
                    onChange={(e)=>setPhoneState(e.target.value)}
                  />
                   {(phone.length === 0 || phone.length !==10)
                    && validation && <p className="text-danger">Enter valid Phone Number</p>}
                </div>
                <div className="rightSideContent">
                <div className="inputContainer file">
                  <label htmlFor="file"> Upload Image:</label>
                  <input
                    type="file"
                    name="fileUpload"
                    id="fileUpload"
                    className="fileUpload"
                    value=""
                    // onChange={(e)=>setProfileState(e.target.files[0])}
                    onChange={handleImageUpload}
                  />
                </div>
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

