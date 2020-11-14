import React, {useEffect, useState} from 'react';
import style from "./skills.module.css"
import SkillsCategoryButton from "../buttons/SkillsCategoryButton"
import userConfigs from "../../user-config";
import NavigationButton from "../buttons/NavigationButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Skills = () => {

    const [category, setCategory] = useState(userConfigs.skills[0].category);

    const changeCategory = e => {
        if(e.target.nodeName !== "BUTTON") return;
        const newCategoryName = e.target.textContent.trim();
        setCategory(newCategoryName);
        console.log(newCategoryName);
    }

    const categoryButtons = userConfigs.skills.map( (skill, index) => {
        return <SkillsCategoryButton skillState={category} key={index} name={skill.category} /> 
    })

    return ( 
        <section id={style.skills}>
            <h2 className={style.title}>Area of knowledge</h2>
            <div className={style.categoryButtonContainer} onClick={changeCategory}>
                {categoryButtons} 
            </div>
            <div>
            {category}
            </div>
        </section>
     );
}
 
export default Skills;