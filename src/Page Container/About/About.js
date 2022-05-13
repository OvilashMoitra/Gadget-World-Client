import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './About.css'
const About = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="image d-flex justify-content-center my-5">
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxVquimIxhobht0ZLVi0RT3OisFFpaf98lROlPHqvFhpV9Z8w8H7BEdnbwp-I0sWKyRSk&usqp=CAU"} alt="" />
            </div>
            <div className="text text-center">
                <p className='w-50 '><strong>Trusted results for Warehousing Management System. Check Gadget World for the best results! Results & Answers. Privacy Friendly. The Best Resources. Unlimited Access. Always Facts. Types: Best Product, Explore Now, New Gadgets, Best in Search.</strong></p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;