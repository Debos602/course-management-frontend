import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 bg-slate-900/10 backdrop-blur-md border-b border-white/10 shadow-2xl z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            {/* Logo */}
                            <Link
                                to="/"
                                className="flex items-center space-x-2"
                            >
                                <div className="text-2xl sm:text-3xl font-black text-white">
                                    Ed Marshall Studios
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center space-x-8">
                                <Link
                                    to="/"
                                    className="text-slate-200 hover:text-cyan-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                                >
                                    Home
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="text-slate-200 hover:text-cyan-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                                >
                                    Portfolio
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                                <Link
                                    to="/services"
                                    className="text-slate-200 hover:text-cyan-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                                >
                                    Services
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                                <Link
                                    to="/contact"
                                    className="text-slate-200 hover:text-cyan-400 font-medium transition-all duration-300 hover:scale-105 relative group"
                                >
                                    Contact
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>

                                {/* CTA Button */}
                                <a className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25" href="sms:+14195462226" target="_blank">
                                    TEXT ME 419-546-2226
                                </a>
                            </nav>

                            {/* Mobile menu button */}
                            <div className="lg:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:text-cyan-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-all duration-300"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {/* Hamburger icon */}
                                    <svg
                                        className={`${
                                            isMenuOpen ? "hidden" : "block"
                                        } h-6 w-6 transition-transform duration-300`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    {/* Close icon */}
                                    <svg
                                        className={`${
                                            isMenuOpen ? "block" : "hidden"
                                        } h-6 w-6 transition-transform duration-300`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Navigation Menu */}
                        <div
                            className={`md:hidden transition-all duration-500 ease-in-out ${
                                isMenuOpen
                                    ? "max-h-96 opacity-100 pb-4"
                                    : "max-h-0 opacity-0 overflow-hidden"
                            }`}
                        >
                            <div className="px-2 pt-4 space-y-2 border-t border-white/10 bg-slate-800/50 backdrop-blur-md rounded-b-2xl">
                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/portfolio"
                                    onClick={closeMenu}
                                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    to="/services"
                                    onClick={closeMenu}
                                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                                >
                                    Services
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                                >
                                    Contact
                                </Link>
                                <div className="px-4 py-2">
                                    <a className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105" href="sms:+14195462226" target="_blank">
                                        TEXT ME 419-546-2226
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        {/* Add routes for other pages when needed */}
                        {/* <Route path="/services" element={<Services />} /> */}
                        {/* <Route path="/contact" element={<Contact />} /> */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
