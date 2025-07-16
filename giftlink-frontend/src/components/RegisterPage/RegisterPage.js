import React, { useState } from 'react';

import './RegisterPage.css';
import {urlConfig} from '../../config';
import { useAppContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {

    //insert code here to create useState hook variables for firstName, lastName, email, password
    const [firstName, setFirstName] = useState(''); //frm added
    const [lastName, setLastName] = useState('');  //frm added
    const [email, setEmail] = useState(''); //frm added
    const [password, setPassword] = useState(''); //frm added
    //module 4 updates
    const [showerr, setShowerr] = useState(''); //frm added module 4
    const navigate = useNavigate();//frm added module 4
    const { setIsLoggedIn } = useAppContext();     //frm added module 4 

    // insert code here to create handleRegister function and include console.log
    const handleRegister = async () => {
        //added from module 4
        const response = await fetch(`${urlConfig.backendUrl}/api/auth/register`, {
                //Step 1 - Task 6
                method: 'POST',
                //Step 1 - Task 7
                headers: {
                    'content-type': 'application/json',
                },
                //Step 1 - Task 8
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                })
            });
            //Step 2 - Task 1
            const json = await response.json();
            console.log('json data', json);
            console.log('er', json.error);
            //Step 2 - Task 2
            if (json.authtoken) {
                sessionStorage.setItem('auth-token', json.authtoken);
                sessionStorage.setItem('name', firstName);
                sessionStorage.setItem('email', json.email);
            //Step 2 - Task 3
                setIsLoggedIn(true);
            //Step 2 - Task 4
                navigate('/app');
            }
            if (json.error) {
            //Step 2 - Task 5
                setShowerr(json.error);
            }
        } //end of handle register function
          return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="register-card p-4 border rounded">
                            <h2 className="text-center mb-4 font-weight-bold">Register</h2>

                    {/* frm addedd */}

    <div className="mb-4">
        <label htmlFor="firstName" className="form label"> FirstName</label><br/>
        <input
        id="firstName"
        type="text"
        className="form-control"
        placeholder="Enter your firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        />
    </div>

    {/* last name input*/}

    <div className="mb-4">
        <label htmlFor="lastName" className="form label"> LastName</label><br/>
        <input
        id="lastName"
        type="text"
        className="form-control"
        placeholder="Enter your last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
    </div>

    {/* email input*/}

    <div className="mb-4">
        <label htmlFor="email" className="form label"> Email</label><br/>
        <input
        id="email"
        type="text"
        className="form-control"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
    </div>

     {/* password input*/}

    <div className="mb-4">
        <label htmlFor="password" className="form label"> Password</label><br/>
        <input
        id="password"
        type="password"
        className="form-control"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
    </div>

                     
                        <button className="btn btn-primary w-100 mb-3" 
                            onClick={handleRegister}>Register</button> { /* frm added */}
                    
                        <p className="mt-4 text-center">
                            Already a member? <a href="/app/login" className="text-primary">Login</a>
                        </p>

                         </div>
                    </div>
                </div>
            </div>

         )//end of return
    }    //end of RegisterPage function       
    
  

export default RegisterPage;