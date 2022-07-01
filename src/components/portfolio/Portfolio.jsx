import React from 'react'
import "./portfolio.css"
import IMG from "../../assets/Business Card.PNG"

const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
              <img src={IMG} alt = 'portfolio' />
           </div>
             <h3>This is a portfolio item title</h3>
             <div className='portfolio__item-cta'>
             <a href='https://github.com/GlobalEmmy/Personal-Business-Card' className='btn' target="_blank">Github</a>
             {/* <a href='Business Card Deign - Google Chrome 2022-06-30 12-57-44.mp4' className='btn btn-primary' target="_blank">Live Demo</a> */}
             <a  href="Business Card Deign.mp4" data-width="1920" data-height="1080" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
        </article>
        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
              <img src={IMG} alt = 'portfolio' />
           </div>
             <h3>This is a portfolio item title</h3>
             <div className='portfolio__item-cta'>
             <a href='https://github.com/GlobalEmmy/Illumino' className='btn' target="_blank">Github</a>
             <a href='https://dribbble.com/shots/18374513-Crouching-Tiger-WIP' className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
        </article>
        <article className='portfolio__item'>
           <div className='portfolio__item-image'>
              <img src={IMG} alt = 'portfolio' />
           </div>
             <h3>This is a portfolio item title</h3>
             <div className='portfolio__item-cta'>
             <a href='https://github.com' className='btn' target="_blank">Github</a>
             <a href='https://dribbble.com/shots/18374513-Crouching-Tiger-WIP' className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
        </article>
      </div>
    </section>
  )
}

export default Porfolio