import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import "../ProductDetails/ProductDetails.css";
import stars from "../../assets/star_icon.png";
import Dstars from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext';

const ProductDetails = (props) => {
    // const [quantity, setQuantity] = useState(0);
    const { addToCart } = useContext(ShopContext);

    return (
        <Container fluid className='pd-main'>
            <Row>
                <Col>
                    <b><p className='breadcrums'>HOME / SHOP / {props.category} / {props.name}</p></b>
                </Col>
            </Row>
            <Row>
                <Col lg={2} md={2} sm={2} className="min-pic-box">
                    <Image className='min-pics' src={props.image} alt="product" />
                    <Image className='min-pics' src={props.image} alt="product" />
                    <Image className='min-pics' src={props.image} alt="product" />
                    <Image className='min-pics' src={props.image} alt="product" />
                </Col>
                <Col lg={5} md={12} sm={12} className="max-pic-box">
                    <Image className='max-pic' src={props.image} alt="product" />
                </Col>
                <Col lg={5} md={12} sm={12} className="details-pic-box">
                    <div className="details_main_box">
                        <Container fluid>
                            <Row>
                                <Col xs={6}>
                                    <h5>Product ID:</h5>
                                    {/* <h5>Name:</h5> */}
                                    <h5>Old Price: </h5>
                                    <h5>New Price: </h5>
                                    <h5>Category:</h5>
                                    <h5>Rating:</h5>
                                    {/* <h5>Quantity:</h5> */}
                                </Col>
                                <Col xs={6}>
                                    <h5>{props.pid}</h5>
                                    {/* <h5>{props.name}</h5> */}
                                    <h5>{props.old_price} $</h5>
                                    <h5>{props.new_price} $</h5>
                                    <h5>{props.category}</h5>
                                    <h5 className='df'>
                                        <Image src={stars} alt="stars" />
                                        <Image src={stars} alt="stars" />
                                        <Image src={stars} alt="stars" />
                                        <Image src={stars} alt="stars" />
                                        <Image src={Dstars} alt="stars" />
                                    </h5>
                                    {/* <h5>{quantity}</h5> */}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    {/* <Button variant="dark" onClick={() => { addToCart(Number(props.pid)); setQuantity(quantity + 1); }} */}
                                    <Button variant="dark" onClick={() => { addToCart(Number(props.pid)) }}
                                    >cart + </Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetails;
