import React from 'react';
import style from "./projects.module.css"
import userConfigs from "../../user-config";
import ProjectCard from "./ProjectCard";

const Projects = () => {

    const projectInfos = userConfigs.projects.map(project => {
        return <ProjectCard name={project.name} info={project.info} tech={project.tech} />
    });

    return ( 
        <section id="projects" className={style.projects}>
            <h2 class="projects-title">Stuff I have been working on</h2>
            <div class={style.container}>
                {projectInfos}
            </div>
        </section>
     );
}
 
export default Projects;