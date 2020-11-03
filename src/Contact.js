import React, { useState } from 'react';
import { validateEmail } from './utils/helpers';
import { Container, Row, Col  } from 'react-bootstrap';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
  <Container>
    <section id="contact" class="contact responsive">
      <div class="section-title">
        <h1 padding-top="50px">Contact Me</h1>
      </div>
      <Row>
        <div className="port-row">
          <Col>
            <div className="contact-column">
              <div>
                <a href="https://github.com/GildedRose"><img src={require("./assets/images/GitHub-64px.png")} width="100px" padding-top="25px"/></a>
              </div>

              <div>
                <a href="mailto:anne.k.plummer@gmail.com"><img src={require("./assets/images/email.png")} width="100px" padding-top="25px"/></a>
              </div>

              <div>
                <a href="https://www.linkedin.com/in/anne-plummer-1913871a7/"><img src={require("./assets/images/LinkedIn.png")} width="100px" padding-top="25px"/></a>
              </div>
              </div>
        </Col>
        <Col>
          <div className="port-column">
            <form className= "contact form-horizontal" id="contact-form" onSubmit={handleSubmit}>
              <div class="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  onBlur={handleChange}
                />
              </div>
              <div class="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  onBlur={handleChange}
                />
              </div>
              <div class="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  rows="5"
                  defaultValue={message}
                  onBlur={handleChange}
                />
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}
              <button type="submit">Submit</button>
            </form>
          </div>
          
        </Col>
        </div>
      </Row>
    </section>
  </Container>
  );
}

