/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import "../dashboardContent.css";

function AdminPage() {
  const [allDetails, setEmpData] = useState("")
  const navigate=useNavigate();

  useEffect(()=>{
    fetch("http://localhost:5050/allDashboardContentRow").then((res)=>{return res.json()}).then((resp)=>{
      setEmpData(resp);
    }).catch((err)=>{
      console.log(err.message);
    })

  },[])
  const RemoveFunction =(event,id)=>{
    event.preventDefault();
    if(window.confirm("Do you want to Remove ?")){

   
    
    fetch("http://localhost:5050/allDashboardContentRow/"+id,{
      method: "DELETE",

    })
      .then((res) => {
        alert("data renoved successfully");
        console.log("The delete detail Id is", id)
        window.location.reload()

      })
      .then((err) => {console.log(err.message)});
    }else{
      navigate("/")
    }
  };
  
  
  const handleAllDetails =(event,id)=>{
    event.preventDefault();
    navigate("/admin-server/details/"+id)
  }
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
          <div className="serverDashboardContainer">
            <table className="table table-bordered">
              
              <thead className='bg-dark text-white'>
                <tr>
                  <td>ID</td>
                  <td>User Name</td>
                  <td>Server Name</td>
                  <td>Opened Date</td>
                  <td>Closed Date</td>
                  <td>Actions</td>

                </tr>
              </thead><tbody>
                { allDetails && allDetails.map(item=>(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.userName}</td>
                      <td>{item.serverName}</td>
                      <td>{item.openedDate}</td>
                      <td>{item.closedDate}</td>
                      <td>
                        <React.Fragment>
                        <a onClick={(event)=>handleAllDetails(event,item.id)} className='btn btn-primary'>Details</a>
                      <a onClick={(event)=>RemoveFunction(event,item.id)} className='btn btn-danger'>Delete</a>
                      </React.Fragment>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
