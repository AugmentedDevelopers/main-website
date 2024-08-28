import React from 'react';
import Block from './components/Block';

const Services = () => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000', 
            padding: '20px',
            gap: '20px',
            minHeight: '100vh',
            color: '#fff'
        }}>
            <h1 style={{ 
                fontSize: '3em', 
                marginBottom: '1em', 
                color: '#fff', 
                textAlign: 'center',
                paddingTop:'2em'
            }}>
                Services We Offer
            </h1>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                alignItems: 'center',
                gap: '20px',
                maxWidth: '1200px',  // Limits the width of the content
            }}>
                <Block 
                    heading="3D PRINTING" 
                    desc="Print the finest models at the cheapest prices. With the state-of-the-art bambu lab printers, we can get your prints ready fast. Guaranteed one day delivery to RV students!" 
                    action={() => { console.log("#DPRINTINGGG") }}
                />
                <Block 
                    heading="BUSINESS CARDS" 
                    desc="Enhance your brand with distinctive 3D business cards, leaving a lasting impression with innovative designs and vibrant colors for networking and events." 
                    action={() => { console.log("BUISNESS") }}
                />
                <Block 
                    heading="SERVICE N" 
                    desc="Description about service N. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus." 
                    action={() => { console.log("SERVICEN") }}
                />
            </div>
        </div>
    );
};

export default Services;
