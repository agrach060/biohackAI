import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
    // ----------------------------------
    //          LIST OF INTERESTS 
    // ----------------------------------
    const [interests, setInterests] = useState([
        "Coding",
        "Reading",
        "Hiking",
        "Cooking"
    ]);

    // ----------------------------------
    //          REORDER LIST ITEMS 
    // ----------------------------------
    const reorderList = () => {
        const shuffledInterests = [...interests].sort(() => Math.random() - 0.5);
        setInterests(shuffledInterests);
    };

    return (
        <div className="App">
            <header className="header-container">
                {/* ---------------------------------- */}
                {/*       NAME OF OUR PROJECT          */}
                {/* ---------------------------------- */}
                <h1>BiohackAI</h1>
                <p>
                    BiohackAI is an innovative platform dedicated to providing
                    intelligent guidance and information in the field of healthcare.
                    Our AI system understands the symptoms, care methods, and standard
                    rehabilitation training and treatments for vatious common diseases,
                    helping you better understand the condition and engage in effective
                    self-care.
                </p>
            </header>
            <main>
                <section className="main-container">
                    {/* ---------------------------------- */}
                    {/*              CHAT BOX              */}
                    {/* ---------------------------------- */}
                    <h2>Chat box here</h2>

                </section>
                <section>
                    {/* ---------------------------------- */}
                    {/*           INTERESTS LIST           */}
                    {/* ---------------------------------- */}
                    <h2>My Interests</h2>
                    <ul>
                        {interests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </section>
                <section>
                    {/* ---------------------------------- */}
                    {/*          REORDER BUTTON            */}
                    {/* ---------------------------------- */}
                    <button onClick={reorderList} style={{ marginTop: '4px', backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Reorder Interests</button>
                </section>
            </main>
        </div >
    );
}

export default Home;