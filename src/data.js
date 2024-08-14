import javascriptLogo from './images/javascript.png';
import reactLogo from './images/react.png';
import javaLogo from './images/java.png';
import springbootLogo from './images/springboot.png';
import sqlLogo from './images/sql.png';
import postgresqlLogo from './images/postgresql.png';
import neuroartGif from './images/neuroart.gif';
import triviappGif from './images/triviapp.gif';
import reflejosGif from './images/reflejos.gif';

export const projects = [
    {
        title: "NeuroArt",
        subtitle: "React + Springboot + PostreSQL",
        description:
            "Web application that leverages AI to generate images based on user prompts. It assists users in making their prompts more effective by offering various suggestions to enhance their initial prompts",
        image: neuroartGif,
        link: "https://github.com/Jorge-Martinez82/NeuroArt",
    },
    {
        title: "TriviAPP",
        subtitle: "React + Springboot + PostreSQL",
        description:
            "This application is a one-day project I made for presenting in the \"Hack Day\" of Salt Bootcamp. The application uses an external API to show, save, and delete questions and aswers as a trivial-like game.",
        image: triviappGif,
        link: "https://github.com/Jorge-Martinez82/TriviAPP-project",
    },
    {
        title: "Reflejos",
        subtitle: "PHP + Firebase",
        description:
            "CRUD application that manages a list of athletes and sports programs that will be integrated into a medical rehabilitation platform for injury recovery. It is builded using PHP with dinamic HTML, the database used is Firestore REST API.",
        image: reflejosGif,
        link: "",
    },
    {
        title: "Project 4",
        subtitle: "React Hooks",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: "./project-4.gif",
        link: "",
    },
];

export const skills = [
    {
        tech: "JavaScript",
        logo: javascriptLogo
    },
    {
        tech: "React",
        logo: reactLogo
    },
    {
        tech: "Java",
        logo: javaLogo
    },
    {
        tech: "Springboot",
        logo: springbootLogo
    },
    {
        tech: "SQL",
        logo: sqlLogo
    },
    {
        tech: "PostgreSQL",
        logo: postgresqlLogo
    },
];