import React from 'react'
import {Routes, Route, useNavigate , Router} from "react-router-dom"
import {Link} from "react-router-dom"
import usericon from"../images/userr.png"
import usercart from"../images/cart.png"
import logout from "../images/logout.png"
export default function Navbar() {
    const navigate=useNavigate()

const openNav=()=> {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
}

const closeNav=()=> {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
    const logoutt=()=>{
        navigate('/')
    var reply= window.confirm("Warning:: You are going to be logged out!")
        if(localStorage.token&&reply==true){
            // window.location.reload()
            localStorage.removeItem('token')
            alert("Logged out successfully")
        }
        else if(localStorage.getItem("token") === null){
            alert("You are not logged in.")
        }

        else{
            alert("Thank you for staying back.")
        }

    }
    return (
        <>
            <div id="mySidebar" className="sidebar">
        <Link to="/" className="">HOME</Link><Link to="/mp" className="">GOODS</Link>
    {/*<Link to="/addgood" className="">SELL AN ITEM</Link>*/}
        <Link to="/contact" className="">CONTACT US</Link>
            
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
  <Link to="/cart"><span className="space"><img src={usercart} alt="" className="resize"/>My cart</span></Link> 
 <Link to=""><span className="space" onClick={logoutt}><img src={logout} alt="" className="resize2"/>Logout</span></Link>
</div>

<div id="main">
  <button className="openbtn" onClick={openNav}>&#9776; </button>
</div>
        </>
    )
}
