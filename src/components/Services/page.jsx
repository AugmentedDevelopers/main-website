import React, { useState } from 'react';
import Block from './components/Block';

const Services = () => {
    const [bgImage, setBgImage] = useState('');

    const handleMouseEnter = (imageUrl) => {
        setBgImage(`url(${imageUrl})`);
    };

    const handleMouseLeave = () => {
        setBgImage(''); // Optionally set to a default image or leave blank
    };
    
    return (
        <div 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                marginTop: '25px',
                justifyContent: 'flex-start',
                backgroundColor: '#000', 
                padding: '2em',
                gap: '20px',
                minHeight: '100vh',
                color: '#fff',
                backgroundImage: bgImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <h1 style={{ 
                width: '100%', // Ensure the title takes the full width of the container
                textAlign: 'center', 
                fontSize: '2.5em', 
                marginBottom: '1.5em', 
                color: '#FFF' ,
                marginTop:'1em'
            }}>
                Services Offered
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
                    imageUrl="src/images/3dprintingbg.jpg" // Update with actual image path
                    onHover={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <Block 
                    heading="BUSINESS CARDS" 
                    desc="Enhance your brand with distinctive 3D business cards, leaving a lasting impression with innovative designs and vibrant colors for networking and events." 
                    imageUrl="/path/to/business-cards.jpg" // Update with actual image path
                    onHover={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <Block 
                    heading="SERVICE N" 
                    desc="Description about service N. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus." 
                    imageUrl="src/components/Services/components/img.jpg" // Update with actual image path
                    onHover={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </div>
        </div>
    );
};

export default Services;
