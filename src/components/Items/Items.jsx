import React from 'react';
import "../../components/Items/Items.css";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Items = (prop) => {
    return (
        <>

            <Col lg={3} md={5} sm={5} className="box_main">
                <Container className="box_inner">
                    <Row className="pt-1">
                        <Col>
                            <div className="box_inner_image">
                                <img src={prop.image} style={{ width: '100%', height: '100%' }} alt="product_img" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-2 pb-2">
                        <div className='Product_Details_box mb-2'>
                            <h6>ID: {prop.pid}</h6>
                            {/* <h6>Name: {prop.name}</h6> */}
                            <h6>Old Price: {prop.old_price} $</h6>
                            <h6>New Price: {prop.new_price} $</h6>
                        </div>
                    </Row>
                    <Row className="pb-3" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Col lg={10} md={10} sm={10} className="box_inner_left_btn">
                            <Link to={`/${prop.category}/${prop.pid}`}>
                                <Button className="items-button" onClick={window.scrollTo(0, 0)}>Details</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </>
    );
};

export default Items;
