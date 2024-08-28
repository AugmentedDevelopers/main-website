import React from 'react';
import BlogCard from './components/BlogCard'; // Adjust the import path as needed

const BlogList = () => {
    const blogs = [
        {
            title: 'The Future of 3D Printing',
            description: 'Exploring the latest trends and innovations in 3D printing technology...',
            date: 'August 20, 2024'
        },
        {
            title: 'How to Choose the Right Business Cards',
            description: 'Tips and tricks for designing business cards that leave a lasting impression...',
            date: 'August 18, 2024'
        },
        {
            title: 'Service N: What You Need to Know',
            description: 'An in-depth look at our newest service offering...',
            date: 'August 15, 2024'
        }
    ];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '2em 1em',
            backgroundColor: '#f9f9f9',
            minHeight: '85vh',
            width:'100%',
            marginTop:'25px'
        }}>
            <h1 style={{ fontSize: '2.5em', marginBottom: '1.5em', color: '#333' }}>Our Blog</h1>
            {blogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                    onClick={() => { alert(`Redirect to full blog: ${blog.title}`); }}
                />
            ))}
        </div>
    );
};

export default BlogList;
