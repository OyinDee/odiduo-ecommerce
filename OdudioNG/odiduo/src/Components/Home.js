import React from 'react'
import {useEffect, useState} from "react"
import axios from "axios"
import Effect from "./Effect"
import usericon from"../images/userr.png"
import usercart from"../images/cart.png"
import {Routes, Route, useNavigate, Router} from "react-router-dom"
import {Link} from "react-router-dom"
import Mp from "./Mp"
import Navbar from './Navbar'
import Footer from './Footer'

export default function Home() {
    const navigate= useNavigate()
    return (
        <>
        <Navbar/>
        <div className="present">
    <div className="welcomearea">
    <center>
    <h2>Purchase, receive your goods.</h2>
    <h2>Sell, receive your payment.</h2>
    <h5>...That in the end, we are all satisfied!</h5>
    </center>
        
        
        <center><Link to="/mp"><button className="btn">Start shopping</button></Link></center></div>
        <div>
        <Effect/>
        </div>
        </div>

                
        <Footer/>
        </>
    )
}
