import React from 'react';
import style from "./projects.module.css";

const ProjectCard = props => {
    return ( 
        <div class={style.ProjectCard}>
            <div class={`${style.side} ${style.front}`}>
                <div class={style.projectCardImg}></div>
                <div class={style.projectCardDesc}>
                    <p class={style.projectCardTitle}>
                        {props.name}
                    </p>
                    <p className={style.info}></p>
                </div>
            </div>
            <div class={`${style.ProjectCardSide} ${style.ProjectCardBack}`}></div>
        </div>
     );
}
 
export default ProjectCard;