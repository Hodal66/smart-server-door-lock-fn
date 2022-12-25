import React,{ useState} from "react";
// import { useNavigate } from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
// import { serverRowsContent } from "../../../data";

function EditServer() {
  // const [serverContent, setServerContent]=useState(serverRowsContent);
  const [serverName, setServerName] = useState("");
  const [serverCode, setServerCode] = useState("");
  // const [idToUpdate, setIdToUpdate]= useState("");

  // const history = useNavigate();
const hundleSubmitEditServer=()=>{

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
                value={serverCode}
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
