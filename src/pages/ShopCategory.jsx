import React, { useContext } from 'react'
import "../pages/CSS/ShopCategory.css"
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ShopContext } from '../context/ShopContext.jsx'
import Items from '../components/Items/Items.jsx';


const ShopCategory = (prop) => {
  const { all_product } = useContext(ShopContext);
  return (
    <>
      <Navbar />
      {/* ======================== */}

      <Container fluid>
        <Row>
          <Col lg={12}>
            <img src={prop.banner} alt="banner" className='top-banner' />
          </Col>
        </Row>
      </Container>

      {/* ================================================ */}

      <Container>

        <Row>
          {/* ======================================================== */}
          {
            all_product.filter((v) => v.category === prop.category).map((v, i) => {
              return (
                <Items key={i} pid={v.id} name={v.name} old_price={v.old_price} new_price={v.new_price} image={v.image} category={v.category} />
              )
            })
          }
          {/* ======================================================== */}
        </Row>
      </Container>

      {/* ======================== */}
      <Footer />
    </>
  )
}

export default ShopCategory
