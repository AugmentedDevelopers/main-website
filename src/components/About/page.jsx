import React from 'react';

const About = () => {
    return (
        <div style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '3em 1em',
            textAlign: 'center',
            minHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h1 style={{ fontSize: '3em', marginBottom: '1em', color: '#fff' }}>About Us</h1>
            <p style={{ fontSize: '1.2em', maxWidth: '800px', marginBottom: '2em' }}>
                At Augmented Labs, our mission is to merge the realms of imagination and technology to create cutting-edge products that enhance everyday life. We believe in the power of innovation, driven by a passion for technology and a commitment to excellence. Our goal is to empower people with the tools they need to build a better future.
            </p>
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2em',
                width: '100%',
                maxWidth: '1200px',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '80%',
                    backgroundColor: '#111',
                    padding: '2em',
                    borderRadius: '1em',
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                    textAlign: 'left'
                }}>
                    <img 
                        src="/src/components/About/images/founder.jpg" 
                        alt="Founder" 
                        style={{ width: '150px',  borderRadius: '2%', marginBottom: '1em' }} 
                    />
                    <h2 style={{ fontSize: '2em', marginBottom: '0.5em' }}>Founder Name</h2>
                    <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                        Our founder, [Name], started Augmented Labs with the vision to blend science fiction with reality. With years of experience in [industry], [Name] has spearheaded several innovative projects that have revolutionized the tech industry.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '100%',
                    gap: '2em',
                    flexWrap: 'wrap'
                }}>
                    <div style={{
                        width: '300px',
                        backgroundColor: '#111',
                        padding: '1.5em',
                        borderRadius: '1em',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                        textAlign: 'left'
                    }}>
                        <img 
                            src="src/components/About/images/Pokemon Clip Art.jpeg" 
                            alt="Team Member 1" 
                            style={{ width: '100px', height: '100px', borderRadius: '2%', marginBottom: '1em' }} 
                        />
                        <h3 style={{ fontSize: '1.5em', marginBottom: '0.5em' }}>Team Member 1</h3>
                        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                            [Name] is a [Role] at Augmented Labs, bringing a wealth of knowledge in [field]. [He/She/They] play a critical role in [specific contributions].
                        </p>
                    </div>

                    <div style={{
                        width: '300px',
                        backgroundColor: '#111',
                        padding: '1.5em',
                        borderRadius: '1em',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                        textAlign: 'left'
                    }}>
                        <img 
                            src="src/components/About/images/Pokemon Clip Art.jpeg" 
                            alt="Team Member 2" 
                            style={{ width: '100px', height: '100px', borderRadius: '2%', marginBottom: '1em' }} 
                        />
                        <h3 style={{ fontSize: '1.5em', marginBottom: '0.5em' }}>Team Member 2</h3>
                        <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
                            [Name] is a [Role] at Augmented Labs, with a focus on [field]. [He/She/They] excel in [specific contributions] and have been instrumental in our success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
