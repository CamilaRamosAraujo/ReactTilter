import logo from "../../assets/tilter.gif";
import start from "../../assets/pressStart.gif";
// import som from './assets/tilter_ambiente.mp3';
import "./Home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const [showStart, setShowStart] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setShowLogo(false);
      setShowStart(true);
    }, 5500);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {showLogo && (
          <img src={logo} id="logo" className="App-logo" alt="logo" />
        )}
        {showStart && (
          <Link to="/board">
            <img
              src={start}
              id="start"
              className="App-start"
              alt="press start"
            />
          </Link>
        )}
        {
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1aHjWWfMRPY?&autoplay=1&loop=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        }
        {/* oIF62XvOnR4 */}
        {/* A1pDAFqfFOo */}
        {/* 0QKQlf8r7ls */}
        {/* TW32_TM97ik */}
        {/* 1aHjWWfMRPY */}
        {/* <audio id="somAmbiente" controls loop>
          <source src={som} type="audio/mpeg" />
          seu navegador não suporta HTML5
        </audio> */}
      </header>
    </div>
  );
}

export default Home;
