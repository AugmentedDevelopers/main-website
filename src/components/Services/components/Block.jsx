import React from 'react';

const Block = ({ heading, desc, imageUrl, onHover, onMouseLeave }) => {
    return (
        <div 
            style={{
                width: '100%',
                maxWidth: '400px',
                margin: '20px auto',
                padding: '20px',
                border: '2px solid rgba(0, 0, 0, 0.5)',
                background: '#fff',
                color: '#000',
                borderRadius: '0.5em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                minHeight: '220px',
                // Mobile adjustments
                flexDirection: window.innerWidth <= 600 ? 'column' : 'row',
                padding: window.innerWidth <= 600 ? '15px' : '20px',
            }}
            onMouseEnter={() => onHover(imageUrl)}
            onMouseLeave={onMouseLeave}
        >
            <div style={{ 
                flex: 1,
                textAlign: window.innerWidth <= 600 ? 'center' : 'left'
            }}>
                <h2 style={{ 
                    fontSize: window.innerWidth <= 600 ? '1.25em' : '1.5em', 
                    marginBottom: '10px' 
                }}>{heading}</h2>
                <p style={{ 
                    fontSize: window.innerWidth <= 600 ? '0.9em' : '1em', 
                    margin: 0 
                }}>{desc}</p>
            </div>
            <div className="arrow" style={{
                marginLeft: window.innerWidth <= 600 ? '0' : '20px',
                fontSize: '1.5em',
                fontWeight: 'bold',
                transition: 'transform 0.3s ease',
                textAlign: window.innerWidth <= 600 ? 'center' : 'right'
            }}>
                <span>→</span>
            </div>
        </div>
    );
};

export default Block;
