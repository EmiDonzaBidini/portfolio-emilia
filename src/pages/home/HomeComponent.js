import React from "react";
import Experience from "../../containers/experience/Experience";
import Education from "../../containers/education/Education";
import AboutMe from "../../containers/about/AboutMe";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Services from "../../containers/services/Services";
import ToolsSection from "../../containers/ToolsSection";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Education";

const Home = ({ theme }) => {
  return (
    <div>
      <Header theme={theme} />
      <Greeting theme={theme} />
      <AboutMe />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Education theme={theme} />
      <ToolsSection theme={theme} />
      <Services />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Home;