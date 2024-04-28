import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export const Signup = () => {
    const [Userregdata,setUserregdata] = useState({
        full_name:"",
        email:"",
        phone:"",
        password:"",
        checkpassword:"",
        
    });

    const reghandlechange = (e) =>{
        const {name,value} = e.target;
        setUserregdata({
            ...Userregdata,
            [name]: value
        });
    };

    const reghandleSubmit = (e) =>{
        e.preventDefault();
        // console.log(Userregdata);
        if(Userregdata.password !== Userregdata.checkpassword){
            alert("Password does not match")
        }
        else{
            console.log(Userregdata);
        }
    };

    return (
        <div>
            <div className="container-fluid align-center">
                <div
                    className="container-login"
                    style={{
                        marginTop: "5rem",
                        marginBottom: "2rem",
                        paddingBottom: "1rem",
                    }}
                >
                    <h2 className="from-title">Sign up</h2>
                    <form
                        action=""
                        method=""
                        className="login-input"
                        onSubmit={reghandleSubmit} // Changed onClick to onSubmit
                    >
                        <div className="input">
                            <input
                                type="text"
                                id="text"
                                name="full_name"
                                value={Userregdata.full_name} // Added value prop
                                required
                                placeholder="Full Name"
                                onChange={reghandlechange}
                            />
                            <input
                                type="text"
                                id="tel"
                                name="phone"
                                value={Userregdata.phone} // Added value prop
                                required
                                placeholder="Phone Number"
                                onChange={reghandlechange}
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={Userregdata.email} // Added value prop
                                required
                                placeholder="Email"
                                onChange={reghandlechange}
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={Userregdata.password} // Added value prop
                                required
                                placeholder="Password"
                                onChange={reghandlechange}
                            />
                            <input
                                type="password"
                                id="checkpassword"
                                name="checkpassword"
                                value={Userregdata.checkpassword} // Added value prop
                                required
                                placeholder="Re-Enter password"
                                onChange={reghandlechange}
                            />
                            <input
                                type="submit"
                                value="REGISTER"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                    <h6>
                        Already have an account?{" "}
                        <Link to="/login" >
                            LOGIN
                        </Link>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Signup;