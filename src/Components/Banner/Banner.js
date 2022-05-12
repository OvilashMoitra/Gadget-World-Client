import React from 'react';
import { motion } from "framer-motion"
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <motion.img
                transition={{ ease: "easeOut", duration: 2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ height: "88vh", width: "100vw" }}
                className='banner-image'
                src={"https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FkZ2V0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"} alt="" />
            <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ ease: "easeOut", duration: 2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className='action text-center'>
                <a href="#filter"><p>Explore Us</p></a>
            </motion.div>
        </div>
    );
};

export default Banner;