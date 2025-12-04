import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((s) => !s);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
            <header className="fixed top-0 left-0 right-0 bg-slate-900/10 backdrop-blur-md border-b border-white/10 shadow-2xl z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="text-2xl sm:text-3xl font-black text-white">Course Manager</div>
                        </Link>

                        <nav className="hidden lg:flex items-center space-x-8">
                            <Link to="/" className="text-slate-200 hover:text-cyan-400 font-medium transition-all duration-300">Home</Link>
                            <Link to="/portfolio" className="text-slate-200 hover:text-cyan-400 font-medium transition-all duration-300">Courses</Link>
                            <Link to="/dashboard" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">Dashboard</Link>
                        </nav>

                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:text-cyan-400 hover:bg-white/10">
                                <span className="sr-only">Open main menu</span>
                                <svg className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"}`}>
                        <div className="px-2 pt-4 space-y-2 border-t border-white/10 bg-slate-800/50 backdrop-blur-md rounded-b-2xl">
                            <Link to="/" onClick={closeMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400">Home</Link>
                            <Link to="/portfolio" onClick={closeMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400">Courses</Link>
                            <Link to="/dashboard" onClick={closeMenu} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400">Dashboard</Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="pt-24">
                <Outlet />
            </main>

           <footer className="mt-12 border-t border-white/10 bg-gradient-to-b from-slate-900/10 to-transparent backdrop-blur-sm shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-300">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            <div className="flex flex-col gap-2">
                <div className="text-white font-semibold text-xl tracking-tight">Course Manager</div>
                <div className="text-sm text-slate-400">Manage courses, instructors, and enrollments with ease.</div>
            </div>

            <nav className="flex gap-8">
                <Link to="/dashboard" className="text-sm font-medium hover:text-white transition-colors duration-200">Dashboard</Link>
                <Link to="/portfolio" className="text-sm font-medium hover:text-white transition-colors duration-200">Courses</Link>
                <a href="mailto:support@example.com" className="text-sm font-medium hover:text-white transition-colors duration-200">Support</a>
            </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-sm text-slate-500 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>© {new Date().getFullYear()} Course Manager. All rights reserved.</div>
            <div className="flex gap-6">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">GitHub</a>
            </div>
        </div>
    </div>
</footer>
        </div>
    );
}
