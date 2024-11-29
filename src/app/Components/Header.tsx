"use client"
import Link from "next/link";
import React,{useState} from "react";
import {FaShoppingCart} from 'react-icons/fa';
import { HiMenuAlt3 } from'react-icons/hi';
import { HiX } from 'react-icons/hi'

const Header=()=>{
   const[isMenuOpen,setIsMenuOpen] = useState(false);
   const toggleMenu=()=>{
       setIsMenuOpen(!isMenuOpen); //open or close 
   };
   const closeMenu=()=>{
       setIsMenuOpen(false)// closeMenu
   }
 return(

        <div className=" text-black  bg-green-100 py-5 display-flex justify-between align-center px-10 relative z-10">
     <h1 className="text-2xl font-bold text-black">Travel</h1>
     {/* desktop */}
     <nav className="hidden md:flex gap-10 text-black font-bold">
       <Link href="/" onClick={closeMenu}>HOME</Link>
       <Link href="/About" onClick={closeMenu}>ABOUT</Link>
       <Link href="/Contact" onClick={closeMenu}>CONTACT</Link>
       <Link href="/Packages"onClick={closeMenu}>PACKAGES</Link>
       <FaShoppingCart className="text-black text-xl"/>
     </nav>
     {/* mobile nav*/}
     <div>
       <HiMenuAlt3
       className="text-black text-3xl cursor-pointer"
       onClick={toggleMenu} 
       //toggle menu
       />
     </div>
     {/* mobile menu */}
     <div className={`${
       isMenuOpen?'block':'hidden'} absolute top-0 w=full bg-black p-5 md:hidde z-20`}>
           {/* close button */}
           <HiX className='text-white text-3xl cursor-pointer'
           onClick={toggleMenu}//close menu
           />
           </div>
       
   </div>
 )
}

export default Header