import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { projects } from "../data";

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    const handleClick = (project) => {
        if (activeProject === project) {
            setActiveProject(null);
        } else {
            setActiveProject(project);
        }
    };

    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font scroll-mt-20">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-10">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        These are some of my works as a web developer. Each one reflects my skills in the technologies I use.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <div
                            key={project.image}
                            className="sm:w-1/2 w-full p-4"
                            onClick={() => handleClick(project)}
                        >
                            <div className="flex relative cursor-pointer">
                                <img
                                    alt="gallery"
                                    className={`rounded-2xl absolute inset-0 w-full h-48 sm:h-64 lg:h-80 object-center ${
                                        activeProject === project ? 'opacity-0' : 'opacity-100'
                                    }`}
                                    src={project.image}
                                />
                                <div
                                    className={`rounded-2xl px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 transition-opacity duration-300 
                                    ${activeProject === project ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="text-green-400 underline"
                                        onClick={(e) => e.stopPropagation()}
                                    >View Project on Github
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br />
        </section>
    );
}
