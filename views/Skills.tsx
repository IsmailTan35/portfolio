import React from "react";
import Slider from "../image/SliderSvg";

const skills = [
  { skillName: "html", value: 70 },
  { skillName: "css", value: 50 },
  { skillName: "javascript", value: 50 },
  { skillName: "typescript", value: 50 },
  { skillName: "react", value: 50 },
  { skillName: "node.js", value: 50 },
  { skillName: "websocket", value: 50 },
  { skillName: "rest api", value: 50 },
  { skillName: "MongoDB", value: 50 },
];
const Skills = () => {
  return (
    <div className="skills-wrapper view-wrapper">
      <div className="2">Skills</div>
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill-wrapper" key={index}>
            <div className="skill-name">{skill.skillName}</div>
            <div style={{ width: 150 }}>
              <Slider value={skill.value} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
