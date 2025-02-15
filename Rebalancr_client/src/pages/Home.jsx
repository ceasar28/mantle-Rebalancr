import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="text-center flex flex-col items-center justify-center min-h-[80vh] px-4 py-10 sm:py-12">
            <img src="/assets/Logomain.png" alt="Rebalancr Logo" className="h-40 sm:h-48 mb-6 sm:mb-12" />
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6">
                Automate & Optimize Your Portfolio with{" "}
                <span className="relative inline-block">
                    <a href="https://t.me/mantleRebalancr_aiBot" target="_blank" rel="noopener noreferrer">
                        <span className="text-transparent bg-gradient-to-r from-[#00F5A0] to-[#5DE2C1] bg-clip-text cursor-pointer">
                            rebalancr
                        </span>
                    </a>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00F5A0]"></span>
                </span>
            </h2>
            <p className="text-base sm:text-lg max-w-3xl mx-auto mt-2 mb-6 px-4 sm:px-0">
                Take control of your crypto assets effortlessly.
                <br />
                Set custom thresholds and let AI manage your portfolio in real-time.
                <br />
                Maximize gains, minimize risks, and earn passive income, all on Telegram.
            </p>
            <div className="mt-6 flex gap-6">
                <a href="https://t.me/mantleRebalancr_aiBot" target="_blank" rel="noopener noreferrer">
                    <button className="bg-[#00F5A0] text-[#0D0F1F] px-8 py-4 font-semibold transition-all duration-200 transform hover:scale-110 hover:bg-[#00D495] cursor-pointer text-sm sm:text-base">
                        Get Started
                    </button>
                </a>
                <Link to="/features">
                    <button className="border border-[#E0E0E0] text-[#E0E0E0] px-8 py-4 font-semibold transition-all duration-200 transform hover:scale-110 hover:bg-[#0D0F1F] hover:text-[#00F5A0] cursor-pointer text-sm sm:text-base">
                        Learn More
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Home;