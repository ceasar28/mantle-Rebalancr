import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-[#0D0F1F] text-[#E0E0E0] flex justify-between items-center px-3 sm:px-6 py-2 sm:py-3 border-b border-[#E0E0E0]">
            <Link to="/" className="font-[Madimi One] text-xl sm:text-2xl lowercase bg-gradient-to-r from-[#00F5A0] to-[#5DE2C1] text-transparent bg-clip-text cursor-pointer tracking-widest">
                rebalancr
            </Link>
            <a href="https://t.me/mantleRebalancr_aiBot" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#00F5A0] text-[#0D0F1F] px-4 sm:px-5 py-2 sm:py-3 font-bold border border-transparent transition-all duration-200 hover:scale-110 cursor-pointer text-sm sm:text-base">
                    Get Started
                </button>
            </a>
        </nav>
    );
};

export default Navbar;