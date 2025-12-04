import React, { useState, useEffect } from "react";
import { Play, Camera, Star, Users, Award, ChevronDown } from "lucide-react";
import InteractiveWorkSection from "../WorkSection";
import Portfolio from "./Portfolio";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Home() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
    };

    return (
        <>
            <Helmet>
                <title>Ed Marshall Studios | Executive Photography & Personal Branding</title>
                <meta
                    name="description"
                    content="Professional photography for executives who deserve exceptional branding. Discover how we help leaders build powerful personal brands."
                />
                <meta
                    property="og:title"
                    content="Ed Marshall Studios | Executive Photography for Leaders"
                />
                <meta
                    property="og:description"
                    content="We help executives build powerful personal brands through award-winning photography. Trusted by 500+ clients with 5.0 ratings."
                />
                <meta
                    property="og:image"
                    content="https://www.edmarshallstudios.com/og-image.jpg"
                />
                <meta
                    property="og:url"
                    content="https://www.edmarshallstudios.com"
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Ed Marshall Studios" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Ed Marshall Studios | Executive Photography"
                />
                <meta
                    name="twitter:description"
                    content="Award-winning photography for executives. Build your personal brand with style and confidence."
                />
                <meta
                    name="twitter:image"
                    content="https://www.edmarshallstudios.com/og-image.jpg"
                />

                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Helmet>
            <section>
                <div className="min-h-screen bg-gray-50 relative overflow-hidden ">
                    {/* Dynamic Background Cursor Effect */}
                    <div
                        className="fixed w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out z-0"
                        style={{
                            left: mousePosition.x - 192,
                            top: mousePosition.y - 192,
                        }}
                    />

                    {/* Hero Section */}
                    <section className=" py-[100px] min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center relative overflow-hidden">
                        {/* Enhanced Background Pattern */}
                        <div className="absolute inset-0">
                            {/* Animated Orbs */}
                            <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                            <div
                                className="absolute top-0 right-4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                                style={{ animationDelay: "2s" }}
                            ></div>
                            <div
                                className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
                                style={{ animationDelay: "4s" }}
                            ></div>

                            {/* Grid Pattern */}
                            <div className="absolute inset-0 bg-grid-white/5 bg-grid-16"></div>

                            {/* Subtle Noise Texture */}
                            <div className="absolute inset-0 opacity-30 bg-noise"></div>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                {/* Left Content */}
                                <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
                                    {/* Badge */}

                                    {/* Main Heading */}
                                    <div className="space-y-3 lg:space-y-4">
                                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-none">
                                            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                                                Ed Marshall
                                            </span>
                                            <br />
                                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                Studios
                                            </span>
                                        </h1>

                                        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto lg:mx-0"></div>
                                    </div>
                                    {/* Subtitle */}
                                    <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-200 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                                        Professional Photography for{" "}
                                        <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                                            Executives
                                        </span>{" "}
                                        who deserve exceptional branding
                                    </p>
                                    {/* Stats */}
                                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-2 lg:pt-4">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400" />
                                            <span className="text-xs sm:text-sm text-slate-300">
                                                500+ Clients
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                                            <span className="text-xs sm:text-sm text-slate-300">
                                                5.0 Rating
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" />
                                            <span className="text-xs sm:text-sm text-slate-300">
                                                Award Winning
                                            </span>
                                        </div>
                                    </div>
                                    {/* Feature Tag */}
                                    {/* <div className="pt-2 lg:pt-4">
                                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-2 sm:py-3 border border-emerald-400/30">
                                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                            <span className="text-emerald-100 font-medium text-sm sm:text-base">
                                                We turn followers into dollars
                                            </span>
                                        </div>
                                    </div> */}
                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-6 justify-center lg:justify-start">
                                        <a className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base" href="sms:+14195462226" target="_blank">
                                            TEXT ME 419-546-2226
                                        </a>

                                    </div>
                                </div>

                                {/* Right Content - Enhanced Video Player */}
                                <div className="relative group">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-500"></div>

                                    {/* Video Container */}
                                    <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                                        <div className="bg-black rounded-2xl overflow-hidden relative">
                                            {!isVideoPlaying && (
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-black/80 flex items-center justify-center z-10 cursor-pointer group/play"
                                                    onClick={handleVideoPlay}
                                                >
                                                    <div className="bg-white/10 backdrop-blur-md rounded-full p-6 group-hover/play:bg-white/20 transition-all duration-300 group-hover/play:scale-110">
                                                        <Play className="w-12 h-12 text-white fill-current ml-1" />
                                                    </div>
                                                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                                                </div>
                                            )}

                                            <video
                                                className="w-full h-auto rounded-2xl"
                                                controls={isVideoPlaying}
                                                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23134e4a;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23065f46;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='640' height='360' fill='url(%23grad1)'/%3E%3Ctext x='320' y='180' text-anchor='middle' fill='%23ffffff' font-size='24' font-family='Arial, sans-serif' font-weight='bold'%3EEd Marshall Studios%3C/text%3E%3Ctext x='320' y='210' text-anchor='middle' fill='%23a7f3d0' font-size='16' font-family='Arial, sans-serif'%3EWatch Our Story%3C/text%3E%3C/svg%3E"
                                                onPlay={handleVideoPlay}
                                            >
                                                <source
                                                    src="https://res.cloudinary.com/dvemjyp3n/video/upload/v1751735314/rlpulzqdyqppapbndyzm.mp4"
                                                    type="video/mp4"
                                                />
                                                Your browser does not support the
                                                video tag.
                                            </video>
                                        </div>

                                        {/* Video Description */}
                                        <div className="mt-6 text-center space-y-3">
                                            <h3 className="text-white font-semibold text-lg">
                                                See Our Work in Action
                                            </h3>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                Discover how we help executives
                                                build powerful personal brands
                                                through stunning photography
                                            </p>

                                            {/* Video Stats */}
                                            <div className="flex justify-center gap-6 pt-2">
                                                <div className="text-center">
                                                    <div className="text-cyan-400 font-bold text-sm">
                                                        250k+
                                                    </div>
                                                    <div className="text-slate-400 text-xs">
                                                        Photos Taken
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-emerald-400 font-bold text-sm">
                                                        98%
                                                    </div>
                                                    <div className="text-slate-400 text-xs">
                                                        Satisfaction
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-purple-400 font-bold text-sm">
                                                        24hr
                                                    </div>
                                                    <div className="text-slate-400 text-xs">
                                                        Delivery
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce hidden md:block">
                            <div className="flex flex-col items-center gap-2 -ms-12">
                                <span className="text-sm font-medium">
                                    Scroll to explore
                                </span>
                                <ChevronDown className="w-5 h-5" />
                            </div>
                        </div>
                    </section>

                    <style jsx>{`
                        @keyframes float {
                            0%,
                            100% {
                                transform: translateY(0px);
                            }
                            50% {
                                transform: translateY(-20px);
                            }
                        }

                        .animate-float {
                            animation: float 6s ease-in-out infinite;
                        }

                        .bg-grid-white\\/5 {
                            background-image: radial-gradient(
                                circle,
                                rgba(255, 255, 255, 0.05) 1px,
                                transparent 1px
                            );
                        }

                        .bg-grid-16 {
                            background-size: 16px 16px;
                        }

                        .bg-noise {
                            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
                        }
                    `}</style>
                </div>
                <InteractiveWorkSection />
                <Portfolio />
            </section>
        </>
    );
}

export default Home;
