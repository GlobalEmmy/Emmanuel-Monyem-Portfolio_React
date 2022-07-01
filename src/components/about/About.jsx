import React from 'react'
import "./about.css"
import ME from "../../assets/native-pics.jpeg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
        <div className='about__me-image'>
          <img src= {ME} alt='me'/>
        </div>
        </div>
        <div className='about__content'>
        <div className='about__cards'>
        <article className='about__card'>
        <FaAward className='about__icon' />
          <h5>Experience</h5>
          <small>3+ Years Working </small>
        </article>
        <article className='about__card'>
        <FiUsers className='about__icon' />
          <h5>Clients</h5>
          <small>10+ Worldwide </small>
        </article>
        <article className='about__card'>
        <VscFolderLibrary className='about__icon' />
          <h5>Projects</h5>
          <small>20+ Completed </small>
        </article>
        </div>
        <p>
             I'm a developer that is motivated by nothing but matchless excellence. My satisfaction is achieved
             only when my clients truly feel satisfied with their job. A Progressive, logical, and balanced engineer
             and technology enthusiast. Passionate about applying my skills to industries not limited to web development, but
             engineering in general. Always conscious of self-improvement and the value of teamwork.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About