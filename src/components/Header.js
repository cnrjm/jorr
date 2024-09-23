import React, { useState, useEffect } from "react";

function Header() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date().toLocaleTimeString('en-GB', { 
                timeZone: 'Europe/Belfast',
                hour: '2-digit', 
                minute: '2-digit'
            });
            setTime(now);
        };

        updateTime();
        const timer = setInterval(updateTime, 60000); // Update every minute

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="px-48 pt-8">
            <h1 className="text-6xl font-bold font-serif">JONNY ORR</h1>
            <div className="relative mt-2">
                <span className="text-gray-300 text-l font-sans">Photographer & Videographer</span>
                <span className="text-gray-300 text-l font-sans absolute right-0">NIR {time}</span>
            </div>
        </div>
    );
}

export default Header;