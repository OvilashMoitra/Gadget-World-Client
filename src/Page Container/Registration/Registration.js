import React, { useState } from 'react';
import './Registration.css'
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmailVerification } from 'firebase/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [signInWithGoogle, emailUser, loading, googleError] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let [user] = useAuthState(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const googleSignup = async () => {
        if (error) {
            toast('Login failed')
        }
        await signInWithGoogle();
        navigate(from, { replace: true });
    }
    const [
        createUserWithEmailAndPassword,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const signup = async (e) => {
        e.preventDefault()
        console.log(error)
        if (password !== confirmPassword) {
            toast("Password is not matching ")
            return;
        }
        await createUserWithEmailAndPassword(email, password)
        navigate(from, { replace: true });
    }

    return (
        <div className='login-form d-flex'>
            <div className="img">
                <img className='d-md-block d-none' src={"https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlJTIwZ2FkZ2V0c3xlbnwwfHwwfHw%3D&w=1000&q=80"} style={{ height: '100vh' }} alt="" />
            </div>
            <div className="form my-5">
                <h3 className='my-3 '><strong>Sign Up</strong></h3>
                <form className='mt-5' onSubmit={signup}>
                    <input className='form-input' type="email" onBlur={handleEmail} name="email" id="" defaultValue={"abc@something.com"} required />
                    <br />
                    <input className='form-input' type="password" onBlur={handlePassword} name="password" id="" placeholder='enter password' required />
                    <br />
                    <input className='form-input' type="password" onBlur={handleConfirmPassword} name="confirmPassword" id="" placeholder='confirm password' required />
                    <br />
                    <button className='submit-btn mb-0' type="submit">Sign Up</button>
                </form>
                <div className='line-container'>
                    <div className='line'></div>
                    <p className='mx-2'>or</p>
                    <div className='line'></div>
                </div>
                <button className='submit-btn mt-0' onClick={googleSignup}>Login With Google</button>
                <ToastContainer />
                <p className=''>Already have an account at<strong>Gadget World</strong>?<span><Link to="/login">Login</Link></span></p>
            </div>
        </div>
    );
};

export default Signup;