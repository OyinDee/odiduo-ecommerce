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
        <Effect/>
        <Footer/>
        </>
    )
}
