import React, { useState } from "react";
import HamburgerBtn from "./components/hamburgerBtn";

const Navbar = ({ isOpen, setIsOpen, setPage}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex justify-between lg:justify-start px-6 lg:pr-12 pt-3 pb-3 bg-gray-200 shadow-md">
      <div className="lg:w-1/4 text-2xl font-bold font-dancing hover:animate-float cursor-pointer">
        Augmented Labs
      </div>
      <HamburgerBtn setIsOpen={setIsOpen} isOpen={isOpen} />
      <ul className="hidden lg:flex justify-between items-center w-3/4 font-medium">
      <li className="cursor-pointer underline-animation" onClick={()=>{
        setPage(0)
      }}>Home</li>
      <li className="cursor-pointer underline-animation" onClick={()=>{
        setPage(1)
      }}>Blogs</li>
        <li className="cursor-pointer underline-animation" onClick={()=>{
        setPage(2)
      }}>Services</li>
        <li className="cursor-pointer underline-animation"
        onClick={()=>{
          setPage(3)
        }}>About</li>
        <li className="cursor-pointer underline-animation"
        onClick={()=>{
          setPage(4)
        }}>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
