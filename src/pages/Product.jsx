import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import "../pages/CSS/Product.css"
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import { useParams } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails/ProductDetails.jsx'
import NewCollections from '../components/NewCollections/NewCollections.jsx'


const Product = () => {
  const { all_product } = useContext(ShopContext);
  const product_id = useParams();
  const product = all_product.find(item => item.id === parseInt(product_id.id));

  return (
    <>
      <Navbar />
      {/* ===================================== */}
      <ProductDetails pid={product.id} name={product.name} old_price={product.old_price} new_price={product.new_price} image={product.image} category={product.category} />
      {/* ===================================== */}
      <br /><br />
      <h1>Releated Products</h1>
      <NewCollections />
      {/* ===================================== */}
      <Footer />
    </>
  )
}

export default Product
