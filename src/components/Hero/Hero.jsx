import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../Hero/Hero.css";
import { Link } from 'react-router-dom';
import stylish_girl from "../../assets/hero_image.png";

const Hero = () => {
    return (
        <>
            {/* ======================== */}

            <Container fluid>
                <Row className='hero_main_row'>
                    <Col lg={6} md={8} sm={8} className='df jc-c ai-c'>
                        <div className="left df jc-c ai-c">
                            <h1>New Arrivals Only</h1>
                            <h5>50% Discount For New Customers</h5>
                            <h5>Don't think ,This is Now or Never Situation</h5>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <button className='pro-button'>
                                    <b>
                                        Shop
                                    </b>
                                </button>
                            </Link>
                        </div>
                    </Col>
                    {/* ================================= */}
                    <Col lg={6} md={4} sm={4} className='df jc-c ai-c'>
                        <div className="right df jc-c ai-c">
                            <img src={stylish_girl} className='think_pic' alt="how" />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* ======================== */}
        </>
    );
}

export default Hero;
