import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import cactus from './assets/cactus.jpg';

const Styles = styled.div`
    .jumbo {
        background: URL(${cactus}) no-repeat, center;
        background-size: cover;
        font-weight: heavy;
        color: #ccc;
        padding: 100px;
        z-index: -2;
    }

    .text {
      background-color: #00000075;
      padding: 50px;
      background-size: cover;
    }
`;

export const Home = () => (
  <Styles>
    <Container>
      <Row>
        <Col>
            <div className="jumbo">
              <div className="text">
                <h2>Anne Plummer</h2>
                <p>Cat ipsum dolor sit amet, chew foot get suspicious of own shadow then go play with toilette paper. Climb a tree, wait for a fireman jump to fireman then scratch his face. Roll over and sun my belly. I vomit in the bed in the middle of the night lick left leg for ninety minutes, still dirty what the heck just happened, something feels fishy so eat from dog's food.</p>  
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Styles>

)


 