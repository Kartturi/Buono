import React, { useState } from 'react';
import style from "./projects.module.css"
import userConfigs from "../../user-config";
import NavigationButton from "../buttons/NavigationButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ShowDemo = props => {
    console.log(props);

    const tech = props.projectData.tech.map((item,index) => {
        return <li key={index}>{item}</li>
    })

    return (
        <div id="show-demo" className={style.showDemo}>
            <div className={style.showDemoDetails} style={{background: props.projectData.color}}>
                <h3>{props.projectData.name}</h3>
                <p>{props.projectData.info}</p>
                <h4 style={{marginTop: "15px"}}>Tech</h4>
                <ul>
                    {tech}
                </ul>
            </div>
            <div id="show-demo-gif" className={style.showDemoGif}>
                <div className={style.showDemoCloseButtonContainer} >
                    <FontAwesomeIcon className={style.showDemoCloseIcon} onClick={props.callback} icon="times" size="3x"/>
                </div>
                <div className={style.showDemoGifImageContainer}>
                    <img className={style.showDemoGifImage} src={`/${props.projectData.gif}`}></img>
                </div>
            </div>
        </div>
    );
}

export default ShowDemo;
