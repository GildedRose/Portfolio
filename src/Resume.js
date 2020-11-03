import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';



export const Resume = () => (
  <Container>
  <section id="portfolio" class="portfolio responsive">
    <div class="section-title">
      <h1>Resume</h1>
      
      <a href="./assets/AnnePlummerResume.pdf" download><img src={require("./assets/images/AnnePlummerResume.png")} class="img-fluid reactive" />
      <p>Click to Download</p> </a>
    </div>
    </section>
    </Container>
)