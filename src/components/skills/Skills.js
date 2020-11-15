import React, { useEffect, useState } from "react"
import style from "./skills.module.css"
import SkillsCategoryButton from "../buttons/SkillsCategoryButton"
import userConfigs from "../../user-config"
import NavigationButton from "../buttons/NavigationButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Skills = () => {
  const [category, setCategory] = useState(userConfigs.skills[0].category)
  const [categorySkills, setCategorySkills] = useState(
    userConfigs.skills[0].skills
  )

  const changeCategory = e => {
    if (e.target.nodeName !== "BUTTON") return
    const newCategoryName = e.target.textContent.trim()
    const order = Number(e.target.dataset.key)
    setCategory(newCategoryName)
    setCategorySkills(userConfigs.skills[order].skills)
  }

  const categoryButtons = userConfigs.skills.map((skill, index) => {
    return (
      <SkillsCategoryButton
        skillState={category}
        key={index}
        order={index}
        name={skill.category}
      />
    )
  })

  const setSkillRows = () => {
    let skillRows = categorySkills.map((skill, index) => {
      const randomIcon = (
        <FontAwesomeIcon
          icon={`${
            userConfigs.skillsIcons[
              Math.floor(
                Math.random() * Math.floor(userConfigs.skillsIcons.length)
              )
            ]
          }`}
          size="1x"
        />
      )
      return (
        <tr key={index}>
          <td>{skill.name}</td>
          <td>{skill.level === 1 ? randomIcon : ""}</td>
          <td>{skill.level === 2 ? randomIcon : ""}</td>
          <td>{skill.level === 3 ? randomIcon : ""}</td>
        </tr>
      )
    })
    return skillRows
  }

  return (
    <section id={`skills`} className={style.skills}>
      <h2 className={style.title}>Area of knowledge</h2>
      <div className={style.categoryButtonContainer} onClick={changeCategory}>
        {categoryButtons}
      </div>
      <table className={`skills-table ${style.table}`}>
        <thead>
          <tr>
            <th>Skillls</th>
            <th title="Spent time with 10-20 hours, done 1 or 2 project or so">
              Good hang of it
            </th>
            <th title="Spent time with 20-100 hours">Not too shabby</th>
            <th title="Spent time over 100 hours">Comfortable</th>
          </tr>
        </thead>
        <tbody>{setSkillRows()}</tbody>
      </table>

      <NavigationButton destination="about" name="Who am I" color="blue" />
    </section>
  )
}

export default Skills
