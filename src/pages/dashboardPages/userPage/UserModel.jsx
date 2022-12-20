import React from 'react'
import "./user.css";

function UserModel({setIsUserMoadalOpen, id, serverName, serverNo}) {
  return (
    <div className='modalContainer'>
        <div className="headerContent">
            <h1>Do you want to Open this server ? </h1>
        </div>
        <section className='modalBodyContent'>
            <p>Server Name:{serverName} <span></span></p>
            <p>Server Code:{serverNo} <span></span></p>
        </section>
        <section className='modalButtonContent'>
            <button >Open</button>
            <button onClick={setIsUserMoadalOpen(false)}>Cansel</button>
        </section>

    </div>
  )
}

export default UserModel