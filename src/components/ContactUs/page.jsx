import ContactBlock from "./components/contactBlock";
import whatsapp from "./images/logo-whatsapp.png"
import email from "./images/logo-email.png"
import phone from "./images/logo-phone.png"
let ContactUs=()=>{
    let s={
        color:'red',
        marginTop:'50vh',
        display: 'inline-block'
    }
    return(
        <div style={{display:'flex', flexDirection:'column',height:'90vh',alignItems:'center',justifyContent:'center',color:'white'}}>      
            <div style={{display:'flex', flexDirection:'column',border:'solid 1px rgba(255,255,255,0.0275)',background:'rgba(255,255,255,0.0275)',alignItems:'center',justifyContent:'center',color:'white',borderRadius:'0.5em',padding:'5em 4em'}}>
                <h1 style={{fontSize:'3em'}}>GENERIC STATEMENT</h1>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <ContactBlock img={whatsapp} text="9482465825" buttonText="Open whatsapp" action={()=>{console.log("WORKINGGG")}}/>
                    <ContactBlock img={email} text="9482465825" buttonText="Open whatsapp" action={()=>{}}/>
                    <ContactBlock img={phone} text="9482465825" buttonText="Open whatsapp" action={()=>{}}/>
                </div>
            </div>  
        </div>
    );
}

export default ContactUs;