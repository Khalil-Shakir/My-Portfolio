import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home-container grid">
      <img src="./assets/home.jpg" alt="My Image" className="home-image" />
      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Khalil Shakir</span>
          <br /> Web Designer
        </h1>
        <div className="home-desc">
          I am a Tunisian based web designer & front-end developer focused on
          crafting clean & user-friendly experiences, I am passionate about
          building excellent software that improves the lives of those around
          me.
        </div>
        <Link to="./about" className="button">
          More about me
          <span className="button-icon">
            <RiArrowRightLine />
          </span>
        </Link>
      </div>
      <div className="color-block"></div>
    </section>
  );
}

export default Home;
