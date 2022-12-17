import React, { useState } from "react";
// import UserSidebarDashBoard from "../../components/sideBaer/UserSidebarDashBoard";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import "../dashboardContent.css";
import { serverRows } from "../../../data";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteForever, Edit } from "@mui/icons-material";
import { Box } from "@mui/system";
import { ButtonBase } from "@mui/material";
function AdminPage() {
  const [adminData, setAdminData] = useState(serverRows);
  const handleClick = (id) => {
    setAdminData(adminData.filter((item) => item.id !== id));
  };
  const columns = [
    {
      field: "no",
      headerName: "NO",
      width: 50,
    },
    {
      field: "userName",
      headerName: "USER NAME",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListContainer">
            <img src={params.row.avatar} alt={params.row.userName} />
            <span>{params.row.userName}</span>
          </div>
        );
      },
    },
    { field: "email", headerName: "EMAIL", width: 150 },
    { field: "serverNo", headerName: "SERVER NO", width: 150 },
    { field: "openedDate", headerName: "OPENED DATE", width: 150 },
    { field: "closedDate", headerName: "CLOSED DATE", width: 150 },
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="actionContainerButtons">
            <div className="editButton">
              <Box>
                <ButtonBase>
                  <Edit />
                </ButtonBase>
              </Box>
            </div>
            <div className="deleteButton">
              <Box>
                <ButtonBase>
                  <DeleteForever onClick={() => handleClick(params.row.id)} />
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
      <div className="contentContainer">
        <div className="AllDataOverViewContainer">
          <div className="availableContent">
            <h3>All Serves Available</h3>
            <p>20</p>
          </div>
          <div className="availableContent">
            <h3>All Users Available</h3>
            <p>12</p>
          </div>
          <div className="availableContent">
            <h3>All Active Servers </h3>
            <p>5</p>
          </div>
        </div>

        <div className="dataInTable">
          <div className="titleHeader">
            <h3>Server Room Status</h3>
          </div>
          <div className="tableContent">
            <div style={{ height: 300, width: "100%" }}>
              <DataGrid rows={adminData} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
