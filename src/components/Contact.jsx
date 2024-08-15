import React from "react";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

export default function Contact() {
    return (
        <section id="contact" className="relative scroll-mt-16">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-10">
                    <ChatBubbleBottomCenterTextIcon className="w-10 inline-block mb-4" />
                    <h1 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact me
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto -mx-2">
                    <div className="w-full sm:w-3/5 px-2 mb-4 sm:mb-0">
                        <form
                            name="contact"
                            className="w-full">
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Enviar
                            </button>
                        </form>
                    </div>
                    <div className="mt-10 sm:w-2/5 px-2 flex flex-col items-center justify-start">
                        <a className="mr-5 hover:text-white" href="https://www.linkedin.com/in/jorge-martinez-5879a5213/">LinkedIn</a>
                        <a className="mr-5 hover:text-white" href="https://github.com/Jorge-Martinez82">Github</a>
                    </div>
                </div>
            </div>
        </section>

    );
}