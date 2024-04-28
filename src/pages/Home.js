import React from 'react';
import '../styles/Home.css';
import '../styles/ChatBox.css';
import ChatBox from '../components/ChatBox';

function Home() {
    return (
        <div className="Home">
            <header className="header-container">
                {/* ---------------------------------- */}
                {/*           PROJECT NAME             */}
                {/* ---------------------------------- */}
                <img src="./logo.png" alt="Logo" className="logo" />
                <p>
                    BiohackAI is an innovative platform dedicated to providing
                    intelligent guidance and information in the field of healthcare.
                    Our AI system understands the symptoms, care methods, and standard
                    rehabilitation training and treatments for various common diseases,
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
                    <ChatBox />
                </section>
            </main>
        </div >
    );
}

export default Home;