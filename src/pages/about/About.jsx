import { RiDownload2Line } from "react-icons/ri";
import Info from "../../components/info/Info";
import ResumeItem from "../../components/resumeItem/ResumeItem";
import SkillsItem from "../../components/skillsItem/SkillsItem";
import Stats from "../../components/stats/Stats";
import { resume, skill } from "../../Database";

import "./About.css";

function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About <span>me</span>
        </h2>
        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>
            <ul className="info-list grid">
              <Info />
            </ul>
            <a href="./pdf/khalil-cv.pdf" download="" className="button">
              Download CV
              <span className="button-icon">
                <RiDownload2Line />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="seperator"></div>
      <section className="skills">
        <div className="section-subtitle subtitle-center">My Skills</div>
        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">Frontend Developer</h3>
            <div className="skills-items grid">
              {skill.map((value) => {
                if (value.category === "developer")
                  return <SkillsItem key={value.id} {...value} />;
              })}
            </div>
          </div>
          <div className="skills-group">
            <h3 className="skills-title">Web Developer</h3>
            <div className="skills-items grid">
              {skill.map((value) => {
                if (value.category === "developer")
                  return <SkillsItem key={value.id} {...value} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="seperator"></div>

      <div className="resume-container grid">
        <div className="resume-group grid">
          {resume.map((value) => {
            if (value.category === "experience") {
              return <ResumeItem key={value.id} {...value} />;
            }
          })}
        </div>
        <div className="resume-group grid">
          {resume.map((value) => {
            if (value.category === "education") {
              return <ResumeItem key={value.id} {...value} />;
            }
          })}
        </div>
      </div>
    </main>
  );
}

export default About;
