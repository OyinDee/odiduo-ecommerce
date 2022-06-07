import React from 'react'
import {useEffect, useState} from "react"
import {Routes, Route, useNavigate,Link} from "react-router-dom"
import {changename,changeamount} from '../actions/change'
import {useSelector,useDispatch} from "react-redux"

import axios from 'axios'
import Item from "./Item"
import Navbar from './Navbar'
import Footer from './Footer'


export default function Cart() {
    const dispatch=useDispatch()
    const name = useSelector((state)=>{
        return state.name
    })
    const token = localStorage.token;
    const [Items,setItems]=useState([])
    const[sumofmoney, setSumofmoney]=useState(0)
    const[numberOfGoods, setNumberOfGoods]=useState(0)
    const navigate= useNavigate()
    useEffect(() => {
        
        axios.get('http://odiduo.herokuapp.com/dashcheck',{
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }
    ).then((response)=>{
        // console.log(response)
        const all=[]
        var sum=0
        if(localStorage.token&&response.data.message=='verification successful'){
            console.log("its here")
            dispatch(changename(response.data.username))
            axios.post('http://odiduo.herokuapp.com/getgoods/', {name}).then((response)=>{
                console.log(name)
                console.log(response)
                setItems(response.data)
                setNumberOfGoods(response.data.length)
                for (let i = 0; i < response.data.length; i++) {
                    all.push (Number(response.data[i].goodsdetail.amount))
                }
                for (let i = 0; i < all.length; i++) {
                    sum+= all[i]
                    dispatch(changeamount(sum*100))
                }
                console.log(sum)
                setSumofmoney(sum)
                
            },[sum]) 
            }
          else{
            console.log("it isnt")
            navigate('/userlogin')
            }
        })
    }, [name])
    return (
        <>
        <Navbar/>
            <div>
                <center>Your cart, {name}.</center>
                <br/>
                <div className="flexxitems">
                {Items.map((val, i) => (
                  <div key={i}>
                    <Item theimg={val.goodsdetail.theimg} amount={val.goodsdetail.amount} quantity={val.goodsdetail.quantity} name={val.goodsdetail.name}/>
                  </div>
                ))}
                </div>
                <div className="ordersummary">
                <div className="orderdetails">Dear {name}, You are to pay the sum of ₦{sumofmoney}</div>
                <div className="orderdetails">Number of goods in cart: {numberOfGoods}</div>
                 <Link to="/checkout" className="btnpay">Checkout</Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}
