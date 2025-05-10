import React, { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { motion } from 'framer-motion'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        {/* Title & Desc Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
          </Desc>
        </motion.div>

        {/* Toggle Buttons Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ToggleButtonGroup>
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            }
            <Divider />
            {toggle === 'web app' ?
              <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
              :
              <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            }
            <Divider />
            {toggle === 'android app' ?
              <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
              :
              <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
            }
          </ToggleButtonGroup>
        </motion.div>

        {/* Card Animation */}
        <CardContainer>
          {toggle === 'all' && projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(133, 76, 230, 0.5)' }}
            >
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            </motion.div>
          ))}

          {projects.filter((item) => item.category === toggle).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(133, 76, 230, 0.5)' }}
            >
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            </motion.div>
          ))}
        </CardContainer>

      </Wrapper>
    </Container>
  )
}

export default Projects
