import { useState } from "react";
import HomePage from "./components/HomePage/page";
import Navbar from "./components/NavigationBars/navbar";
import Sidebar from "./components/NavigationBars/sidebar";
import ContactUs from "./components/ContactUs/ContactUS";
import Blogs from "./components/Blogs/page";
import About from "./components/About/page";
import Services from "./components/Services/page";
let renderPage=(page)=>{
  switch(page){
    case 0:
      return <HomePage/>;
    case 1:
      return <Blogs/>;
    case 2:
       return <Services/>;
    case 3:
      return <About/>;
    case 4:
      return <ContactUs/>;
  }
}
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [page,setPage]=useState(0);
  return (
    <>
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage}/>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage}/>
      {renderPage(page)}
    </div>
    </>    
  );
}
