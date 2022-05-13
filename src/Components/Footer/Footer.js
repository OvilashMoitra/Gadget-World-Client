import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';
import './Footer.css'
const Footer = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubitted] = useState(false)
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleContact = (e) => {
        e.preventDefault()
        setSubitted(!submitted)
    }
    return (
        <div className='footer'>
            <div className="footer-about-section">
                <div>
                    <h1>Gadget World</h1>
                    <p><strong>About</strong></p>
                    <p> With its beautiful modern and material design, your desktop will complement it perfectly. Built from a lightweight framework that uses little resources and is compatible with older, less powerful Windows 10 computers. Plus, unlike old classic gadgets, you get the security and peace of mind knowing the app comes from the Microsoft Store.Choose from dozens of gadgets and skins to customize your desktop, with optional gadgets from the built-in store, that will enhance your desktop experience like never before.Get Desktop Gadgets and you'll instantly have access to a suite of useful gadgets, including world clocks, weather, rss feeds, calendars, calculators, CPU monitor, and more.Additional enhancements include various skins, slideshow, stocks, translator, dictionary, internet speed test, and more.</p>
                </div>
            </div>
            <div className="footeer-links">
                <div>
                    <p><strong>Information</strong></p>
                    <ul>
                        <li>About Us</li>
                        <li>Faq</li>
                        <li>Insights</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p><strong>Your Account</strong></p>
                    <ul>
                        <li>Registar</li>
                        <li>Login</li>
                        <li>My Order</li>
                    </ul>
                </div>
            </div>
            <div className="footer-contact">
                <p><strong>Contact</strong></p>
                {
                    submitted ? <strong ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ms-2 my-5 submitted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: 'green' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg><span >Submitted your email</span></strong> : <form onSubmit={handleContact} className='my-5'>
                        <input onBlur={handleEmail} type="email" name="" id="" />
                        <button type="submit"><strong>Contact</strong></button>
                    </form>
                }
                <br />
                <a href="#" className='text-decoration-none text-white '><strong><FaFacebook className='contact-icon'></FaFacebook> <FaInstagram className='contact-icon'></FaInstagram><FaFacebookMessenger className='contact-icon'></FaFacebookMessenger></strong></a>

            </div>
        </div>
    );
};

export default Footer;