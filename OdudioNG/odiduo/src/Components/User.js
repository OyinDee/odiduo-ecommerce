
import {Routes, Route, useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import axios from 'axios'
import Each from "./Each"
import {useEffect, useState} from "react"
import Navbar from './Navbar'
import Footer from './Footer'
const url="http://odiduo.herokuapp.com/all"

export default function User() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const[message, setmessage]= useState('Welcome to Odiduo. Sign up!')
    const navigate= useNavigate('')
    
    const signUserUp=()=>{
        if(firstname==""||lastname==""||email==""||username==""||password==""){
         setmessage("Fill all fields")
        }
        else{
            let userDetails={
                firstname,lastname,email,username,password
            }
            console.log(userDetails)
            axios.post('http://odiduo.herokuapp.com/signup', (userDetails)).then((response)=>{
                // alert(response.data.message)
                console.log(response.data.text)
                if(response.data.text=="yes"){
                    navigate('/userlogin')
                    localStorage.removeItem('token')
                }
                else{
                    setFirstname('')
                    setEmail('')
                    setPassword('')
                    setLastname('')
                    setUsername('')
                    setmessage(response.data.message)
                        }
            })
            }

    }
    return (
        <>
        <Navbar/>
      <div className="checkout-form">
      <span className="userswelcometext">Welcome, <b>Signup</b> or <Link to="/userlogin">Login</Link> to continue</span>
      <br/>
      <div className="alert">{message}</div>
      <br/>
      <div className="checkout-field">
      <label>First Name</label>
      <input type="text" placeholder="First Name" name="firstname" onChange={e => setFirstname(e.target.value)} value={firstname}/>
      </div>
      <div className="checkout-field">
      <label>Last Name</label>
      <input type="text" placeholder="Last Name" name="lastname" onChange={e => setLastname(e.target.value)} value={lastname}/>
    </div>
      <div className="checkout-field">
        <label>Email</label>
        <input type="text" placeholder="Email address" name="email" onChange={e => setEmail(e.target.value)} value={email}/>
      </div>
      <div className="checkout-field">
        <label>Username</label>
        <input type="text" placeholder="Username" name="username" onChange={e => setUsername(e.target.value)} value={username}/>
      </div>
      <div className="checkout-field">
      <label>Password</label>
      <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} value={password}/>
      </div>
      <button className="paystack-button" onClick={signUserUp}>Get started</button>
    </div>        
<Footer/>
        </>
    )
}
