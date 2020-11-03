import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';




export const About = () => (

  <section id="about" class="about">
      <div class="section-title">
        <h1>About</h1>
        </div>
          <Row>
          <Col>
            <img src={require("./assets/images/Josie.png")}  class="img-fluid reactive" alt="" />
            </Col>
            <Col>
            <p>
              Hi y'all! I'm Anne, a lifestyle and documentary photographer turned full stack web developer.
              When I'm not working, I'm devoted to cat and kitten rescue in San Antonio, Texas. My own cats love
              to sit and watch me code. Josie, pictured, not only loves watch me code for hours, she's also pretty good at catching those pesky bugs.
            </p>
      </Col>
</Row>
  </section>

  

)