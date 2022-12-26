/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./user.css"
import { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import UserSidebarDashBoard from '../../../components/sideBaer/UserSidebarDashBoard';
import AlertDialog from './Dialog';
import OpenServerImage from "../../../assets/images/OpenOpenServerImage.jpg"
import CloseServerImage from "../../../assets/images/closeServerRack.jpg"
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
function SwitchServer() {
  const [empData, setEmpData] = useState([])
  const [openServerImage, setOpenedServerImage]=useState(false);
  const [controllButton, setControllButton]=useState(true);

  const [dialog, setDialog]=useState(false);

  const handleCloseAgree =(id)=>{
    navigate(`/user-dashboard/${id}`)
  }
  const navigate=useNavigate();
  useEffect(()=>{
    fetch("http://localhost:8000/serverRows").then((res)=>{return res.json()}).then((resp)=>{
      setEmpData(resp);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[])


  const handleOpenServer =()=>{
    setOpenedServerImage(!openServerImage);
  }
  return (
    <div className='Usercontainer'>
       <UserSidebarDashBoard/>
      <div className="serverDashboardContainer ">
        <div className="serverDashboardContainer dataInTable">
              <h1>You are going to switch on</h1>
              {openServerImage && <div className="ServerImageContainer">
                <img src={OpenServerImage} alt="open-serverImage" />
                <h2>Server is Open</h2>

              </div>}

              {!openServerImage && <div className="ServerImageContainer">
                <img src={CloseServerImage} alt="closed-serverImage" />
                <h2>Server is Closed</h2>
              </div>}
              <div className="buttonContainer">
             {!openServerImage && <div className="OpenButton btn btn-primary" onClick={handleOpenServer}>Open_Server</div> }

                 {openServerImage&&<div className="closeButton btn btn-danger" onClick={handleOpenServer}>Close_Server</div>}
              </div>
          </div>
          </div>
        </div>
  )
}

export default SwitchServer
