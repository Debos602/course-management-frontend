import React from "react";

const InteractiveWorkSection = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const cards = [
        {
            letter: "W",
            imageUrl:
                "/images/wedding-photography.webp",
        },
        {
            letter: "O",
            imageUrl:
                "/images/outdoor-sessions.webp",
        },
        {
            letter: "R",
            imageUrl:
                "/images/refined-portrait.webp",
        },
        {
            letter: "K",
            imageUrl:
                "/images/kodak-moments.webp",
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 lg:mb-6 tracking-tight">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                            WORK
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed px-4">
                        Capturing life's most precious moments through the lens
                        of creativity and passion. Every photograph tells a
                        story, and every story deserves to be told beautifully.
                    </p>
                    <div className="mt-6 lg:mt-8 w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Interactive Cards */}
                <div className="flex flex-col md:flex-row gap-2 h-auto md:h-[500px] lg:h-[550px]">
                    {cards.map((card, index) => {
                        const isHovered = hoveredIndex === index;
                        const isAnyHovered = hoveredIndex !== null;

                        return (
                            <div
                                key={index}
                                className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-out rounded-2xl md:rounded-3xl h-48 md:h-auto ${
                                    // Mobile: equal height, Desktop: flex behavior
                                    isMobile
                                        ? "w-full"
                                        : isHovered
                                        ? "flex-[2.5]"
                                        : isAnyHovered
                                        ? "flex-[0.8]"
                                        : "flex-1"
                                }`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => {
                                    // Mobile tap behavior
                                    if (isMobile) {
                                        setHoveredIndex(
                                            isHovered ? null : index
                                        );
                                    }
                                }}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                                    style={{
                                        backgroundImage: `url(${card.imageUrl})`,
                                        transform: isHovered
                                            ? "scale(1)"
                                            : "scale(1.1)",
                                        filter: isHovered
                                            ? "brightness(0.9)"
                                            : "brightness(0.5)",
                                    }}
                                />

                                {/* Overlay */}
                                <div
                                    className={`absolute inset-0 transition-all duration-500 ${
                                        isHovered
                                            ? "bg-black/20"
                                            : "bg-black/40"
                                    }`}
                                />

                                {/* Letter Content */}
                                <div className="relative z-10 flex items-center justify-center h-full">
                                    <p
                                        className={`font-black text-white transition-all duration-500 ${
                                            // Responsive text sizes
                                            isHovered
                                                ? "text-6xl sm:text-7xl md:text-8xl lg:text-9xl opacity-90"
                                                : isAnyHovered
                                                ? "text-4xl sm:text-5xl md:text-6xl opacity-80"
                                                : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl opacity-90"
                                        }`}
                                        style={{
                                            textShadow:
                                                "2px 2px 8px rgba(0,0,0,0.8)",
                                        }}
                                    >
                                        {card.letter}
                                    </p>
                                </div>

                                {/* Content that appears on hover/tap */}
                                {isHovered && (
                                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 z-20 text-white transition-all duration-500 opacity-100">
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-white">
                                            {card.letter === "W"
                                                ? "Wedding Photography"
                                                : card.letter === "O"
                                                ? "Outdoor Sessions"
                                                : card.letter === "R"
                                                ? "Refined Portraits"
                                                : "Kodak Moments"}
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                                            {card.letter === "W" &&
                                                "Capturing the magic of your special day with timeless elegance and artistic vision"}
                                            {card.letter === "O" &&
                                                "Natural light photography that brings out the beauty in every outdoor setting"}
                                            {card.letter === "R" &&
                                                "Professional portrait sessions that reveal your authentic self and unique personality"}
                                            {card.letter === "K" &&
                                                "Classic film-inspired photography that creates lasting memories for generations"}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Text */}
                <div className="text-center mt-8 lg:mt-16">
                    <p className="text-slate-300 text-base sm:text-lg px-4">
                        <span className="hidden md:inline">
                            Hover over each letter to discover our photography
                            specialties
                        </span>
                        <span className="md:hidden">
                            Tap each letter to discover our photography
                            specialties
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InteractiveWorkSection;
