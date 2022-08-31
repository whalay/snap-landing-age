import React, { useState } from 'react'

import iconHamburger from '../assets/images/icon-menu.svg';
import iconClose from '../assets/images/icon-close-menu.svg';
import logo from '../assets/images/logo.svg';

const contacts = ["Features", "Company", "Career", "About"];

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const navbarHandler = () => setNavbar(!navbar);

    return (
        <>

            <div className='bg-blue '>
                <div className=' '>
                    <img src={logo} alt="" />
                   
                        <ul>
                            <li>Features</li>
                            <li>career</li>
                            <li>Company</li>
                            <li>Blog</li>
                        </ul>
                   
                </div>
            </div>
        </>

    );
};


export default Navbar;