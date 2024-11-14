import React, { useState, useEffect } from 'react';
import './cursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const followCursor = () => {
            setCursorPosition((prev) => ({
                x: prev.x + (mousePosition.x - prev.x) * 0.1,
                y: prev.y + (mousePosition.y - prev.y) * 0.1,
            }));
        };

        const animationFrame = requestAnimationFrame(followCursor);
        return () => cancelAnimationFrame(animationFrame);
    }, [mousePosition]);

    return (
        <div
            className="custom-cursor"
            style={{
                left: position.x,
                top: position.y,
            }}
        ></div>
    );
};

export default CustomCursor;
