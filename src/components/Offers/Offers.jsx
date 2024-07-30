import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../Offers/Offers.css";
import { Link } from 'react-router-dom';
import stylish_girl from "../../assets/exclusive_image.png";

const Offers = () => {
    return (
        <>
            {/* ======================== */}

            <Container fluid>
                <Row className='Offers_main_row'>
                    <Col lg={6} md={8} sm={8} className='df jc-c ai-c'>
                        <div className="Offers_left df jc-c ai-c">
                            <h1>New Offers</h1>
                            <h5>are available for 2024</h5>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <button className='Offers_pro-button'>
                                    <b>
                                        Offers
                                    </b>
                                </button>
                            </Link>
                        </div>
                    </Col>
                    {/* ================================= */}
                    <Col lg={6} md={4} sm={4} className='df jc-c ai-c'>
                        <div className="Offers_right df jc-c ai-c">
                            <img src={stylish_girl} className='Offers_think_pic' alt="how" />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* ======================== */}
        </>
    );
}

export default Offers;
