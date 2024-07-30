import React from 'react'
import "../pages/CSS/Cart.css"
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import CartItems from '../components/CartItems/CartItems.jsx'

const Cart = () => {


    return (
        <>
            <Navbar />
            {/* ===================================== */}
            <br />
            <h1>Cart Record</h1>
            <CartItems />
            {/* ===================================== */}
            <Footer />
        </>
    )
}

export default Cart
