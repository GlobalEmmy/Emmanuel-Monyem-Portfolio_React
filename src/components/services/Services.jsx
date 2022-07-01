import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
      <article className='service'>
           <div className='service__head'>
             <h3>Web Development</h3>
           </div>
           <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Write well designed, tested, efficient code by using best software development practices.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Create website layout/user interface by using standard HTML/CSS pratices or other frameworks when required.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Intedgrate data from various back-end servces and databases.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Maintenance, expansion and scaling of website.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Writing a well secured smart contracts and Dapps for clean users experience.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Debugging of website and adherence to best global  practices.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>General services related to web development and periodic maintenance and scaling.</p>
              </li>
           </ul>
        </article>
        {/* END OF WEB DEVELOPMENT  */}
        <article className='service'>
           <div className='service__head'>
             <h3>Engineering (Oil and Gas)</h3>
           </div>
           <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Design and structural analysis of subsea structures such as Flowline End Terminaton(FLET),
                Inline Tees(ILTs), subsea manifolds and so on. </p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Structural lifting analysis across different environmental conditions - onshore and offshore lifting adhering 
                strictly to global best practices.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Transportation analysis of structures from land to offshore respecting global best practices.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Inpace analysis of structures respecting global best practices.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Vessel mobilization and selection of safe lifting equipments.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>General project engineering management onshore and onboard the Vessel offshores.</p>
              </li>
           </ul>
        </article>
         {/* END OF UI/UX  */}
      </div>
    </section>
  )
}

export default Services