


import React from "react"
import containerStyles from "./container.module.css"

const Container = props => (
    <section className={containerStyles.container}>
        {props.children}
    </section>
)


export default Container;