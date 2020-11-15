import React from "react"

//Components
import Container from "../components/Container/Container"
import Main from "../components/Main"
import Projects from "../components/projects/Projects"
import Skills from "../components/skills/Skills"
import { library } from "@fortawesome/fontawesome-svg-core"
import MainBackground from "../components/Sketch"
import {
  faArrowDown,
  faExternalLinkAlt,
  faBaseballBall,
  faFootballBall,
  faBowlingBall,
  faVolleyballBall,
  faTableTennis,
  faGolfBall,
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faArrowDown,
  faExternalLinkAlt,
  faBaseballBall,
  faFootballBall,
  faBowlingBall,
  faVolleyballBall,
  faTableTennis,
  faGolfBall
)

const IndexPage = () => (
  <div>
    <Container>
      <Main />
    </Container>
    <Container>
      <Projects />
    </Container>
    <Container>
      <Skills />
    </Container>

    <MainBackground />
  </div>
)

export default IndexPage
