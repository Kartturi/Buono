import React, { useState, useEffect } from 'react';
import style from "./projects.module.css"
import userConfigs from "../../user-config";
import NavigationButton from "../buttons/NavigationButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ShowDemo = props => {
    console.log(props);

    const [currentProject, setCurrentProject] = useState("");
    const [currentProjectData, setCurrentProjectData] = useState("");

    

    useEffect(() => {
        const currentProjectInfo = {
            name: props.projectData.name,
            info: props.projectData.info,
            tech: props.projectData.tech,
            color: props.projectData.color,
            gif: props.projectData.gif
        }
        setCurrentProject(props.projectData.name);
        setCurrentProjectData(currentProjectInfo);
        console.log("init");
    }, [])

    const changeProject = e => {
        const direction = e.currentTarget.dataset.direction === "right" ? 1 : -1;
        const projectArr = userConfigs.projects.filter(project => project.gif);
        const lastProjectIndex = projectArr.length - 1; 
        const currentProjectIndex = projectArr.findIndex(project => project.name === currentProject);
        let nextProjectIndex = 0;
        if(currentProjectIndex + direction > lastProjectIndex) {
            nextProjectIndex = 0;
        } else if(currentProjectIndex + direction < 0) {
            nextProjectIndex = lastProjectIndex;
        } 
        else {
            nextProjectIndex =  currentProjectIndex + direction;
        }
        const currentProjectInfo = {
            name: projectArr[nextProjectIndex].name,
            info: projectArr[nextProjectIndex].info,
            tech: projectArr[nextProjectIndex].tech,
            color: projectArr[nextProjectIndex].color,
            gif: projectArr[nextProjectIndex].gif
        }
        console.log("current", currentProjectInfo);
        setCurrentProject(currentProjectInfo.name);
        setCurrentProjectData(currentProjectInfo);
    }

    return (
        <div id="show-demo" className={style.showDemo}>
            <div className={style.showDemoDetails} style={{background: currentProjectData.color}}>
                <div className={style.showDemoTitleContainer}>
                    <span data-direction="left" onClick={changeProject} style={{margin: "0px,10px,0px,0px"}}>
                        <FontAwesomeIcon className={style.showDemoCloseIcon}  icon="arrow-left" size="1x"/>
                    </span>
                    <h3>{currentProjectData.name}</h3>
                    <span  data-direction="right" onClick={changeProject} style={{margin: "0px,10px,0px,0px"}} >
                        <FontAwesomeIcon className={style.showDemoCloseIcon}  icon="arrow-right" size="1x"/>
                    </span>
                </div>
                <p>{currentProjectData.info}</p>
                <h4 style={{marginTop: "15px"}}>Tech</h4>
                <ul>
                    {!currentProjectData ? "" :  currentProjectData.tech.map((item,index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </div>
            <div id="show-demo-gif" className={style.showDemoGif}>
                <div className={style.showDemoCloseButtonContainer} >
                    <FontAwesomeIcon className={style.showDemoCloseIcon} onClick={props.callback} icon="times" size="3x"/>
                </div>
                <div className={style.showDemoGifImageContainer}>
                    <img className={style.showDemoGifImage} src={`/${currentProjectData.gif}`}></img>
                </div>
            </div>
        </div>
    );
}

export default ShowDemo;
