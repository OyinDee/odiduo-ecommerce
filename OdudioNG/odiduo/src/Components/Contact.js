import {useState, useEffect, React} from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
    const navigate= useNavigate()
    const token = localStorage.token;
    useEffect(() => {
      axios.get('https://odiduo.herokuapp.com/dashcheck',{
        headers:{
         'Authorization':`Bearer ${token}`,
         'Content-Type':'application/json',
         'Accept':'application/json'
        }
    }
    ).then((response)=>{
        console.log(response)
        if(localStorage.token){
          if(response.data.message='verification successful'){
              console.log("its here")
          }
            else{
              console.log("it isnt")
              navigate('/userlogin')
              }
        }
        else{
          navigate('/userlogin')
          console.log('back')        
  }
      })
      }, [])
    return (
        <div>
        <Navbar/> 
            <center>
            08167557404 
            <br/>
            ajalaoyinda@gmail.com
            <br/>
            
            </center>
            <Footer/>
        </div>
    )
}
