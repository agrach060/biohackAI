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
                {/*       WELCOME MESSAGE              */}
                {/* ---------------------------------- */}
                <h1>Hi everyone! Welcome to my page!</h1>
            </header>
            <main>
                <section className="main-container">
                    {/* ---------------------------------- */}
                    {/*           NAVIGATION               */}
                    {/* ---------------------------------- */}
                    <section className="navigation-instructions">
                        <p>
                            <h3>Learn how to navigate using the keyboard: <br /></h3>
                            <strong>Tab (⇥):</strong> Move forward through items. <br />
                            <strong>Enter (↵):</strong> Activate links and buttons. <br />
                            <strong>Escape (Esc):</strong> Close menus. <br />
                            <strong>Arrow keys:</strong> Navigate between items in the navigation bar and between links.
                        </p>
                    </section>
                </section>
                <section>
                    {/* ---------------------------------- */}
                    {/*              ABOUT ME              */}
                    {/* ---------------------------------- */}
                    <h2>About Me</h2>
                    <p>
                        My name is Anna Gracheva and I am a senior student at UW Bothell. I am majoring in Computer Science and love to code.
                    </p>
                    {/* ---------------------------------- */}
                    {/*           PICTURE                  */}
                    {/* ---------------------------------- */}
                    <img src="/my_picture.jpg" alt="Anna Gracheva" style={{ width: '360px', height: '470px' }} />
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