import React, { useContext } from 'react';
import "../../components/CartItems/CartItems.css"
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ShopContext } from '../../context/ShopContext';

const CartItems = () => {

    const { all_product, cartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContext)


    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-22">
                        {/* =================================================  */}
                        <div className="container b-blue br-10px">
                            <div className="row df jc-sa">
                                <div className="col-2 df jc-c ai-c  card_item_details_box">
                                    <h6>Products</h6>
                                </div>
                                {/* -------------------------- */}
                                <div className="col-2 df jc-c ai-c cart_title_cols">
                                    <h6>Title</h6>
                                </div>
                                {/* -------------------------- */}
                                <div className="col-2 df jc-c ai-c ">
                                    <h6>Price</h6>
                                </div>
                                {/* -------------------------- */}
                                <div className="col-2 df jc-c ai-c ">
                                    <h6>Quantity</h6>
                                </div>
                                {/* -------------------------- */}
                                <div className="col-2 df jc-c ai-c ">
                                    <h6>Total</h6>
                                </div>
                                {/* -------------------------- */}
                                <div className="col-2 df jc-c ai-c ">
                                    <h6>Cancel</h6>
                                </div>
                                {/* -------------------------- */}
                            </div>
                            {/* ------------------------------------------------------------------------------------ */}
                            {
                                all_product.map((v, i) => {
                                    if (cartItem[v.id] > 0) {

                                        return (
                                            <div className="row mt-5 df jc-sa">
                                                <div className="col-2 df jc-c ai-c  card_item_details_box">
                                                    <img src={v.image} alt="" className='cart_product_img' />
                                                </div>
                                                {/* -------------------------- */}
                                                <div className="col-2 df jc-c ai-c  cart_product_title cart_title_cols">
                                                    <p>{v.name}</p>
                                                </div>
                                                {/* -------------------------- */}
                                                <div className="col-2 df jc-c ai-c ">
                                                    <h6>{v.new_price}$</h6>
                                                </div>
                                                {/* -------------------------- */}
                                                <div className="col-2 df jc-c ai-c ">
                                                    <h6>{cartItem[v.id]}</h6>
                                                </div>
                                                {/* -------------------------- */}
                                                <div className="col-2 df jc-c ai-c ">
                                                    <h6>{v.new_price * cartItem[v.id]}$</h6>
                                                </div>
                                                {/* -------------------------- */}
                                                <div className="col-2 df jc-c ai-c ">
                                                    <button className='b-s-red' onClick={() => { removeFromCart(v.id) }}>X</button>
                                                </div>
                                                {/* -------------------------- */}
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        {/* =================================================  */}
                        <br />
                        <br />
                        <br />
                        <h1>Bill Details</h1>
                        <br />
                        {/* =================================================  */}
                        <div className="container b-blue br-10px">
                            <div className="row df jc-s">
                                <div className="col-2 df jc-c ai-c  final_card_item_details_box">
                                    <h6>SubTotal</h6>
                                </div>
                                {/* -------------------------- */}
                                <div className="col-2 df jc-c ai-c ">
                                    <h6>{getTotalCartAmount()} $</h6>
                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------------ */}
                            <div className="row df jc-s">
                                <div className="col-2 df jc-c ai-c  final_card_item_details_box">
                                    <h6>Shipping Fee</h6>
                                </div>
                                {/* -------------------------- */}
                                <div className="col-2 df jc-c ai-c ">
                                    <h6>Free</h6>
                                </div>
                            </div>
                            {/* ------------------------------------------------------------------------------------ */}
                            <div className="row df jc-s">
                                <div className="col-2 df jc-c ai-c  final_card_item_details_box">
                                    <h6>Total</h6>
                                </div>
                                {/* -------------------------- */}
                                <div className="col-2 df jc-c ai-c ">
                                    <h6>{getTotalCartAmount()} $</h6>
                                </div>
                                {/* -------------------------- */}
                            </div>
                            {/* ------------------------------------------------------------------------------------ */}
                        </div>
                        {/* =================================================  */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems
