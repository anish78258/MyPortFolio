import React from 'react'
import ToggleButton from '../components/ToggleButton.jsx'
import { StarBackground } from '../components/StarBackground.jsx'
import {Navbar} from '../components/Navbar.jsx'
import {HeroSection} from '../components/HeroSection.jsx'
import { ProjectsSection } from '../components/ProjectSection.jsx'
import { AboutSection } from '../components/AboutSection.jsx'
import { ContactSection } from '../components/ContactSection.jsx'
import { SkillsSection } from '../components/SkillSection.jsx'

function Home() {
  return (
    <div>
     <ToggleButton/>
     <StarBackground/>
     <Navbar/>
     <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
     </main>
    </div>
  )
}

export default Home
