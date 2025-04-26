import React from "react";
import { aboutMe } from "../../portfolio";

function AboutMe() {
  return (
    <section id="about" className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">{aboutMe.title}</h2>
      <p className="text-lg text-gray-700 whitespace-pre-line text-center max-w-4xl mx-auto">
        {aboutMe.description}
      </p>
    </section>
  );
}

export default AboutMe;