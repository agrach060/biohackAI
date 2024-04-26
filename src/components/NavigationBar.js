import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

function NavigationBar() {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const linksRef = useRef([]);

    const links = [
        { path: "/", label: "Home" },
        { path: "/ThingsToRead", label: "Things to Read" }
    ];

    useEffect(() => {
        if (linksRef.current[focusedIndex]) {
            linksRef.current[focusedIndex].focus();
        }
    }, [focusedIndex]);

    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            setFocusedIndex((prevIndex) => (prevIndex + 1) % links.length);
        } else if (event.key === "ArrowLeft") {
            setFocusedIndex((prevIndex) => (prevIndex - 1 + links.length) % links.length);
        }
    };

    return (
        <nav className='navigationBar' onKeyDown={handleKeyDown}>
            <ul>
                {links.map((link, index) => (
                    <li key={link.label}>
                        <Link
                            to={link.path}
                            ref={el => linksRef.current[index] = el}
                            tabIndex={0}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavigationBar;
