import React from 'react';
import BlogCard from './components/BlogCard'; // Adjust the import path as needed

const BlogList = () => {
    const blogs = [
        {
            title: 'The Future of 3D Printing',
            description: 'Exploring the latest trends and innovations in 3D printing technology...',
            date: 'August 20, 2024',
            preview: '3D printing has revolutionized the way we create objects, from rapid prototyping to custom manufacturing...',
            imageUrl: 'https://via.placeholder.com/300x200?text=3D+Printing'
        },
        {
            title: 'How to Choose the Right Business Cards',
            description: 'Tips and tricks for designing business cards that leave a lasting impression...',
            date: 'August 18, 2024',
            preview: 'Choosing the right business card involves more than just selecting a good design. Consider the materials, colors...',
            imageUrl: 'https://via.placeholder.com/300x200?text=Business+Cards'
        },
        {
            title: 'Service N: What You Need to Know',
            description: 'An in-depth look at our newest service offering...',
            date: 'August 15, 2024',
            preview: 'Service N is our latest innovation, designed to help streamline your business operations and increase efficiency...',
            imageUrl: 'https://via.placeholder.com/300x200?text=Service+N'
        }
    ];

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap', // Allows the cards to wrap into the next row
            justifyContent: 'center', // Centers the cards in the row
            gap: '2.5em', // Provides spacing between the cards
            padding: '2em',
            backgroundColor: '#f9f9f9',
            minHeight: '85vh',
            width: '100%',
            marginTop: '25px',
            alignContent:'flex-start'
        }}>
            <h1 style={{ 
                width: '100%', // Ensure the title takes the full width of the container
                textAlign: 'center', 
                fontSize: '2.5em', 
                marginBottom: '1.5em', 
                color: '#333' ,
                marginTop:'1em'
            }}>
                Our Blog
            </h1>
            {blogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                    preview={blog.preview}
                    imageUrl={blog.imageUrl}
                    onClick={() => { alert(`Redirect to full blog: ${blog.title}`); }}
                />
            ))}
        </div>
    );
};

export default BlogList;
