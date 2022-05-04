import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios'
import Item from "./Item"
import {useState} from 'react'
import {changename,changeamount} from '../actions/change'

import {useSelector,useDispatch} from "react-redux"
import { PaystackButton } from 'react-paystack'
export default function Checkout() {
  const token = localStorage.token;
  const [Items,setItems]=useState([])
  const[sumofmoney, setSumofmoney]=useState(0)
  const[numberOfGoods, setNumberOfGoods]=useState(0)

  const navigate= useNavigate()
  const dispatch=useDispatch()
  const amount = useSelector((state)=>{
      return state.amount
  })
  const name = useSelector((state)=>{
    return state.name
})
  const openup=()=>{
    dispatch(changeamount(0))
    axios.post('http://odiduo.herokuapp.com/remove/', {name}).then((response)=>{
      alert("Thanks for doing business with us! Your order has been confirmed and cart cleared successfully. Come back soon!!")
    }
  )
  navigate('/cart')
}
    
    const publicKey = 'pk_test_b9865db149d47e569f76126586f9540c654ee1a9'
    const [email, setEmail] = useState("")
    // const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const componentProps = {
      email,
      amount,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Pay Now",
      onSuccess: () =>
      openup(),
    onClose: () => alert("Wait! You need to use these items, anyhow, any time soon, don't go!!!!"),
  }
    return (
        <>
        <Navbar/>

      <div className="checkout-form">
        <div className="checkout-field">
          <label>Name</label>
          <input
            type="text"
            id="name"
          
            value={name}
          disabled/>
        </div>
        <div className="checkout-field">
        <label>Amount</label>
        <input
          type="text"
          id="amount"
          value={amount/100}
          disabled
        />
      </div>
        <div className="checkout-field">
          <label>Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="checkout-field">
          <label>Phone</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <PaystackButton className="paystack-button" {...componentProps}/>
      </div>
                <Footer/>
        </>
    )
}
