import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';

const Login = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    let navigate = useNavigate();
    let location = useLocation();
    const [error] = useAuthState(auth)
    let [user, loading] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);
    const [errorText, setErrorText] = useState('')
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword, emailuser, emailerror
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const googleSignup = async () => {
        await signInWithGoogle()
        navigate(from, { replace: true });
    }
    const resetPass = async () => {
        if (!email) {
            toast('write email first')
            return;
        }
        await sendPasswordResetEmail(email);
        toast(' password reset email sent');
    }
    const signin = (e) => {
        e.preventDefault()
        if (emailerror) {
            toast('Password or Email is not matching')
            return
        }
        signInWithEmailAndPassword(email, password)

    }
    return (
        <div className='login-form d-flex'>
            <div className="img">
                <img src={"https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlJTIwZ2FkZ2V0c3xlbnwwfHwwfHw%3D&w=1000&q=80"} style={{ height: '100vh' }} alt="" />
            </div>
            <div className='form my-5'>
                <h3 className='my-5'><strong>Login</strong></h3>
                <form onSubmit={signin}>
                    <input className='form-input' onBlur={handleEmail} type="email" name="" id="" placeholder='Enter your email here' required />
                    <br />
                    <input className='form-input' onBlur={handlePassword} type="password" name="" id="" placeholder='Enter your password here' required />
                    <br />
                    <button type="submit" className='submit-btn'>Login</button>
                </form>
                <div className='line-container'>
                    <div className='line'></div>
                    <p className='mx-2'>or</p>
                    <div className='line'></div>
                </div>
                <ToastContainer></ToastContainer>
                <button className='submit-btn mt-0' onClick={googleSignup}>Login With Google</button>
                <ToastContainer />
                <p onClick={resetPass} className={'text-primary'}>Forget password?</p>
                <p>New to <strong>Gadget World</strong>?<span><Link to="/registration">Create Account</Link></span> </p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;