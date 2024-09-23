import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import Contact from "./components/Contact";
import WorkDetail from "./components/WorkDetail";

function App() {
    return (
        <Router>
            <div className="bg-black text-white flex flex-col min-h-screen">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/work" element={<Work />} />
                    <Route path="/work/:id" element={<WorkDetail />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;