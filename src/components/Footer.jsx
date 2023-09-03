import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Logo1 = () => {
  return (
    <img
      src="https://i.pinimg.com/564x/1d/74/3b/1d743bb41490128be1b2a0edc8a3e000.jpg"
      alt="Logo 1"
      style={{ maxWidth: '100px' }}
    />
  );
};

const Logo2 = () => {
  return (
    <img
      src="https://i.pinimg.com/474x/ab/b1/15/abb1150dce1e4e4ad4c7cd50642e7334.jpg"
      alt="Logo 2"
      style={{ maxWidth: '100px' }}
    />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <a
      href={href}
      className="btn btn-light rounded-circle d-flex align-items-center justify-content-center me-3"
      style={{
        width: '56px',
        height: '56px',
        textDecoration: 'none',
        fontSize: '24px',
        transition: 'background 0.3s ease',
      }}
    >
      {children}
      <span className="visually-hidden">{label}</span>
    </a>
  );
};

function Footer() {
  return (
    <footer className="bg-light py-4" style={{paddingTop:"50px"}}>
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4">
            
            <Logo1 />
          </Col>
          <Col lg={3} md={6} className="mb-4">
           
            <Logo2 />
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5>Subscribe</h5>
            <p className="mb-3">Stay updated with our latest offers and news.</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-dark" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex align-items-center">
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="border-top border-dark mt-4">
        <Container className="py-4">
          <Row>
            <Col className="text-center">
              <p className="mb-3">&copy; 2023 Bootstrap Templates. All rights reserved.</p>
              <div className="d-flex justify-content-center">
                <SocialButton label="Twitter" href="#">
                  <FaTwitter />
                </SocialButton>
                <SocialButton label="YouTube" href="#">
                  <FaYoutube />
                </SocialButton>
                <SocialButton label="Instagram" href="#">
                  <FaInstagram />
                </SocialButton>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;


// <img src='https://i.pinimg.com/564x/1d/74/3b/1d743bb41490128be1b2a0edc8a3e000.jpg'/>
//<img src='https://i.pinimg.com/474x/ab/b1/15/abb1150dce1e4e4ad4c7cd50642e7334.jpg'/>
