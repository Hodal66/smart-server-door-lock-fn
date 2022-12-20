import React from "react";
import { serverRowsContent } from "../../../data";
import { DataGrid } from "@mui/x-data-grid";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import { ButtonBase } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useState } from "react";

function ServerPage() {
  const [serverContent, setServerContent]=useState(serverRowsContent);
  const handleServerEdit =(id)=>{
    setServerContent(serverContent.filter((item)=> item.id !==id))
  }
const hundleServerEdit =(id, name, code)=>{
  console.log("the id to update is_____", id);
  console.log("the name to update is_____", name);
  console.log("the code to update is_____", code);
  localStorage.setItem("idToUpdate",id);
  localStorage.setItem("serverName",name);
  localStorage.setItem("serverCode",code);

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
            <Link to={`/server/${params.row.id}`}>
              <div className="editButton">
                <Box>
                  <ButtonBase>
                    <Edit onClick={()=>hundleServerEdit(params.row.id, params.row.serverName, params.row.serverNo)}/>
                  </ButtonBase>
                </Box>
              </div>
            </Link>
            <div className="deleteButton">
              <Box>
                <ButtonBase>
                  <Delete  onClick={()=>handleServerEdit(params.row.id)}/>
                </ButtonBase>
              </Box>
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="serverDashboardContainer">
        <Link to="/add-server-page">
        <div className="addButton">
          <button className="addServerButton">Add Server</button>
        </div>
        </Link>
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

export default ServerPage;
