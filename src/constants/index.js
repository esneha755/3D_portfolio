import { drdo, genai,  tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "AI-ML INTERN ",
        company_name: "DRDO LAB",
        icon: drdo, // Using starbucks as a placeholder
        iconBg: "#accbe1",
        date: "Jan 2026  - March 2026",
        points: [
          "AI/ML & Web Development Intern — DRDO Lab",
          " Explored AI/ML concepts and their real-world applications .",
          "Contributed to basic web development tasks and projects",
          "Collaborated in a team environment and followed project workflows",
          "Strengthened problem-solving and analytical thinking skills",
          "Gained hands-on experience in practical technology implementation"
        ],
    },
    {
        title: "Gen- AI Intern",
        company_name: "Indira Gandhi Delhi Technical University For Women",
        icon: genai,
        iconBg: "#fbc3bc",
        date: "June 2025 - August 2025",
        points: [
            "Generative AI Intern",

            "Applied Generative AI tools to develop content, branding ideas, and creative solutions",
            " Utilized prompt engineering techniques to optimize AI-generated outputs",
            " Developed a Brand Identity Generator project using AI technologies",
            " Gained practical exposure to real-world applications of Generative AI",
            "Enhanced analytical thinking and problem-solving skills through AI-driven tasks"

        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/esneha755',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/esneha-shukla-3b161a328?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: ' Vistora ',
        description: 'Vistora is a Generative AI-powered brand identity generator that helps users create brand names, slogans, and design concepts. Built using prompt engineering techniques, the project focuses on delivering creative and meaningful outputs tailored to user needs. This project demonstrates my ability to apply AI concepts to real-world problems and build practical, user-focused solutions.' ,
        link: 'https://github.com/esneha755/Vistora',
    },

     {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Iris',
        description: 'IRIS is a 3D simulation system that tracks and predicts trajectories of celestial objects using AI-driven models, combining Three.js, Cesium.js, and FastAPI for real-time visualization and intelligent predictions. This project demonstrates my ability to integrate AI with 3D visualization technologies, showcasing skills in both frontend and backend development while delivering an interactive and informative user experience.',
        link: 'https://github.com/esneha755/iris2.0',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Sentimental Analysis ',
        description: 'This Sentiment Analysis project is designed to classify textual data into positive, negative, or neutral categories using machine learning and natural language processing techniques. It processes user input such as reviews or feedback and predicts the underlying sentiment.The project highlights my understanding of NLP concepts, data preprocessing, and model building, along with the ability to apply AI techniques to real-world text-based problems.',

        link: 'https://github.com/esneha755/sentimental_analysis',
    },
    
];