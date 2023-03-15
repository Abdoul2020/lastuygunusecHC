import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/images/logoRight.png";
import { FaUserAlt, FaFileInvoice } from 'react-icons/fa';
import { Link } from "react-router-dom";


const HeaderAdmin = () => {
    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16" style={{ background: "black" }}>

            {/* desktop & tablet */}
            <div className="hidden lg:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className="text-white text-xl font-bold"> UygunuSec</p>
                </Link>

                <div className="flex items-center gap-8 ">

                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className="flex items-center gap-8 ">
                        <Link to={"/uygunusec-admin"} className='text-base text-white hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'><FaFileInvoice className='ml-14 ' /> Sigorta Talepleri</Link>
                        <Link to={"/uygunusec-admin/users"} className='text-base text-white hover:text-zinc-50 duration-100 transition-all ease-in-out cursor-pointer'><FaUserAlt className='ml-8 ' /> Kullanıcılar</Link>
                    </motion.ul>
                </div>
            </div>

            {/* mobile */}
            <div className="flex items-center justify-between lg:hidden w-full h-full ">
                <Link to={"/"} className="flex items-center gap-2">
                    <img src={Logo} className="w-8 object-cover" alt="logo" />
                    <p className="text-headingColor text-xl font-bold"> UygunuSec</p>
                </Link>

                <div className="relative">
                    <motion.img
                        whileTap={{ scale: 0.6 }}
                        src="{user ? user.photoURL : Avatar}"
                        className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                        alt="userprofile"
                        onClick="{login}"
                    />
                </div>
            </div>
        </header>
    )
}

export default HeaderAdmin