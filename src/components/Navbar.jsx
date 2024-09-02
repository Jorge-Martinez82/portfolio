import React, { useState } from "react";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <a href="#about" className="title-font font-medium text-blue-500 mb-0 text-xl flex items-center">
                        Jorge Martinez
                    </a>
                    <button onClick={toggleMenu} className="md:hidden text-white">
                        {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                    </button>
                </div>
                <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex-col md:flex-row items-center text-base justify-center w-full md:w-auto`}>
                    <a href="#projects" className="mr-5 hover:text-white block py-2 md:py-0">
                        Projects
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white block py-2 md:py-0">
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="mr-5 hover:text-white block py-2 md:py-0 md:hidden">
                        Contact
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 hidden md:inline-flex">
                    ¡Contact me!
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}