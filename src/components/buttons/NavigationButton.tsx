import React from "react"
import buttonStyles from "./buttons.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



const NavigationButton = props => (
    <a href="#projects" className={`${buttonStyles.default} ${buttonStyles[props.color]}`}>{props.name} <FontAwesomeIcon icon="arrow-down"
    size="1x"/></a>
)


export default NavigationButton;