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



  const columns = [
    {
      field: "no",
      headerName: "NO",
      width: 100,
    },
    {
      field: "serverNo",
      headerName: "SERVER NAME",
      width: 200,
    },
    {
      field: "serverName",
      headerName: "SERVER NAME",
      width: 200,
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="actionContainerButtons">
            <Link to={`/server/${params.row.id}`}>
              <div className="editButton">
                <Box>
                  <ButtonBase>
                    <Edit />
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
        <Link to="/add-server">
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
