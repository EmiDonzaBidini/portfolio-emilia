import React, { Component } from "react";
import "./Education.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="education">
        <div className="education-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="education-header" style={{ color: theme.text }}>
              Educación
            </h1>
          </Fade>
        </div>
        <div className="education-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Education;