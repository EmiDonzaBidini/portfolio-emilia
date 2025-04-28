import React from "react";
import ExperienceAccordion from "../experienceAccordion/ExperienceAccordion";
import { experience } from "../../portfolio";
import "./Experience.css";
import { Fade } from "react-reveal";

function Experience({ theme }) {
  return (
    <section className="experience-section" id="experience">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="experience-header" style={{ color: theme.text }}>
          Experiencia Profesional
        </h1>
      </Fade>
      <ExperienceAccordion sections={experience.sections} theme={theme} />
    </section>
  );
}

export default Experience;
