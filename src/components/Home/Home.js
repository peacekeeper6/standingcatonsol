import React from "react";
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
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}

              <h1 className="heading" style ={{ paddingTop: 50 }}>
                Standing Cat
                <strong className="main-name"> *STD*</strong>
              </h1>

              <h1 className="heading-name" style ={{ paddingTop: 50 }}>
                That boy chilling fr
                More extra description stuff blah blah blah lorem ipsum
              </h1>

              {/* <div style={{ padding: 60, textAlign: "left" }}>
                <Type />
              </div> */}
              <ul className="home-about-social-links" style= {{ paddingTop: 50 }}>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <GiEagleHead />
                  </a>
                </li>
              </ul>
            </Col>
              
            <Col md={5} style={{ paddingLeft: 200, paddingTop: 50, paddingBottom: 5 }}>
              <img
                // src={homeLogo}
                src={nobgcat}
                alt="home pic"
                className="img-fluid"
                // style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Row>
      <Col class="transition1">
{/* 
              <img
                src={transition}
                alt="home pic"
                className="img-fluid"
                background-repeat: "repeat"
                style={{ maxHeight: "450px" }}
              /> */}
            </Col>
            </Row>
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
    </section>
  );
}

export default Home;