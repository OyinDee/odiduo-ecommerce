import React from 'react'
import {Link} from "react-router-dom"
import {Routes, Route, useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import {changename} from '../actions/change'
import axios from 'axios'
import Each from "./Each"
import {useEffect, useState} from "react"
import Navbar from './Navbar'
import Footer from './Footer'

// const url="http://odiduo.herokuapp.com/all"


export default function UserLogin() {
    const navigate= useNavigate()
    const dispatch = useDispatch();


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setmessage] = useState('Hi, please login!' )
    
    const logUserIn=()=>{
        
        let loginDetails={
            username,password
        }
        
        console.log(loginDetails)
        axios.post('http://odiduo.herokuapp.com/login', loginDetails).then((response)=>{
            console.log(response)
            if(response.data.message=='Your login is successful!'){
                let token = response.data.token
                localStorage.token = token
                navigate('/mp')
            }else{
                setmessage(response.data.message)
                setUsername('')
                setPassword('')
                localStorage.removeItem('token')
            }
        })
        // document.getElementById("formm").reset()
    }
    return (
        <>
    <Navbar/>
        <div className="checkout-form">
        <div className="alert"> {message} </div>
        <br/>
        <span className="userswelcometext">Welcome, <a><Link to="/user">Signup</Link></a> or <b>Login</b> to continue</span>
        <br/>
        <div className="checkout-field">
        <label>Username</label>
        <input type="text" placeholder="Username" name="username" onChange={e => setUsername(e.target.value)} value={username}/>
        </div>
        <div className="checkout-field">
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} value={password}/>
        </div>
        <button className="paystack-button" onClick={logUserIn}>Start Shopping</button>
        </div>
        <Footer/>
        </>
    )
}
