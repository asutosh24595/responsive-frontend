import "./Intro.css";
import overlayImg from "./assets/assets-46-removebg-preview.png";
import navIcon1 from "./assets/assets-51-removebg-preview.png";

const Intro = () => {
  return (
    <header className="header">
      <div>
        <span className="intro mt-3">
          <img src={navIcon1} alt="" width="30" height="30" />
          <a href="#history">01. HISTORY</a>
          &nbsp;
          <a href="#climb">02. TEAM</a>
        </span>
      </div>
      <div className="overlay">
        <img src={overlayImg} alt="" />
      </div>
    </header>
  );
};

export default Intro;
