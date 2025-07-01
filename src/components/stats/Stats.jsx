import parse from "html-react-parser";
import { stats } from "../../Database";
import "./stats.css";
const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, ind) => {
        return (
          <div className="stats-box">
            <h3 className="stats-no">{no}</h3>
            <p className="stats-title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Stats;
