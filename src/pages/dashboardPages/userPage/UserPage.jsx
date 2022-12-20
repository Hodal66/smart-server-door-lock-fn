import React from "react";
import { serverRowsContent } from "../../../data";
import { DataGrid } from "@mui/x-data-grid";
import { ButtonBase } from "@mui/material";
import ToggleOffTwoToneIcon from '@mui/icons-material/ToggleOffTwoTone';
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import UserSidebarDashBoard from "../../../components/sideBaer/UserSidebarDashBoard";
import UserModel from "./UserModel";

function UserPage() {
  const [serverContent, setServerContent]=useState(serverRowsContent);
  const [isUserModalOpen, setIsUserMoadalOpen]=useState(false);
  const history = useNavigate();
const hundleServerEdit =(id, name, code)=>{
  // history(`/server/${id}`)

  // console.log("the id to update is_____", id);
  // console.log("the name to update is_____", name);
  // console.log("the code to update is_____", code);
  // eslint-disable-next-line no-lone-blocks
  {serverContent.map(({id, serverName, serverNo})=>{
    return <div key={id}>
         <UserModel setIsUserMoadalOpen={isUserModalOpen} serverName={serverName} serverNo = {serverNo} />
    </div>
  })}
}


  const columns = [
    {
      field: "id",
      headerName: "NO",
      width: 100,
    },
    {
      field: "serverNo",
      headerName: "SERVER NAME",
      width: 300,
    },
    {
      field: "serverName",
      headerName: "SERVER NAME",
      width: 300,
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="actionContainerButtons">
            {isUserModalOpen &&< UserModel/>}
            {/* <Link to={`/server/${params.row.id}`}> */}
              <div className="editButton">
                <Box>
                  <ButtonBase>
                    <ToggleOffTwoToneIcon className="togleOnOff" style={{fontSize:"3rem"}} onClick={()=>hundleServerEdit(params.row.id, params.row.serverName, params.row.serverNo)}/>
                  </ButtonBase>
                </Box>
              </div>
            {/* </Link> */}
            {/* <div className="deleteButton">
              <Box>
                <ButtonBase>
                  <Delete  onClick={()=>handleServerEdit(params.row.id)}/>
                </ButtonBase>
              </Box>
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <UserSidebarDashBoard/>
      <div className="serverDashboardContainer">
      
        <div className="user-message">
          <h1>Please Choose Server To Open</h1>
        </div>
       
      <div className="contentContainer serverContentContainer">
        <div className="dataInTable">
          <div className="titleHeader">
            <h3>Server Room Status</h3>
          </div>
          <div className="tableContent">
            <div style={{ height: 300, width: "100%" }}>
              <DataGrid rows={serverContent} columns={columns} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default UserPage;







// import React, { useState } from "react";
// // import UserSidebarDashBoard from "../../components/sideBaer/UserSidebarDashBoard";
// import "../dashboardContent.css";
// import { serverRows } from "../../../data";
// import { DataGrid } from "@mui/x-data-grid";
// import { DeleteForever, Edit } from "@mui/icons-material";
// import { Box } from "@mui/system";
// import { ButtonBase } from "@mui/material";
// import UserSidebarDashBoard from "../../../components/sideBaer/UserSidebarDashBoard";
// function UserPage() {
//   const [adminData, setAdminData] = useState(serverRows);
//   const handleClick = (id) => {
//     setAdminData(adminData.filter((item) => item.id !== id));
//   };
//   const columns = [
//     {
//       field: "no",
//       headerName: "NO",
//       width: 50,
//     },
//     {
//       field: "userName",
//       headerName: "USER NAME",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="userListContainer">
//             <img src={params.row.avatar} alt={params.row.userName} />
//             <span>{params.row.userName}</span>
//           </div>
//         );
//       },
//     },
//     { field: "email", headerName: "EMAIL", width: 150 },
//     { field: "serverNo", headerName: "SERVER NO", width: 150 },
//     { field: "openedDate", headerName: "OPENED DATE", width: 150 },
//     { field: "closedDate", headerName: "CLOSED DATE", width: 150 },
//     {
//       field: "actions",
//       headerName: "ACTIONS",
//       width: 150,
//       renderCell: (params) => {
//         return (
//           <div className="actionContainerButtons">
//             <div className="editButton">
//               <Box>
//                 <ButtonBase>
//                   <Edit />
//                 </ButtonBase>
//               </Box>
//             </div>
//             <div className="deleteButton">
//               <Box>
//                 <ButtonBase>
//                   <DeleteForever onClick={() => handleClick(params.row.id)} />
//                 </ButtonBase>
//               </Box>
//             </div>
//           </div>
//         );
//       },
//     },
//   ];
//   return (
//     <div className="Usercontainer">
//       {/* <UserSidebarDashBoard /> */}
//       <UserSidebarDashBoard />
//       <div className="contentContainer">
//         <div className="dataInTable">
//           <div className="titleHeader">
//             <h3>User Sidebar DashBoard</h3>
//           </div>
//           <div className="tableContent">
//             <div style={{ height: 300, width: "100%" }}>
//               <DataGrid rows={adminData} columns={columns} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserPage;
