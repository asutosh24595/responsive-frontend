import Carousel from "./Carousel";
import "./History.css";
import point1 from "./assets/01.png";
import navIcon1 from "./assets/assets-51-removebg-preview.png";
import navIcon2 from "./assets/assets-46-removebg-preview.png";

export default function History({ isMobile }) {
  return (
    <div>
      <main id="history">
        <div>
          <span className="mb-1">
            <span className="nav-icon mb-1">
              <img src={navIcon1} alt="" width="30" height="30" />
              <img src={navIcon2} alt="" width="70" height="30" />
            </span>
            <a href="#history">01. HISTORY</a>&nbsp;
            <a href="#climb">02. TEAM</a>
          </span>
        </div>
      </main>
      <div className="history-body">
        <div className="container">
          <div className="my-div">
            <img
              src={point1}
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
              HISTORY
            </h2>
          </div>
          <p className="centered-text mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed vestibulum tincidunt semper. Integer sodales ex vel
            elit ultricies, vel rhoncus magna ullamcorper. Vestibulum luctus
            velit quis commodo aliquam.Proin et elit justo. Sed id lorem aniu.
          </p>
        </div>
        <div className="carousel-container">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
