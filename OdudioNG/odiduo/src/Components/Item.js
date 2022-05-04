import React from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import axios from 'axios'

import {useSelector,useDispatch} from 'react-redux'
import Navbar from './Navbar'
import {changename,changeamount} from '../actions/change'

export default function Item({theimg,name,amount,quantity,desc}) {
    const username = useSelector((state)=>{
        return state.name
    })
    const delFromCart=(val,index)=>{
        const quantityy= parseInt(quantity)+1
        const info={theimg: theimg, quantity:quantityy, username: username}
        axios.post('http://odiduo.herokuapp.com/delfc/', info).then((response)=>{
            
            }) 
    }
    return (
        <>

        <div className="occupy">
        <div className="trans">
        <img src={theimg} alt="Image of the item" className="itemimg"/>
        </div>
        <div className="trans">
        <b>{name}</b>
        <br/>

        {desc}<span className="okay">₦<b>{amount}:00</b></span><br/>
        <span className="okay">Quantity added:<b> {quantity}</b></span>
        {/*<button className="btn4" onClick={delFromCart}>REMOVE FROM CART</button>*/}
        </div>
        </div>
        </>
    )
}

