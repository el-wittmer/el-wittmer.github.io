import React from "react";

function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-content">
        <div className="education-item">
          <h3>Reed College</h3>
          <p><b>BA in Linguistics</b></p>
          <p className="education-note">Understanding how people create mental models of audio input shaped my approach to human-centered design.</p>
        </div>
        <div className="education-item">
          <h3>University of Illinois Urbana-Champaign</h3>
          <p><b>MS in Computer Science</b></p>
          <p className="education-note">Specializing in Data Science and Human-Computer Interaction.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;