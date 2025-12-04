import React, { useState, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [viewMode, setViewMode] = useState("grid");
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // simulate loading
        const timer = setTimeout(() => setIsLoading(false), 700);
        return () => clearTimeout(timer);
    }, []);

    const categories = [
        { id: "all", name: "All Courses" },
        { id: "development", name: "Development" },
        { id: "design", name: "Design" },
        { id: "data", name: "Data" },
    ];

    const courses = [
        { id: 1, title: "Intro to React", instructor: "Alice", seats: 30, category: "development", image: "/images/react.png", description: "Components, hooks, state and project-based learning." },
        { id: 2, title: "Advanced JavaScript", instructor: "Bob", seats: 25, category: "development", image: "/images/js.png", description: "In-depth JavaScript: closures, async patterns, performance." },
        { id: 3, title: "UI/UX Fundamentals", instructor: "Carol", seats: 20, category: "design", image: "/images/photo-3.webp", description: "Design thinking, prototyping and accessibility best practices." },
        { id: 4, title: "Data Structures", instructor: "Dan", seats: 18, category: "data", image: "/images/photo-4.webp", description: "Core algorithms, data structures and complexity analysis." },
        { id: 5, title: "Frontend Testing", instructor: "Eve", seats: 22, category: "development", image: "/images/photo-5.webp", description: "Testing with Jest, React Testing Library and E2E basics." },
    ];

    const filteredItems = selectedCategory === "all" ? courses : courses.filter((c) => c.category === selectedCategory);

    const openDetails = (course, index) => {
        setSelectedCourse(course);
        setCurrentIndex(index);
    };

    const closeDetails = () => {
        setSelectedCourse(null);
        setCurrentIndex(0);
    };

    const navigate = (direction) => {
        if (!filteredItems.length) return;
        const newIndex = direction === "next" ? (currentIndex + 1) % filteredItems.length : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setCurrentIndex(newIndex);
        setSelectedCourse(filteredItems[newIndex]);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading Courses...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
            <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
                        <Camera className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-100">Course Catalog</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">Our <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Courses</span></h1>

                    <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-6">Browse available courses, view details, and add courses to your dashboard for quick access.</p>

                    <div className="flex items-center justify-center gap-3 mb-6">
                        {categories.map((cat) => (
                            <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`px-4 py-2 rounded-full text-sm ${selectedCategory === cat.id ? 'bg-cyan-500 text-white' : 'bg-white/5 text-slate-200'}`}>{cat.name}</button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((course, index) => (
                            <div key={course.id} className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer" onClick={() => openDetails(course, index)}>
                                <div className="aspect-video overflow-hidden">
                                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div className="p-4">
                                    <div className="font-semibold text-lg text-white">{course.title}</div>
                                    <div className="text-sm text-slate-300">Instructor: {course.instructor} • Seats: {course.seats}</div>
                                    <p className="mt-2 text-sm text-slate-300 line-clamp-3">{course.description}</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="text-xs text-slate-400">Category: {course.category}</div>
                                        <button onClick={(e) => { e.stopPropagation(); openDetails(course, index); }} className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-lg text-sm">Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedCourse && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center px-4">
                    <div className="relative max-w-4xl w-full max-h-full overflow-auto py-6">
                        <button onClick={closeDetails} className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/20 transition-colors duration-300"><X className="w-6 h-6" /></button>

                        <button onClick={() => navigate('prev')} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/20 transition-colors duration-300"><ChevronLeft className="w-6 h-6" /></button>
                        <button onClick={() => navigate('next')} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/20 transition-colors duration-300"><ChevronRight className="w-6 h-6" /></button>

                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2">
                                    <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-64 md:h-full object-cover" />
                                </div>
                                <div className="p-6 md:w-1/2">
                                    <h2 className="text-2xl font-bold text-white">{selectedCourse.title}</h2>
                                    <div className="text-slate-300 mt-2">Instructor: {selectedCourse.instructor}</div>
                                    <div className="text-slate-300">Seats: {selectedCourse.seats}</div>
                                    <p className="mt-4 text-slate-200">{selectedCourse.description}</p>

                                    <div className="mt-6 flex gap-3">
                                        <a href="/dashboard" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg">Enroll Now</a>
                                        <button onClick={closeDetails} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-cyan-400/20">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to manage courses?</h2>
                    <p className="text-xl text-slate-200 mb-8">Add courses to your dashboard or start a learning plan now.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105" href="/dashboard">Open Dashboard</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
