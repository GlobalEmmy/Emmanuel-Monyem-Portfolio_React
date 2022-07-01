import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Django</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MYSQL</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>

        {/* END OF BACKEND */}
        <div className="experience__frontend">
          <h3>Web3 Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Motoko</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Solidity</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>
            
          </div>
        </div>
        {/* END OF WEB 3 */}
        <div className="experience__frontend">
          <h3>ENGINEERING</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>AutoCAD</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Solidworks</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SACS</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MathCAD</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Abaqus</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Excel</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        {/* END OF GENERAL ENGINEERING */}
      </div>
    </section>
  );
};

export default Experience;
