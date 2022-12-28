import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import AdminSideBar from '../../../components/sideBaer/AdminSideBar';
import "./AllDetails.css"
function AdminServerDetails() {
    const [allDetails, setAllDetails]=useState([]);
    const {AllDetalsId}=useParams();
    console.log(AllDetalsId);
    useEffect(()=>{
      fetch(" http://localhost:5050/allDashboardContentRow/"+AllDetalsId).then((res)=>{return res.json()}).then((resp)=>{
        setAllDetails(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
  
    },[])
    
  return (
    <div>
         <div className='Usercontainer'>
       <AdminSideBar />
        {allDetails && 
        <div className='deatails-container'>
            <div className="userDetails">
            <div className="detail"><h4>User Record ID :<span>{allDetails.id}</span></h4></div>
            <div className="detail"><h4><img src={allDetails.avatar} alt={AllDetalsId.userName} className="detailImage"/><span>{allDetails.userName}</span></h4></div>
            <div className="detail"><h4>User Email:<span>{allDetails.email}</span></h4></div>
            <div className="detail"><h4>User Phone Number :<span>{allDetails.phone}</span></h4></div></div>
        <div className="serverSideDetails">
            <div className="detail"><h4>Server Name:<span>{allDetails.serverName}</span></h4></div>
            <div className="detail"><h4>Server Code :<span>{allDetails.serverNo}</span></h4></div>
            <div className="detail"><h4>Date of Opened Server :<span>{allDetails.openedDate}</span></h4></div>
            <div className="detail"><h4>Date of Closed Server:<span>{allDetails.closedDate}</span></h4></div>
            </div>
    
        <Link to="/admin-page" className='btn btn-danger'>Back to home</Link>
        </div>}
        </div>
    </div>
  )
}

export default AdminServerDetails