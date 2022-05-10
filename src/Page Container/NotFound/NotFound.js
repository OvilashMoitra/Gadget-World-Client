import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: "100vh", flexDirection: 'column' }}>
            <img src={"https://www.yeahhub.com/wp-content/uploads/2018/09/404-pages-examples-codepen.jpg"} alt="" />
            <p><strong>Sorry Page Not Found</strong></p>
            <Link to={'/home'} className='navigate'>Home</Link>
        </div>
    );
};

export default NotFound;