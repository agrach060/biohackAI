import React, { useEffect, useRef } from 'react';
import '../styles/ThingsToRead.css';

function ThingsToRead() {
    const linkRefs = useRef([]);

    useEffect(() => {
        linkRefs.current = linkRefs.current.slice(0, 10);
    }, []);


    const handleKeyDown = (event, index) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const nextIndex = (index + 1) % linkRefs.current.length;
            linkRefs.current[nextIndex] && linkRefs.current[nextIndex].focus();
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            const prevIndex = (index - 1 + linkRefs.current.length) % linkRefs.current.length;
            linkRefs.current[prevIndex] && linkRefs.current[prevIndex].focus();
        }
    };

    const links = [
        { url: "https://www.w3schools.com/REACT/DEFAULT.ASP", text: "w3schools React tutorial" },
        { url: "https://www.thisdogslife.co/what-makes-french-bulldogs-so-damn-irresistible/", text: "Why frencies are cute" },
        { url: "https://images.nasa.gov", text: "NASA's Image and Video Library" },
        { url: "https://www.codecademy.com", text: "Codecademy" },
        { url: "https://www.metmuseum.org/art/collection", text: "The Metropolitan Museum of Art Collection" },
        { url: "http://www.openculture.com", text: "Open Culture" },
        { url: "https://archive.org", text: "Internet Archive" },
        { url: "https://www.duolingo.com", text: "Duolingo" },
        { url: "http://www.thesartorialist.com", text: "The Sartorialist" },
        { url: "https://www.khanacademy.org", text: "Khan Academy" }
    ];

    return (
        <div className="thingsToRead">
            <h1>Things To Read</h1>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={el => linkRefs.current[index] = el}
                            onKeyDown={(event) => handleKeyDown(event, index)}
                            tabIndex="0"
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ThingsToRead;
