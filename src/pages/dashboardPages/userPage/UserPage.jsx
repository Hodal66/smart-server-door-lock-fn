/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserSidebarDashBoard from '../../../components/sideBaer/UserSidebarDashBoard';

function UserPage() {
  const [empData, setEmpData] = useState("")
  const navigate=useNavigate();
  useEffect(()=>{
    fetch(" http://localhost:8000/serverRows").then((res)=>{return res.json()}).then((resp)=>{
      setEmpData(resp);
    }).catch((err)=>{
      console.log(err.message);
    })

  },[])

  const goToSwitchServerOnOff =(event,id)=>{
    event.preventDefault();
    navigate(`/server/${id}`)
  }
  
  return (
    <div className='Usercontainer'>
       <UserSidebarDashBoard/>
      <div className="serverDashboardContainer ">
        <Link to="/add-server-page">
        <div className="addButton">
          <button className="addServerButton">Add New Server  (+)</button>
        </div>
        </Link>
        <div className="serverDashboardContainer dataInTable">

            <table className="table table-bordered ">
              
              <thead className='bg-dark text-white'>
                <tr>
                  <td>ID</td>
                  <td>Server Name</td>
                  <td>Servver Code</td>
                  <td>Actions</td>
                </tr>
              </thead><tbody>
                { empData && empData.map(item=>(
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.serverName}</td>
                      <td>{item.serverNo}</td>
                      <td>
                        <React.Fragment>
                          <a onClick={(event)=>goToSwitchServerOnOff(event,item.id)} className='btn btn-primary'>Switch Server</a>
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
  )
}

export default UserPage













// import React from "react";
// import AdminSideBar from "../../../components/sideBaer/AdminSideBar";


// function ServerPage() {
  


  
//   return (
//     <div className="Usercontainer">
//       <AdminSideBar/>
      
//     </div>
//   );
// }

// export default ServerPage;
