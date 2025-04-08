import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect if the user is on a mobile device
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile if screen width is 768px or less
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize); // Add resize listener
        return () => window.removeEventListener("resize", handleResize); // Cleanup listener
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const calculatePosition = (index) => {
        const totalPositions = items.length;

        // Calculate shortest distance
        let distance = (index - currentIndex + totalPositions) % totalPositions;

        // If the reverse direction is shorter, move in that direction
        if (distance > totalPositions / 2) {
            distance -= totalPositions;
        }

        return distance;
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventScrollOnSwipe: true,
        trackMouse: false, // Disable mouse swipe for desktop
    });

    return (
        <div
            className="carousel-container"
            {...(isMobile ? swipeHandlers : {})} // Enable swipe handlers only on mobile
        >
            {!isMobile && (
                <button className="carousel-button prev" onClick={handlePrev}>
                    &#8249;
                </button>
            )}
            <div className="carousel">
                {items.map((item, index) => {
                    const position = calculatePosition(index);
                    const rotationY = position * 45; // Adjust for smooth rotation

                    return (
                        <div
                            key={index}
                            className="carousel-card"
                            style={{
                                transform: `rotateY(${rotationY}deg) translateZ(350px)`,
                                opacity: 1 - Math.abs(position) * 0.6, // Reduce opacity for depth effect
                                zIndex: items.length - Math.abs(position),
                            }}
                        >
                            {/* Render the actual JSX content (project cards) */}
                            {item}
                        </div>
                    );
                })}
            </div>
            {!isMobile && (
                <button className="carousel-button next bg-blue-500" onClick={handleNext}>
                    &#8250;
                </button>
            )}
            {isMobile && (
                <div className="swipe-indicator">
                    <p>Swipe to navigate</p>
                </div>
            )}
        </div>
    );
};

export default Carousel;