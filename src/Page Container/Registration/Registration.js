import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import auth from '../../firebase.init';
import './Registration.css'
const Registration = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        userRegistration,
        loadingRegistration,
        errorRegistration,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setUserEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setUserPassword(e.target.value)
    }
    const [user, loading, error] = useAuthState(auth);
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const handleRegistration = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(userEmail, userPassword)
    }
    console.log(user, auth)
    return (
        <div>
            <Navbar></Navbar>
            <p>this is Registration</p>
            <form onSubmit={handleRegistration}>
                <input onChange={handleEmailChange} type="email" name="email" id="" required placeholder='enter your email here' />
                <input onChange={handlePasswordChange} type={'password'} name="password" id="" required placeholder='enter your password here' />
                <button type="submit">Registration</button>
            </form>
        </div>
    );
};

export default Registration;