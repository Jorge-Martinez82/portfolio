import React, {useState} from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import {contact} from "../data";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative scroll-mt-16">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-10">
                    <UserCircleIcon className="w-10 inline-block mb-4" />
                    <h1 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact me
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto -mx-2">
                    <div className="w-full sm:w-3/5 px-2 mb-4 sm:mb-0">
                        <form
                            netlify
                            name="contact"
                            onSubmit={handleSubmit}
                            className="w-full">
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="sm:w-2/5 px-2 mt-5 pl-10 flex flex-col items-center justify-start">
                        <p>Need more information? Don't hesitate to contact me through this form. Feedback and suggestions are also welcome.</p>
                        <div className="flex mt-5">
                        {contact.map((contact) => (
                                    <a className="mr-5 ml-4 hover:scale-125"
                                       href={contact.link}>
                                        <img className="h-6 w-6 " src={contact.logo} alt="logo"/>
                                    </a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}