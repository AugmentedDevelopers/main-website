import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage/page";
import Navbar from "./components/NavigationBars/navbar";
import Sidebar from "./components/NavigationBars/sidebar";
import ContactUs from "./components/ContactUs/page";
import Blogs from "./components/Blogs/BlogList";
import About from "./components/About/page";
import Services from "./components/Services/page";
import BlogPost from './blogs/blog1/Blog1';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <Router>
        {/* Navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage} />

        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage} />

        {/* Content */}
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/the-future-of-3d-printing" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
