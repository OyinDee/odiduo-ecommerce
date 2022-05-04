import React from 'react'
import image from "../images/cart.png"
import {Routes, Route, useNavigate} from "react-router-dom"
import axios from 'axios'
import {useSelector} from 'react-redux'
import Navbar from './Navbar'

export default function Each({theimg, amount, quantity, name, desc}) {
    const navigate= useNavigate()
    const username = useSelector((state)=>{
        return state.name
      })
const addToCart=()=>{
    alert("Added to cart")
    console.log({theimg, amount, quantity, name, desc,username})
    let newItem={
        theimg, amount, quantity:'1', name,username
    }
    axios.post('http://odiduo.herokuapp.com/addToCart', (newItem))
}
    return (
        <>

        <div className="itemcontainer">

            <img src={theimg} alt="Image of the item" className="itemimg"/>
            <br/>
            <b>{name}</b>         
            <br/>
            {desc}
            <br/>
            <br/>
            <span className="big">₦<b>{amount}:00</b></span>
            <br/>
    {/*<span>Quantity available:<b> {quantity} {name}s</b>.</span>*/}
            <span className="btnn1" onClick={addToCart}>Add to cart</span>
        </div>
        </>
    )
}
   