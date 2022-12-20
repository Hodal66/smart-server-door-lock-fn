import React from "react";
import { userRows } from "../../../data";
import { DataGrid } from "@mui/x-data-grid";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import { ButtonBase } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useState } from "react";

function UserAdmin() {
  const [serverContent, setServerContent]=useState(userRows);
  const handleServerEdit =(id)=>{
    setServerContent(serverContent.filter((item)=> item.id !==id))
  }

  const hundleEdit=(id, name, profile, email)=>{
    localStorage.setItem("", id);
    localStorage.setItem("", name);
    localStorage.setItem("", profile);
    localStorage.setItem("", email);

  }





  const columns = [
    {
      field: "id",
      headerName: "USER ID",
      width: 100,
    },
    {
        field: "userName",
        headerName: "USER NAME",
        width: 300,
        renderCell: (params) => {
          return (
            <div className="userListContainer">
              <img src={params.row.avatar} alt={params.row.userName} />
              <span>{params.row.userName}</span>
            </div>
          );
        },
      },
    {
      field: "email",
      headerName: "EMAIL",
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
                    <Edit onClick={()=>hundleEdit(params.row.id, params.row.userName, params.row.avatar , params.row.email)}/>
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
        <Link to="/add-user-page">
        <div className="addButton">
          <button className="addServerButton">Add User</button>
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

export default UserAdmin;
