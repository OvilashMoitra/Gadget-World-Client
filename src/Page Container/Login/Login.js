import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Navbar from '../../Components/Navbar/Navbar';
import './Login.css'
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        usersignIn,
        loadingsignIn,
        errorsignIn,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleEmailChange = (e) => {
        console.log(e.target.value)
        setUserEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setUserPassword(e.target.value)
    }
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const resetPass = async () => {
        if (!userEmail) {
            await toast('Email required')
            return
        }
        await sendPasswordResetEmail(userEmail);
        toast('Sent password reset Link');
    }
    const [user, loading, error] = useAuthState(auth);
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(userEmail, userPassword)
        toast('Login Successfull')
    }
    console.log(user, auth)
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h3 className='my-5'><strong>Login</strong></h3>
                <form onSubmit={handleLogin}>
                    <input className='form-input' onChange={handleEmailChange} type="email" name="email" id="" required placeholder='enter your email here' />
                    <input className='form-input' onChange={handlePasswordChange} type={'password'} name="password" id="" required placeholder='enter your password here' />
                    <button type="submit">Login</button>
                </form>
                <div className='line-container'>
                    <div className='line'></div>
                    <p className='mx-2'>or</p>
                    <div className='line'></div>
                </div>
                <button className='submit-btn mt-0' onClick={() => signInWithGoogle()}>Login With Google</button>
                <p onClick={resetPass} className={'text-primary'}>Forget password?</p>
                <p>New to <strong>Photographer-ovilash</strong>?<span><Link to="/registration">Create Account</Link></span> </p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;