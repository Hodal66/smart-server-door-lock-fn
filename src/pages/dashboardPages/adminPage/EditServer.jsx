import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import { serverRowsContent } from "../../../data";
import {v4 as uuid} from "uuid"

function EditServer() {
  const [serverContent, setServerContent]=useState(serverRowsContent);
  const [serverName, setServerName] = useState("");
  const [serverCode, setServerCode] = useState("");
  const [idToUpdate, setIdToUpdate]= useState("");

  const history = useNavigate();



  const index = serverRowsContent.map((item)=>{
    return item.id
  // eslint-disable-next-line no-undef
  }).indexOf(id);
  console.log("Id to update is : ", index);

  const hundleSubmitEditServer =(event)=>{
  event.preventDefault();
const AllServerContent = serverContent[index];
AllServerContent.id = idToUpdate;
AllServerContent.serverName = serverName;
AllServerContent.serverNo = serverCode;

const useEffect=(() => {
  return () => {
    setServerName(localStorage,"serverName");
    setServerCode(localStorage,"serverCode");
    setIdToUpdate(localStorage,"idToUpdate");

    history("/user-admin");

  };
}, [idToUpdate])
}

  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="contentContainer serverContentContainer">
        <div className="dataInTable editServer">
          <form>
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
                value={serverName}
                onChange={(e)=>setServerName(e.target.value)}
              
              />
            </div>
            
            <div className="inputContainer serverCode">
              <label htmlFor="serverCode">Server Name</label>
              <input
                type="text"
                name="serverCode"
                id="serverCode"
                className="serverCode"
                value="000099"
                onChange={(e)=>setServerCode(e.target.value)}
                
              />
            </div>
            <button className="editButton editButtonPage" onClick={hundleSubmitEditServer}>Update</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditServer;
