import React from "react";
import "./Navbar.css";

export default function Navbar(){
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-white">heyBook</a>
      </div>
      
      <div className="navbar-end">
        <button className="btn mr-4" id="telegram-btn">Join us on Telegram!</button>
        <button className="btn" id="deposit-btn">Deposit a book!</button>
      </div>
    </div>
  )
}