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
            id: 1,
            title: "Intro to React",
            imageUrl: "/images/react.png",
            description:
                "Learn React fundamentals: components, hooks, and state management.",
        },
        {
            id: 2,
            title: "Advanced JavaScript",
            imageUrl: "/images/js.png",
            description:
                "Deep dive into closures, prototypes, async patterns and performance.",
        },
        {
            id: 3,
            title: "UI/UX Fundamentals",
            imageUrl: "/images/ux.webp",
            description:
                "Design principles, user flows, wireframing, and accessible interfaces.",
        },
        {
            id: 4,
            title: "Data Structures",
            imageUrl: "/images/data_structure.webp",
            // description:
            //     "Core algorithms and data structures for efficient problem solving.",
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 lg:mb-6 tracking-tight">
                        Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                            Courses
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed px-4">
                        Explore our curated courses — short summaries, learning outcomes,
                        and quick actions to add them to your dashboard or start learning.
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
                                key={card.id}
                                className={`relative cursor-pointer overflow-hidden transition-all duration-500 ease-out rounded-2xl md:rounded-3xl h-48 md:h-auto ${
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
                                    if (isMobile) {
                                        setHoveredIndex(isHovered ? null : index);
                                    }
                                }}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                                    style={{
                                        backgroundImage: `url(${card.imageUrl})`,
                                        transform: isHovered ? "scale(1)" : "scale(1.05)",
                                        filter: isHovered ? "brightness(0.9)" : "brightness(0.45)",
                                    }}
                                />

                                <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? "bg-black/20" : "bg-black/45"}`} />

                                <div className="relative z-10 flex items-center justify-center h-full px-4">
                                    <p
                                        className={`font-extrabold text-white text-center transition-all duration-500 ${
                                            isHovered
                                                ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-100"
                                                : isAnyHovered
                                                ? "text-xl sm:text-2xl md:text-3xl opacity-90"
                                                : "text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-95"
                                        }`}
                                        style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
                                    >
                                        {card.title}
                                    </p>
                                </div>

                                {isHovered && (
                                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 z-20 text-white transition-all duration-500 opacity-100">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">{card.title}</h3>
                                        <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">{card.description}</p>
                                        <div className="mt-3">
                                            <a href="/dashboard" className="inline-block bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg text-sm">View on Dashboard</a>
                                        </div>
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
                            Hover over each card to see course details and quick actions
                        </span>
                        <span className="md:hidden">
                            Tap a card to view course details
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InteractiveWorkSection;
