import React, { Component } from "react";
import ExperienceAccordion from "./experienceAccordion";
import { experience } from "../../portfolio";
import "./Experience.css";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-section" id="experience">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="experience-header" style={{ color: theme.text }}>
            Experiencia Profesional
          </h1>
        </Fade>
        <ExperienceAccordion sections={experience.sections} theme={theme} />
      </div>
    );
  }
}

export default Experience;
