import React, { useRef } from "react";
import { useIsVisible } from "../functions/useIsVisible";
import {UserCircleIcon} from "@heroicons/react/24/solid";

export function About() {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    const textRef1 = useRef(null);
    const textIsVisible1 = useIsVisible(textRef1);

    const textRef2 = useRef(null);
    const textIsVisible2 = useIsVisible(textRef2);

    const textRef3 = useRef(null);
    const textIsVisible3 = useIsVisible(textRef3);

    return (
        <section
            id="about"
            ref={ref}
            className={`text-gray-400 bg-gray-900 body-font scroll-mt-20 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-10">
                    <UserCircleIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        About me
                    </h1>
                </div>
                <div className="flex flex-wrap flex-col items-center">
                    <div
                        ref={textRef1}
                        className={`self-start bg-gray-800 rounded flex p-4 h-full items-center text-center mb-10 transition-transform duration-1000 ease-in-out transform w-full sm:w-full lg:w-1/2 ${
                            textIsVisible1 ? 'opacity-100 lg:translate-x-32' : 'opacity-0 -translate-x-5 lg:-translate-x-5'
                        }`}
                    >
                        <p className="text-white text-lg">I worked for many years in the telecommunications field. In 2020, I decided to make a significant change in my professional life to pursue my dream of becoming a software developer. I began studying for a degree to build a solid foundation for a successful career.</p>
                    </div>
                    <div
                        ref={textRef2}
                        className={`self-end bg-gray-800 rounded flex p-4 h-full items-center text-center mb-10 transition-transform duration-1000 ease-in-out transform w-full sm:w-full lg:w-1/2 ${
                            textIsVisible2 ? 'opacity-100 lg:-translate-x-32' : 'opacity-0 translate-x-5 lg:translate-x-5'
                        }`}
                    >
                        <p className="text-white text-lg">My diverse work experience across different fields and countries has equipped me with a wide range of soft skills and a strong work ethic, which enhance my value as a candidate. Hardworking and responsible, I approach challenges with professionalism and determination, while also maintaining a friendly and approachable attitude, as I value positive relationships with my colleagues.</p>
                    </div>
                    <div
                        ref={textRef3}
                        className={`self-start bg-gray-800 rounded flex p-4 h-full items-center text-center mb-10 transition-transform duration-1000 ease-in-out transform w-full sm:w-full lg:w-1/2 ${
                            textIsVisible3 ? 'opacity-100 lg:translate-x-32' : 'opacity-0 -translate-x-5 lg:-translate-x-5'
                        }`}
                    >
                        <p className="text-white text-lg">With a growth mindset, I am always looking to grow, improve, and learn in order to offer the best version of myself. I greatly enjoy nature, spending time with family and friends, and the camaraderie of my colleagues. Feel free to try my AI chat for more information about me.</p>
                    </div>
                </div>
            </div>


        </section>
    );
}


