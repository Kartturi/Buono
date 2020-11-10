import React from "react"

//Components
import Container from "../components/Container/Container";
import Main from "../components/Main";
import Projects from "../components/projects/Projects";
import { library } from "@fortawesome/fontawesome-svg-core"
import MainBackground from '../components/Sketch'
import {
  faHome,
  faCoffee,
  faHotel,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faTimesCircle,
  faSchool,
  faCar,
  faUser,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons"


library.add(
  faHome,
  faCoffee,
  faHotel,
  faArrowLeft,
  faArrowRight,
  faTimesCircle,
  faSchool,
  faCar,
  faUser,
  faArrowDown,
  faExternalLinkAlt
)

const IndexPage = () => (
  <div>
  <Container>
    <Main />
  </Container>
  <Container>
    <Projects />
  </Container>
  
  <MainBackground />
  </div>
  
)


export default IndexPage;
