import React from 'react';

const BlogPost = () => {
    return (
        <div style={{
            maxWidth: '60%',
            minWidth:'400px',
            margin: '4.5em auto',
            padding: '2em',
            backgroundColor: '#1a1a1a',
            color: 'white',
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>Filament Recycler Under 100 Dollars</h1>
            <p style={{ marginBottom: '1.5em', color: '#ccc' }}>August 29, 2024 | By Augmented Labs</p>

            <nav style={{ marginBottom: '1.5em' }}>
                <ul style={{ 
                    listStyleType: 'none', 
                    paddingLeft: '0', 
                    color: '#bbb' 
                }}>
                    <li style={{ marginBottom: '0.5em' }}>
                        <a href="#introduction" 
                           style={{ 
                               color: '#bbb', 
                               textDecoration: 'none', 
                               cursor: 'pointer' 
                           }}
                           onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                           onMouseLeave={(e) => e.currentTarget.style.color = '#bbb'}
                        >
                            Introduction
                        </a>
                    </li>
                    <li style={{ marginBottom: '0.5em' }}>
                        <a href="#goal" 
                           style={{ 
                               color: '#bbb', 
                               textDecoration: 'none', 
                               cursor: 'pointer' 
                           }}
                           onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                           onMouseLeave={(e) => e.currentTarget.style.color = '#bbb'}
                        >
                            Goal of the Filament Recycler
                        </a>
                    </li>
                    <li style={{ marginBottom: '0.5em' }}>
                        <a href="#overview" 
                           style={{ 
                               color: '#bbb', 
                               textDecoration: 'none', 
                               cursor: 'pointer' 
                           }}
                           onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                           onMouseLeave={(e) => e.currentTarget.style.color = '#bbb'}
                        >
                            Overall Overview
                        </a>
                    </li>
                    <li style={{ marginBottom: '0.5em' }}>
                        <a href="#parts" 
                           style={{ 
                               color: '#bbb', 
                               textDecoration: 'none', 
                               cursor: 'pointer' 
                           }}
                           onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                           onMouseLeave={(e) => e.currentTarget.style.color = '#bbb'}
                        >
                            Part List
                        </a>
                    </li>
                    <li style={{ marginBottom: '0.5em' }}>
                        <a href="#working" 
                           style={{ 
                               color: '#bbb', 
                               textDecoration: 'none', 
                               cursor: 'pointer' 
                           }}
                           onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                           onMouseLeave={(e) => e.currentTarget.style.color = '#bbb'}
                        >
                            Working and Shortcomings
                        </a>
                    </li>
                </ul>
            </nav>

            <section id="introduction">
                <h2 style={{ fontSize: '2em', marginBottom: '0.5em' }}>Introduction</h2>
                <p>
                    3D printing enthusiasts often face the issue of filament waste, which not only impacts the environment but also adds 
                    to the cost of 3D printing. To address this, we have developed a low-cost filament recycler that allows you to recycle 
                    waste filament and turn it back into usable material—all for under 100 dollars.
                </p>
            </section>

            <section id="goal">
                <h2 style={{ fontSize: '2em', marginTop: '1.5em', marginBottom: '0.5em' }}>Goal of the Filament Recycler</h2>
                <p>
                    The primary goal of this filament recycler is to provide an affordable solution for recycling waste filament. By converting 
                    your discarded or failed prints into reusable filament, this device not only helps in reducing waste but also in saving costs 
                    on new filament purchases.
                </p>
            </section>

            <section id="overview">
                <h2 style={{ fontSize: '2em', marginTop: '1.5em', marginBottom: '0.5em' }}>Overall Overview</h2>
                <p>
                    The filament recycler is composed of a few key parts: a shredder, an extruder, and a spooler. The shredder breaks down 
                    the waste filament into smaller pieces, which are then fed into the extruder. The extruder melts the plastic and 
                    re-extrudes it into a new filament strand, which is finally wound onto a spool by the spooler.
                </p>
            </section>

            <section id="parts">
                <h2 style={{ fontSize: '2em', marginTop: '1.5em', marginBottom: '0.5em' }}>Part List</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5em' }}>
                    <li>Filament Shredder (DIY or purchased)</li>
                    <li>Filament Extruder (DIY or repurposed from old 3D printer)</li>
                    <li>Spooler (DIY or repurposed from an old printer)</li>
                    <li>Heating element and temperature controller</li>
                    <li>Stepper motors and drivers</li>
                    <li>Power supply unit</li>
                    <li>Filament guides and rollers</li>
                </ul>
            </section>

            <section id="working">
                <h2 style={{ fontSize: '2em', marginTop: '1.5em', marginBottom: '0.5em' }}>Working and Shortcomings</h2>
                <p>
                    The working process of the filament recycler is straightforward. The waste filament is first shredded into small pieces. These 
                    pieces are then fed into the extruder, where they are heated and extruded into a new filament. Finally, the filament is wound 
                    onto a spool for reuse. 
                </p>
                <p>
                    While this process is effective, it does come with some shortcomings. The quality of the recycled filament may not match that of 
                    new filament, especially if the waste filament is mixed with different types of plastics. Additionally, the extruder needs to 
                    be precisely calibrated to ensure consistent filament diameter.
                </p>
            </section>

        </div>
    );
};

export default BlogPost;
