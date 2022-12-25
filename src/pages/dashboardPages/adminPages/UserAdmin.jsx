/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { userRows } from "../../../data";
import AdminSideBar from "../../../components/sideBaer/AdminSideBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function UserAdmin() {
    const [serverContent, setServerContent]=useState(userRows);
  
  const navigate=useNavigate();
  useEffect(()=>{
    fetch(" http://localhost:8000/userRows").then((res)=>{return res.json()}).then((resp)=>{
        setServerContent(resp);
    }).catch((err)=>{
      console.log(err.message);
    })

  },[])

  const LoadEdit =(event,id)=>{
    event.preventDefault();
    navigate(`/server/${id}`)
  }
  const RemoveFunction =(event,id)=>{
    event.preventDefault();
    if(window.confirm("Do you want to Remove ?"));
    
    fetch(" http://localhost:8000/userRows"+id,{
      method: "DELETE",

    })
      .then((res) => {
        alert("data removed successfully");
        window.location.reload()

      })
      .then((err) => {console.log(err.message)});
  };
  

  return (
    <div className="Usercontainer">
      {/* <UserSidebarDashBoard /> */}
      <AdminSideBar />
      <div className="serverDashboardContainer ">
        <Link to="/add-user-page">
        <div className="addButton">
          <button className="addServerButton">Add User</button>
        </div>
        </Link>
        <div className="serverDashboardContainer dataInTable">
            <table className="table table-bordered">
              
              <thead className='bg-dark text-white'>
                <tr>
                  <td>User ID</td>
                  <td>Full Name</td>
                  <td>User Email</td>
                  <td>User Phone</td>
                  <td>Actions</td>
                </tr>
              </thead><tbody>
                { serverContent && serverContent.map(item=>(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td><div className="userListContainer"><span><img src={item.avatar}/></span><span></span>{item.userName}</div></td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <React.Fragment>
                            <a onClick={(event)=>LoadEdit(event,item.id)} className='btn btn-success'>Edit</a>
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
  );
}

export default UserAdmin;
