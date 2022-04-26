import React, {useEffect, useState} from "react";
import sanityClient from "../client.js"
import bgImage from "../assets/bgHome.png";

function Project() {

    
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
        .then((data) => setProjectData(data))
        .catch((err) => console.log(err))
    });



    return (
        
        <main className="bg-night-200 min-h-screen p-4 sm:p-12" >
            <section className="container mx-auto ">
                <h1 className="text-5xl flex justify-center text-code text-white">Projects</h1>
                <h2 className="text-lg flex justify-center mb-12 text-white text-code mt-1">
                    A collection of my projects!
                </h2>
                
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article key={index} className="relative rounded-lg shadow-xl bg-night-100 p-8 space-8 text-white grow">
                        <span>
                            <a 
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-code font-bold text-3xl hover:text-cyan-300"
                                >
                                {project.title}
                            </a>
                        </span>
                        <div className="text-gray-300 text-cs mt-4 flex flex-col">
                            <span>
                                <strong className="font-bold">Date</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Made with</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                        </div>
                        <div>
                            <p 
                                className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a href={project.link} rel="noopener noref" target="_blank" className="font-bold hover:underline hover:text-cyan-300">
                                Visit the project{" "}
                                <span role="img" aria-label="right pointer">👉</span>
                            </a>
                        </div>
                        
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Project