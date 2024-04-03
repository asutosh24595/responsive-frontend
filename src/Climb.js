import { useState } from "react";
import point2 from "./assets/02.png";
import "./Climb.css";
import navIcon1 from "./assets/assets-51-removebg-preview.png";
import navIcon2 from "./assets/LAIcon.png";
import mainBg from "./assets/assets-11.jpg";
import secondBg from "./assets/assets-7.jpg";

export default function Climb() {
  const [selectedLink, setSelectedLink] = useState("Mountain 1");
  const [mainBackground, setMainBackground] = useState(
    mainBg // Initial background image
  );

  const handleClick = (link) => {
    setSelectedLink(link);

    if (link === "Mountain 2") {
        setMainBackground(secondBg);
      } else {
        // Set a default or another image for other links
        setMainBackground(mainBg);
      }
  };

  return (
    <div id="climb">
      <div className="container">
        <div className="climb-intro">
          <img
            src={point2}
            alt=""
            style={{ height: "100px", opacity: "0.4" }}
          />
          <h2
            className="mt-4"
            style={{
              color: "#1d3557",
              fontFamily: "Times New Roman, Times, serif",
              opacity: "0.7",
            }}
          >
            CLIMB
          </h2>
          <p className="climb-text mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="climb-main" style={{ backgroundImage: `url(${mainBackground})` }}>
        <div className="top-nav">
          <span>
            <a
              href="#climb"
              onClick={() => handleClick("Mountain 1")}
              className={selectedLink === "Mountain 1" ? "selected" : ""}
            >
              MOUNTAIN 1
            </a>
            <a
              href="#climb"
              onClick={() => handleClick("Mountain 2")}
              className={selectedLink === "Mountain 2" ? "selected" : ""}
            >
              MOUNTAIN 2
            </a>
          </span>
          <section>
            <div className="schedule">
              <div className="schedule-container">
                <h3 className="mt-2">
                  <b>SCHEDULE</b>
                </h3>
              </div>
              <div>
                <table className="schedule-table">
                <tbody>
                  <tr>
                    <td>25 Nov 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td>28 Nov 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td>18 Dec 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td>7 Nov 2017</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer className="footer">
            <span className="climb-footer mb-1">
              <img src={navIcon1} alt="" width="30" height="30" />
              <img src={navIcon2} alt="" width="100" height="50" />
              <p><i>COPYRIGHT 2016. ALL RIGHTS RESERVED.</i></p>
            </span>
      </footer>
    </div>
  );
}
