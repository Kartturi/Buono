import React from "react"
import style from "./about.module.css"
import userConfigs from "../../user-config"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About = () => {
  const aboutInfo = userConfigs.about.info.map((info, index) => {
    return <li key={index}>{info}</li>
  })

  return (
    <section id="about" className={style.about}>
      <div className={style.aboutMe}>
        <div className={style.aboutMeBubble}>
          <div>
            <p>Who am I?</p>
            <p>Where am I?</p>
          </div>
        </div>
        <div class="bubble-pointer bubble-pointer-1"></div>
        <div class="bubble-pointer bubble-pointer-2"></div>
        <div className={style.aboutMeImgContainer}>
          <img className={style.aboutMeImg} src="/self2.png"></img>
        </div>
        <div class="about-me-text">
          <ul>{aboutInfo}</ul>
        </div>
      </div>
      <div className={style.aboutLineContainer}>
        <div className={style.aboutCenterLine}></div>
      </div>
      <div className={style.aboutForm}>
        <p className={style.aboutFormTitle}>Get touch</p>
        <br></br>
        <p className={style.aboutFormTitle} style={{ color: "#962929" }}>
          artturi_hamalainen@hotmail.com
        </p>
      </div>
    </section>
  )
}

export default About
