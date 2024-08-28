import React from 'react';

const BlogCard = ({ title, description, date, onClick }) => {
    return (
        <div 
            onClick={onClick} 
            style={{
                width: '80%',
                maxWidth: '600px',
                margin: '1em 0',
                padding: '1.5em',
                backgroundColor: '#fff',
                borderRadius: '0.5em',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer',
                ':hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                }
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
            }}
            className="blog-card"
        >
            <h2 style={{ marginBottom: '0.5em', fontSize: '1.5em', color: '#333' }}>{title}</h2>
            <p style={{ marginBottom: '0.5em', color: '#666' }}>{description}</p>
            <p style={{ color: '#999' }}>{date}</p>
        </div>
    );
};

export default BlogCard;
