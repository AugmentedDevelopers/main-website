import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage/page";
import Navbar from "./components/NavigationBars/navbar";
import Sidebar from "./components/NavigationBars/sidebar";
import ContactUs from "./components/ContactUs/page";
import Blogs from "./components/Blogs/BlogList";
import About from "./components/About/page";
import Services from "./components/Services/page";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [page,setPage]=useState(0);
  return (
    <>
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center',width:'100%'}}>
      <Router>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage}/>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage}/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/blogs" element={<Blogs />} />
            </Routes>
        </Router>
    </div>
    </>    
  );
}
