import React from 'react';
import ContactBlock from "./components/contactBlock";
import whatsapp from "./images/logo-whatsapp.png";
import email from "./images/logo-email.png";
import phone from "./images/logo-phone.png";

let ContactUs = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '90vh',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            padding: '1em'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                border: 'solid 1px rgba(255,255,255,0.05)',
                background: 'rgba(255,255,255,0.03)',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                borderRadius: '0.5em',
                padding: '5em 2em',
                width: '100%',
                maxWidth: '800px',
            }}>
                <h1 style={{
                    fontSize: window.innerWidth <= 600 ? '2em' : '3em',
                    textAlign: 'center'
                }}>GENERIC STATEMENT</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: window.innerWidth <= 800 ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <ContactBlock 
                        img={whatsapp} 
                        text="Whatsapp" 
                        buttonText="Text us!" 
                        action={() => {}} 
                    />
                    <ContactBlock 
                        img={email} 
                        text="Mail" 
                        buttonText="Mail us!" 
                        action={() => {}} 
                    />
                    <ContactBlock 
                        img={phone} 
                        text="Phone" 
                        buttonText="Call Us!" 
                        action={() => {}} 
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
