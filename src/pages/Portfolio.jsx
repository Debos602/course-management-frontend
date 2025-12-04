import React, { useState, useEffect } from "react";
import {
    Camera,
    Eye,
    Heart,
    Share2,
    Filter,
    Grid,
    List,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [viewMode, setViewMode] = useState("grid");
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const categories = [
        { id: "all", name: "All Work", count: 24 },
        { id: "executive", name: "Executive Portraits", count: 8 },
        { id: "corporate", name: "Corporate Events", count: 6 },
        { id: "branding", name: "Personal Branding", count: 5 },
        { id: "headshots", name: "Professional Headshots", count: 5 },
    ];

    const portfolioItems = [
        {
            id: 1,
            title: "title 1",
            image: "/images/photo-1.webp",
        },
        {
            id: 2,
            title: "title 2",
            image: "/images/photo-2.webp",
        },
        {
            id: 3,
            title: "title 3",
            image: "/images/photo-3.webp",
        },
        {
            id: 4,
            title: "title 4",
            image: "/images/photo-4.webp",
        },
        {
            id: 5,
            title: "title 5",
            image: "/images/photo-5.webp",
        },
        {
            id: 6,
            title: "title 6",
            image: "/images/photo-6.webp",
        },
        {
            id: 7,
            title: "title 7",
            image: "/images/photo-7.webp",
        },
        {
            id: 8,
            title: "title 8",
            image: "/images/photo-8.webp",
        },
        {
            id: 9,
            title: "title 9",
            image: "/images/photo-9.webp",
        },
    ];

    const filteredItems =
        selectedCategory === "all"
            ? portfolioItems
            : portfolioItems.filter(
                (item) => item.category === selectedCategory
            );

    const openLightbox = (item, index) => {
        setSelectedImage(item);
        setCurrentImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setCurrentImageIndex(0);
    };

    const navigateImage = (direction) => {
        const newIndex =
            direction === "next"
                ? (currentImageIndex + 1) % filteredItems.length
                : (currentImageIndex - 1 + filteredItems.length) %
                filteredItems.length;

        setCurrentImageIndex(newIndex);
        setSelectedImage(filteredItems[newIndex]);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading Portfolio...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-6">
                        <Camera className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-medium text-cyan-100">
                            Professional Portfolio
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                        Our{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </h1>

                    <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
                        Discover our collection of professional photography
                        work, showcasing executive portraits, corporate events,
                        and personal branding sessions that elevate your
                        professional image.
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
                </div>
            </section>


            {/* Portfolio Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-3 gap-4 gap-lg-6">
                        {filteredItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                                onClick={() => openLightbox(item, index)}
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center px-4">
                    <div className="relative max-w-6xl w-full max-h-full h-full py-4">
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/20 transition-colors duration-300"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={() => navigateImage("prev")}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/20 transition-colors duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => navigateImage("next")}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/20 transition-colors duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Image */}
                        <div className="flex items-center justify-center h-full">
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="max-w-full max-h-full object-contain rounded-"
                                style={{ maxHeight: "calc(100svh - 48px)" }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Call to Action */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-cyan-400/20">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Ready to Rebuild Your Brand?
                    </h2>
                    <p className="text-xl text-slate-200 mb-8">
                        Let's capture a photograph that elevates your brand.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25" href="sms:+14195462226" target="_blank">
                           TEXT ME 419-546-2226
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
