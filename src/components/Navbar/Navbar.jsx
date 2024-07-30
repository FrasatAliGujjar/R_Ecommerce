import React, { useContext } from 'react'
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { ShopContext } from '../../context/ShopContext';


const Navbar = () => {

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <>
      {/* <Container fluid>
        <Row>
          <Col> */}
      {/* ======================*/}
      <BootstrapNavbar expand="lg" style={{ padding: 0}}>
        <Container fluid className="nav_bar_main_container">
          {/* ========================================================================== */}
          <BootstrapNavbar.Brand className="nav_bar_title_bar">
            <Link to={"/"}>
              <h6 className="title">Amazon</h6>
            </Link>
          </BootstrapNavbar.Brand>
          {/* ========================================================================== */}
          <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
          <BootstrapNavbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0 list_main">
              <Nav.Link as={Link} to="/" className="nav-item" id="nav-btn1">
                <p className="home-btn">Home</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/men" className="nav-item" id="nav-btn">
                <p className="home-btn">Men</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/women" className="nav-item" id="nav-btn">
                <p className="home-btn">Women</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/kids" className="nav-item" id="nav-btn">
                <p className="home-btn">Kids</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" className="nav-item" id="nav-btn">
                <p className="home-btn">Cart</p>
                <span className='cart_counter'><b>{getTotalCartItems()}</b></span>
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-item" id="nav-btn">
                <p className="home-btn">Login</p>
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
          {/* ========================================================================== */}
        </Container>
      </BootstrapNavbar>
      {/* ======================*/}
      {/* </Col>
        </Row>
      </Container> */}

    </>
  )
}

export default Navbar