import React from 'react';
import "../pages/CSS/Login.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <Navbar />
      {/* =================================== */}

      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={6} sm={12}>
            <h2 className="text-center">Login Here</h2>
            <Form onSubmit={(e) => (e.preventDefault())}>
              <Form.Group controlId="formName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your email" />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* =================================== */}
      <Footer />
    </>
  );
};

export default Login;
