import React, { useState } from 'react';
import style from "./projects.module.css"
import userConfigs from "../../user-config";
import NavigationButton from "../buttons/NavigationButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Projects = () => {

    const [showDemo, setShowDemo] = useState(false);

    const showDemo = event => {
        event.preventDefault();
        console.log(event);
    }

    const showDemoButton = exists => {
        console.log(exists);
        if(exists) {
           return <a href="#" className={style.backLink}>
                <FontAwesomeIcon onClick={showDemo} title="show demo" icon="film" size="1x"/>
            </a>
        } else {
            return "";
        }
    }

    const projectInfos = userConfigs.projects.map((project,index) => {

        const techs = project.tech.map((tech,index) => {
            return <li key={index}>{tech}</li>
        })

        

        return (
            <div key={index} className={`project-global ${style.project}`}>
                <div className={`project-global-front ${style.side} ${style.front}`}>
                    <div className={style.imgContainer}>
                        <img className={style.img} src={`/${project.img}`}></img>
                    </div>
                    <div className={style.projectCardDesc}>
                        <p className={style.projectCardTitle}>
                            {project.name}
                        </p>
                        <p className={style.infoText}>
                            {project.info}
                        </p>
                    </div>
                </div>
                <div className={`project-global-back ${style.side} ${style.back}`}
                style={{background: project.color}}
                >
                    <h4 className={style.backInfo}>Info</h4>
                    <br></br>
                    
                    <ul>
                        {techs}
                    </ul>

                    <div className={style.backLinkContainer}>
                        Check out 
                        <a href={project.link} target="_blank" className={style.backLink}>
                            <FontAwesomeIcon icon="external-link-alt" size="1x"/>
                        </a>
                        {showDemoButton(project.gif)}
                    </div>
                </div>
            </div>
        )
    });

    return ( 
        <section id="projects" className={style.projects}>
            <h2 className="projects-title">Some fun side projects</h2>
            <div className={style.container}>
                {projectInfos}
            </div>
            <div style={{height: "20px"}}></div>
            <div className={style.btnContainer}>
             <NavigationButton destination="skills" name="Skills next" color="dark"/>
            </div>
            
        </section>
     );
}
 
export default Projects;