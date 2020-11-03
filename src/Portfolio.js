import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';


export const Portfolio = () => (
  <Container>
    <section id="portfolio" class="portfolio responsive">
      <div class="section-title">
        <h1>Portfolio</h1>
        <p> These projects were all created during my time at the University of Austin Full Stack Web Development Bootcamp in 2020.</p>
      </div>
      <Row>
        <div className="port-row">
        <Col>
        <div className="port-column">
          <a href="https://mysterious-island-01047.herokuapp.com/"><img src={require("./assets/images/RedCatProject.JPG")} alt="Website The Red Cat and Co." /> </a>
          <a href="https://gildedrose.github.io/HoriSEOn/"><img src={require("./assets/images/Horiseon.jpg")} alt="Website for Horiseon." /> </a>
          <img src={require("./assets/images/hero-bg.jpg")} alt="Close up of a pink peony" />
          <a href="https://devmadia.github.io/soother/"><img src={require("./assets/images/Soother.png")} alt="Soothing News Reader" /></a>
         
        </div>
        </Col>
        <Col>
        <div className="port-column">
          <a href="https://illbehonest.herokuapp.com/"><img src={require("./assets/images/illbehonest.gif")} alt="I'll Be Honest Social Media App" /></a>
          <a href="https://gildedrose.github.io/run-buddy/"><img src={require("./assets/images/RunBuddy.jpg")} alt="Run Buddy website" /></a>
          <a href="https://gildedrose.github.io/GetStuffDone/"><img src={require("./assets/images/WorkDay.png")} alt="Day Scheduling Website" /></a>
          <img src={require("./assets/images/Marg.jpg")} alt="Margarita in tall glass at night with colorful lights." />
          
        </div>
        </Col>    
          <div class="item-c"></div>
        </div>
      </Row>
    </section>
  </Container>
        
)