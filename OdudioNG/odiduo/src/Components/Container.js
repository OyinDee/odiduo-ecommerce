import React from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
import Navbar from './Navbar'
import Footer from './Footer'

export default function Container({dynimage}) {
    const navigate= useNavigate()

    return (
        <>

    <div className="mySlides fade">
<img src={dynimage} className="all"/>
<div className="innertext"></div>
<center> <Link to="/mp"><button className="btn">Start shopping</button></Link></center>

  </div>

        </>
    )
}