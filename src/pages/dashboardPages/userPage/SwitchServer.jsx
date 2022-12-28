/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import UserSidebarDashBoard from "../../../components/sideBaer/UserSidebarDashBoard";
import "../../helpPage/help.css";
import NextImage from "../../../assets/images/nextImage.jpg";
import NextImageClick from "../../../assets/images/click.png";
import OnOff from "../../../assets/images/on-and-off-toggle-switch-button-red-and-green-vector-14282624.jpg";
import OffImage from "../../../assets/images/closedServerImage.jpg";
import OnOffServer from "../../../assets/images/OpenOpenServerImage.jpg"
import axios from "axios";
import moment from "moment/moment";
import { useParams } from "react-router-dom";


function SwitchServer() {
  const [openServer, setOpenServer] = useState(false);
  const params = useParams();


  const turnSurverOn = ()=>{

    axios.get("http://192.168.1.67/Req=30");
    log('open');



    setOpenServer(true)

  }


  const turnSurverOff = ()=>{
    axios.get("http://192.168.1.67/Req=180");
    setOpenServer(false)
    log('close');
  }


  const log = (action)=>{

    const timeStamp = moment().format('DD/MM/YYYY HH:mm:ss');
    const user = localStorage.getItem("UserEmail");
    const server = params.serverId;
    axios.post('http://localhost:5050/logs',{timeStamp,user,server,action})

  }

  return (
    <div className="Usercontainer">
      <UserSidebarDashBoard />
      <div className="openAndClose">

     
      <div
        className="serverDashboardContainer cardsConainer iframeContainer"
        id=""
      >
        {openServer ? (
          <div className="card" style={{ width: "18rem", marginTop: "6rem" }}>
            <img
              className="card-img-top clikImage"
              style={{ width: "18rem", height: "15rem" }}
              src={OffImage}
              alt="Card mage cap"
            />
            <div className="card-body serverON">
              <div className="point" id="IdPoint1">1</div>
              <div className="point" id="IdPoint2">2</div>
              <div className="point" id="IdPoint3">3</div>
              <div className="point" id="IdPoint4">4</div>
              <div className="point" id="IdPoint5">5</div>
              <div className="point" id="IdPoint6">6</div>
            </div>
          </div>
        ) : (
          <div className="card" style={{ width: "18rem", marginTop: "6rem" }}>
            <img
              className="card-img-top clikImage"
              style={{ width: "18rem", height: "15rem" }}
              src={OnOffServer}
              alt="Card mage cap"
            />
            <div className="card-body serverOFF">
              <div className="point on " id="IdPoint1">1</div>
              <div className="point on" id="IdPoint2">2</div>
              <div className="point on" id="IdPoint3">3</div>
              <div className="point on" id="IdPoint4">4</div>
              <div className="point on" id="IdPoint5">5</div>
              <div className="point on" id="IdPoint6">6</div>
            </div>
          </div>
        )}
       
         
        </div>
        <div className="buttonContainer">
          {!openServer ? (
            <button className="btn btn-danger" onClick={turnSurverOn}>Turn ON Entry Way</button>
          ) : (
            <button className="btn btn-success" onClick={turnSurverOff}>Turn OFF Entry Way</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SwitchServer;
