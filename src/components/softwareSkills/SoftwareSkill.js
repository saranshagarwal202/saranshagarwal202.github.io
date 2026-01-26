import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

// Helper to handle both direct URLs and webpack module objects
const getImageSrc = (src) => {
  if (!src) return null;
  // Handle webpack module object with default export
  if (typeof src === "object" && src.default) {
    return src.default;
  }
  return src;
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            const imageSrc = getImageSrc(skills.imageSrc);
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={skills.skillName}
                    className="skill-image"
                  />
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
