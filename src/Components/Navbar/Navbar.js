import { faBars, faCancel, faCross, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <div>
            <div>
                <div className="container-fluid mt-3">

                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <a className="navbar-brand text-primary mr-0">Company Logo</a>
                            <div className="form-inline ml-auto">
                                <div className="btn btn-primary" onClick={ToggleSidebar} >
                                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen == true ? 'activate' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">Sidebar Header</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><FontAwesomeIcon icon={faCancel}> </FontAwesomeIcon></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><NavLink className="sd-link" to={`/login`}>Login</NavLink></li>
                                <li><NavLink className="sd-link" to={`/blog`}>Blogs</NavLink></li>
                                <li><a className="sd-link">Menu Item 3</a></li>
                                <li><a className="sd-link">Menu Item 4</a></li>
                                <li><a className="sd-link">Menu Item 5</a></li>
                                <li><a className="sd-link">Menu Item 6</a></li>
                                <li><a className="sd-link">Menu Item 7</a></li>
                                <li><a className="sd-link">Menu Item 8</a></li>
                            </ul>
                            <button onClick={() => signOut(auth)}>Log out</button>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen == true ? 'activate' : ''}`} onClick={ToggleSidebar}></div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;