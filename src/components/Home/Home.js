import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/standingcat.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";
import Home7 from "./Home7";
import Type from "./Type";
import transition from "../../Assets/transitionreal.png"
import nobgcat from "../../Assets/catnobg.png"
import CopyButton from "./CopyButton.js"
import ImageFade from "./ImageFade.js"
import dexLogo from "../../Assets/dexscreener.png"

// import {
//   // AiFillGithub,
//   AiOutlineTwitter,
//   // AiFillInstagram,
// } from "react-icons/ai";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";


import { GiEagleHead } from "react-icons/gi";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading" style ={{ paddingTop: 50 }}>
                Standing Cat
                <strong className="main-name"> $STDCAT</strong>
              </h1>

              <h1 className="heading-name" style ={{ paddingTop: 50 }}>
              Cat has been standing for so long. Look how tired and sad the cat is. We must help the cat before his legs give out. Buy $STD CAT to support the cat. 
              </h1>

              {/* <div style={{ padding: 60, textAlign: "left" }}>
                <Type />
              </div> */}
              <ul className="home-about-social-links" style= {{ paddingTop: 50 }}>
                <li className="social-icons">
                  <a
                    href="https://t.me/+mXR3AgvoyYo5ZDk5"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/standingcatcoin"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://dexscreener.com/solana/GKs3M3jS5gSR2dhMucVNzNVHHNo4kSEU7auWtwGJi1k3"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <img src= {dexLogo} />
                    {/* <GiEagleHead /> */}
                  </a>
                </li>
              </ul>
            </Col>
              
            <Col md={5} className="main-page-cat">
              {/* <img
                // src={homeLogo}
                src={nobgcat}
                alt="home pic"
                // className="main-page-cat"
                // style={{ maxHeight: "450px" }}
              /> */}
              <ImageFade />
            </Col>
          </Row>
          <br></br>
          <div className="cb-button">
            <CopyButton />
          </div>
        </Container>
      </Container>

      {/* <Row>
      <Col class="transition1"> */}
{/* 
              <img
                src={transition}
                alt="home pic"
                className="img-fluid"
                background-repeat: "repeat"
                style={{ maxHeight: "450px" }}
              /> */}
            {/* </Col>
            </Row> */}
      <div id="home2">
      <Home2 />
      </div>
      <div id="home4">
      <Home4 />
      </div>
      <div id="home5">
      <Home5 />
      </div>
      <div id="home3">
      <Home3 />
      </div>
      <Home6 />
      {/* <Home7 /> */}
    </section>
  );
}

export default Home;
