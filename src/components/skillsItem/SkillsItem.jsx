import React from "react";

const SkillsItem = ({ img, title, level }) => {
  return (
    <div className="skills-data">
      <div className="skills-blob">
        <img src={img} alt={title} className="skills-img" />
        <span className="skills-name">{title}</span>
        <span className="skills-level">{level}</span>
      </div>
    </div>
  );
};

export default SkillsItem;
