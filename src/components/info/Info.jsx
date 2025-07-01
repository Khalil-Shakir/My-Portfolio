import { personalInfo } from "../../Database";
import "./Info.css";

function Info() {
  return (
    <>
      {personalInfo.map(({ title, description }, ind) => (
        <li className="info-item" key={ind}>
          <span className="info-title">{title}</span>
          <span className="info-desc">{description}</span>
        </li>
      ))}
    </>
  );
}

export default Info;
