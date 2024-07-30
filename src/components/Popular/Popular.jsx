import React from 'react';
import "../Popular/Popular.css";
import { Container, Row } from 'react-bootstrap';
import Items from "../Items/Items.jsx";
import data_product from "../../assets/data";

const Popular = () => {
    return (
        <>
            {/* ======================== */}

            <Container>
                <Row>
                    {/* ======================================================== */}
                    {
                        data_product.map((v, i) => {
                            return (
                                <Items key={i} pid={v.id} name={v.name} old_price={v.old_price} new_price={v.new_price} image={v.image} category="women" />
                            )
                        })
                    }
                    {/* ======================================================== */}
                </Row>
            </Container>

            {/* ======================== */}
        </>
    );
}

export default Popular;
