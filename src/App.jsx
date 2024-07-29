import { useState } from "react";
import HomePage from "./components/HomePage/page";
import Navbar from "./components/NavigationBars/navbar";
import Sidebar from "./components/NavigationBars/sidebar";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <HomePage/>
    </>    
  );
}
