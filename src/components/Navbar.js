import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="font-serif px-48 pt-8 flex space-x-6">
            <Link to="/work" className="hover:underline">WORK</Link>
            <Link to="/contact" className="hover:underline">CONTACT</Link>
        </nav>
    );
}

export default Navbar;