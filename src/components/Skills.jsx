import { CpuChipIcon } from "@heroicons/react/24/solid";
import React, {useRef} from "react";
import { skills } from "../data";
import {useIsVisible} from "../functions/useIsVisible";

export default function Skills() {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);

    return (
        <section
            id="skills"
            ref={ref}
            className={`text-gray-400 bg-gray-900 body-font scroll-mt-20 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} `}
        >
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-10">
                    <CpuChipIcon className="w-10 inline-block mb-4"/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        These are some languages, frameworks, and technologies I have worked with.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
                    {skills.map((skill) => (
                        <div key={skill.tech} className="p-2 sm:w-1/2 w-full">
                            <div
                                className="bg-gray-800 rounded flex p-4 h-full items-center hover:scale-105 transition-transform duration-300">
                                <img className="bg-gray-800 h-10 w-10 " src={skill.logo} alt="logo"/>
                                <span className="title-font font-medium text-white px-1">
                  {skill.tech}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}