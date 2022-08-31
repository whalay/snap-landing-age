import React, { useState } from 'react'
import { menuItems } from '../components/menuItem'

import MenuItems from './MenuItems';

import iconHamburger from '../assets/images/icon-menu.svg';
import iconClose from '../assets/images/icon-close-menu.svg';
import logo from '../assets/images/logo.svg';





const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const navbarHandler = () => setNavbar(!navbar);



    return (
        <>
            <div className="px-6 py-4 bg-Almost-White min-w-[375px] shdw1 fixed top-0 w-full z-[4000] font-Epilogue text-Medium-Gray">
                <div className="w-full md:m-auto max-w-[1270px] flex items-center justify-between md:gap-10 gap-0">
                    <div className='flex gap-12 '>
                        <img src={logo} alt="logo" />

                        <ul className="md:flex items-center justify-center gap-10 hidden w-full"> 
                            {menuItems.map((menu, index) => {
                                const depthLevel = 0;
                                return  <MenuItems menu={menu} key={index} depthLevel ={depthLevel} />
                            })}
                        </ul>

                    </div>


                    <div className="md:flex items-center justify-center  hidden ">
                        <button className="  px-9 py-3  text-sm font-semibold text-Light-Grayish-Blue    rounded-full">
                            Login
                        </button>
                        <button className="  px-9 py-3  text-sm font-semibold text-Light-Grayish-Blue border-Almost-Black border  rounded-full">
                            Register
                        </button>
                    </div>

                    <button className="md:hidden block" onClick={navbarHandler}>
                        <img
                            src={navbar ? iconClose : iconHamburger}
                            alt={navbar ? "icon-close" : "icon-hamburger"}
                        />
                    </button>
                </div>
            </div>

            <div
                className={`${navbar ? "opacity-100" : "opacity-0 -translate-y-[1000px]"
                    } fixed md:hidden block top-0 bottom-0 right-0 left-0 transition-all duration-500 backdrop-blur-sm bg-Dark-Blue bg-opacity-60 z-[3001]`}
            >
                <div
                    className={`${navbar ? "opacity-100" : "opacity-0"
                        } transition-all p-6 pt-20 bg-Very-Light-Gray fixed  rounded-lg gap-5 w-[50%]  bg-Almost-White h-screen flex justify-start items-start flex-col left-[80%] duration-300 -translate-x-[50%]`}
                >
                    {menuItems.map((menu, index) => (
                        <MenuItems menu={menu} key={index}/>
                        // <a
                        //     key={index}
                        //     className="font-Public hover:text-Link transition-all text-md text-Dark-Blue"
                        //     href={menu.url}
                        // >
                        //     {menu.title}
                        // </a>
                    ))}
                    <button className="  px-9 py-3  text-sm font-semibold text-Light-Grayish-Blue    rounded-full">
                            Login
                        </button>
                        <button className="  px-9 py-3  text-sm font-semibold text-Light-Grayish-Blue border-Almost-Black border  rounded-full">
                            Register
                        </button>
                </div>
            </div>
        </>
    );
};


export default Navbar;