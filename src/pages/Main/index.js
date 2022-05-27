import React from "react"
import Helmet from "react-helmet"
// prettier-ignore
import { 
  Education, About, Landing, Navbar, Skills, Experience, Projects, Achievement, Services, Testimonials, Blog, Contacts
} from "../../components"
import { headerData } from "../../data/headerData"

const Main = () => {
  return (
    <>
      <Helmet>
        <title>{headerData.name} - Portfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievement />
      <Services />
      <Testimonials />
      <Blog />
      <Contacts />
    </>
  )
}

export default Main
