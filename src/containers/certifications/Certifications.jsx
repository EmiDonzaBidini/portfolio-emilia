import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function Certifications({ theme }) {
  return (
    <section className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certificaciones
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert, idx) => (
          <CertificationCard key={idx} certificate={cert} theme={theme} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;