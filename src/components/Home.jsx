import jrg from '../images/jrg.jpg'

export default function Home() {
    return (
        <section id="home" className="scroll-mt-16">
            <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="jrg"
                        src={jrg}
                    />
                </div>
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, I am Jorge
                        <br className="hidden lg:inline-block"/>
                        <span className="block lg:hidden">A junior fullstack developer.</span>
                        <span className="hidden lg:inline">A junior fullstack developer.</span>
                    </h1>

                    <p className="mb-8 leading-relaxed">
                        Tech enthusiast focused on modern web solutions. Passionate about fullstack technology and continuous learning.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-gray-900 bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work with me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See my projects
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}