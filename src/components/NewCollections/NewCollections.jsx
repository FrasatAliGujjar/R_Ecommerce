import React from 'react';
import "../NewCollections/NewCollections.css";
import { Container, Row } from 'react-bootstrap';
import Items from "../Items/Items.jsx";
import data_product from "../../assets/new_collections.js";

const NewCollections = () => {
    return (
        <>
            {/* ======================== */}

            <Container>
                <Row>
                    {/* ======================================================== */}
                    {
                        data_product.map((v, i) => {
                            return (
                                <Items  key={i}  pid={v.id} name={v.name} old_price={v.old_price} new_price={v.new_price} image={v.image} category={"men"} />
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

export default NewCollections;
