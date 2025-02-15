import React, { useState } from "react";
import cardData from "../data/CardContent";
import { ChevronDown, ChevronUp } from "lucide-react";

const KnowMore = () => {
    const [expandedIndexes, setExpandedIndexes] = useState({});

    const toggleExpand = (index) => {
        setExpandedIndexes((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="bg-[#0D0F1F] text-[#E0E0E0]">
            <section className="py-12 px-6 sm:px-10">
                {/* Hero Section */}
                <h1 className="text-3xl sm:text-4xl font-semibold mb-16 text-center">
                    AI-Powered Portfolio Management with{" "}
                    <a href="https://t.me/mantleRebalancr_aiBot" target="_blank" rel="noopener noreferrer">
                        <span className="relative inline-block cursor-pointer">
                            <span className="text-transparent bg-gradient-to-r from-[#00F5A0] to-[#5DE2C1] bg-clip-text">
                                rebalancr
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00F5A0]"></span>
                        </span>
                    </a>
                </h1>

                {/* Features Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 max-w-7xl mx-auto">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#1E232D] p-6 shadow-lg hover:scale-105 cursor-pointer transform transition-all duration-300 flex-1 min-w-[280px] max-w-[700px] w-full sm:w-auto"
                        >
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#00F5A0]">{card.title}</h2>
                            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-left">
                                {card.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* How It Works - 6 Cards */}
                <div className="mt-20">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
                        {[
                            { step: "1", title: "Connect Wallet", desc: "Securely link your crypto wallet to get started." },
                            { step: "2", title: "Enable AI Mode", desc: "Activate AI to analyze and rebalance your portfolio." },
                            { step: "3", title: "Set Allocation & Thresholds", desc: "Define asset distribution and rebalancing rules." },
                            { step: "4", title: "Automated Trading", desc: "AI executes trades at optimal prices, reducing slippage." },
                            { step: "5", title: "Monitor & Adjust", desc: "Get live market insights and fine-tune your settings." },
                            { step: "6", title: "Earn & Grow", desc: "AI handles DeFi strategies to maximize passive income." }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#1E232D] p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-center max-w-[280px] mx-auto cursor-pointer"
                            >
                                <div className="text-3xl font-bold text-[#00F5A0] mb-3">Step {item.step}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Use This AI Agent? - Each Point Collapsible */}
                <div className="mt-20">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16">
                        Why Use This AI Agent?
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            { title: "Hands-Free Crypto Management", desc: "Let AI handle portfolio adjustments while you focus on other things." },
                            { title: "Data-Driven Decisions", desc: "Make smarter trades with real-time market insights and AI analytics." },
                            { title: "Risk-Protected Growth", desc: "Reduce losses and maximize stability with built-in stop-loss strategies." },
                            { title: "Passive Income Generation", desc: "Earn through automated DeFi strategies like staking and yield farming." },
                            { title: "100% Secure & Decentralized", desc: "You always control your assets—no third-party custody or interference." }
                        ].map((item, index) => (
                            <div key={index} className="bg-[#1E232D] p-6 rounded-xl shadow-lg max-w-md mx-auto">
                                <button
                                    className="w-full flex justify-between items-center text-left"
                                    onClick={() => toggleExpand(index)}
                                >
                                    <h3 className="text-xl font-semibold text-[#00F5A0]">{item.title}</h3>
                                    {expandedIndexes[index] ? <ChevronUp size={24} className="cursor-pointer" /> : <ChevronDown size={24} className="cursor-pointer" />}
                                </button>
                                {expandedIndexes[index] && <p className="mt-3 text-lg">{item.desc}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-16 text-center">
                    <a href="https://t.me/mantleRebalancr_aiBot" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#00F5A0] text-[#0D0F1F] px-8 py-4 font-semibold transition-all duration-200 transform hover:scale-110 hover:bg-[#00D495] cursor-pointer">
                            Get Started
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default KnowMore;