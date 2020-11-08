import React, { useState, useEffect } from 'react';
import mainStyle from "./main.module.css";
import NavigationButton from "./buttons/NavigationButton";
import userConfigs from "../user-config";


const Main = () => {

    const name = userConfigs.main.name;
    const description = userConfigs.main.description;
    const skills = userConfigs.main.skills;

    const [skillIndex, setSkillIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {

        const changeSkills = setInterval(() => {
            
            if(fade) {
                setFade(false);
                setShow(true);
                if(skillIndex === skills.length - 1) {
                    setSkillIndex(0);
                    
                } else {
                    setSkillIndex(skillIndex => skillIndex + 1);
                }
            } else {
                setFade(true);
                setShow(false);
            }
            
        }, 1000);
        return () => clearInterval(changeSkills);
    }, [skillIndex, fade]);

    return (
        <section id="main" className={mainStyle.main}>
            <p className="front-title front-item">
            Hello There, my name is <span className={mainStyle.darktext}>{name}</span>
            </p>
    
            <p className={mainStyle.desc}>
                {description}
            </p>
    
            <p className={`${mainStyle.knowledge} ${mainStyle.mainSkills}`}>
    <span className={mainStyle.darktext}>Stuff I know:</span> <span className={`${mainStyle.textFade} ${show === true ? mainStyle.showText: mainStyle.hideText}`}>{skills[skillIndex]}</span>
          </p>
    
          <NavigationButton name="Take a tour" color="white"/>
          
        </section>
    )
}





export default Main;