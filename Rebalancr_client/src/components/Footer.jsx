import React from "react";
import { FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-center py-4 sm:py-6 border-t border-[#E0E0E0]">
            <p className="text-xs sm:text-sm">
                <span className="relative inline-block">
                    <a href="https://t.me/mantleRebalancr_aiBot" target="_blank" rel="noopener noreferrer">
                        <span className="text-transparent bg-gradient-to-r from-[#00F5A0] to-[#5DE2C1] bg-clip-text cursor-pointer">
                            rebalancr
                        </span>
                    </a>
                </span>
                <span className="ml-1">- copyright &copy; 2025 - All rights reserved.</span>
            </p>
            <div className="flex justify-center gap-6 sm:gap-10 mt-2 text-sm sm:text-lg">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 transform hover:scale-110">
                    <FaGithub size={20} sm={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 transform hover:scale-110">
                    <FaTwitter size={20} sm={24} />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="transition-all duration-200 transform hover:scale-110">
                    <FaTelegram size={20} sm={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;