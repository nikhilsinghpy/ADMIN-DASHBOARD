import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    const [logindata,setLogindata] = useState({
        email:"",
        password:""
    })
    
    const handlechange = (e) =>{
        const {name,value} = e.target
        setLogindata({
            ...logindata,
            [name]:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(logindata)
    }

  return (
    
    <>
        <div className="container-fluid align-center" >
        <div className="container-login">
                <h2 className='from-title'>Login</h2>
                    <form action="" method="" className='login-input' onSubmit={handleSubmit}>
                        <div className="input">
                            <input type="email" id="email" name="email" required placeholder='Email'  onChange={handlechange}/>
                            <input type="password" id="password" name="password" required placeholder='Password' onChange={handlechange}/>
                            <input type="submit" value="Login" className='Btn' />
                        </div>
                    </form>
                    <h6>Don't have an account? <Link to="/signup" >Sign Up</Link></h6>
            </div>
        </div>
    </>
  )
}