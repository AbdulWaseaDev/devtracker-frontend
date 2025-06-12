// import Container from 'react-bootstrap/Container';
import React from 'react';
 import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
       <Container>
        <Row>
          <Col md={4} sm={12}>
            <h5>Your Logo</h5>
           <img src="/logo berlin.jpeg" alt="Logo" width="120" />


            <p>Delivering innovative tech solutions to empower your digital growth and online presence.</p>

          </Col>
          <Col md={4} sm={6}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Profile</a></li>
            </ul>
          </Col>
          <Col md={4} sm={6}>
            <h5>Contact Us</h5>
            <p>Email: info@berlintechs.com</p>
            <p>Phone: +92305-1935993</p>
            <p>Location: Kachery Chock Near Civil Lines College, Multan, Pakistan</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
