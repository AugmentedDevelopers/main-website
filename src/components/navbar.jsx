import React from "react";
import HamburgerBtn from "./hamburgerBtn";
const Navbar = () => {
  return (
    <nav className="flex justify-between lg:justify-start px-6 lg:pr-12 pt-3 pb-3 bg-gray-200">
      <div className="lg:w-1/4 font-semibold">Augmented Labs</div>
      <HamburgerBtn />
      <ul className="hidden lg:flex justify-between w-3/4 font-medium">
        <li className="cursor-pointer underline-animation">Home</li>
        <li className="cursor-pointer underline-animation">About</li>
        <li className="cursor-pointer underline-animation">Services</li>
        <li className="cursor-pointer underline-animation">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
