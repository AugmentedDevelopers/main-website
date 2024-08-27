import { useState } from "react";
import HomePage from "./components/HomePage/page";
import Navbar from "./components/NavigationBars/navbar";
import Sidebar from "./components/NavigationBars/sidebar";
import ContactUs from "./components/ContactUs/page";
let renderPage=(page)=>{
  switch(page){
    case 0:
      return <HomePage/>;
    case 1:
      return 1;
    case 2:
       return 2;
    case 3:
      return 3;
    case 4:
      return <ContactUs/>;
  }
}
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [page,setPage]=useState(0);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage}/>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setPage={setPage}/>
      {/* {renderPage(page)} */}
    </>    
  );
}
