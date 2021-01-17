import React, { useState } from 'react';
import style from "./projects.module.css"
import userConfigs from "../../user-config";
import NavigationButton from "../buttons/NavigationButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ShowDemo = props => {
    console.log(props);

    return (
        <div id="show-demo" className={style.showDemo}>
            <div className={style.showDemoDetails}>
                <h3>Project name</h3>
            </div>
            <div id="show-demo-gif" className={style.showDemoGif}>
                <div className={style.showDemoCloseButtonContainer} >
                    <FontAwesomeIcon className={style.showDemoCloseIcon} icon="times" size="3x"/>
                </div>
                <div className={style.showDemoGifImageContainer}>
                    <img className={style.showDemoGifImage} src={`/dasgame.gif`}></img>
                </div>
            </div>
        </div>
    );
}

export default ShowDemo;
