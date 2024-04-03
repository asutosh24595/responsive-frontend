import "./App.css";
import History from "./History";
import Climb from "./Climb";
import Intro from "./Intro";
import MobileAccordion from "./MobileAccordion";
import { useState, useEffect } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Intro />
      {isMobile && <MobileAccordion />}
      {!isMobile ? (
        <>
          <History/>
          <Climb />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
