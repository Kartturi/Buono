import React from "react"
import buttonStyles from "./buttons.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SkillsCategoryButton = props => {
  return (
    <button
      data-key={`${props.order}`}
      className={`${buttonStyles.skillsCategoryButton} ${
        props.skillState === props.name ? buttonStyles.categoryActive : ""
      }`}
    >
      {props.name}
    </button>
  )
}

export default SkillsCategoryButton
