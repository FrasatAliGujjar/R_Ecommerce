import React from 'react'
import "../Footer/Footer.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Card className="text-center footer-main">
        <Card.Header className='footer-header'>Amazon</Card.Header>
        <Card.Body className='footer-cart-boy'>
          <Card.Title>Best Products are available Here!</Card.Title>
          <Card.Text>
            You can find the best products here, with great deals and offers just for you. Explore our wide range of categories and make the most of your shopping experience.
          </Card.Text>
          {/* =============================== */}
          <Button className='footer-btn' onClick={window.scrollTo(0, 0)}>Back</Button>
          {/* =============================== */}
        </Card.Body>
        <Card.Footer className="text-muted">&copy; CopyRights reserved by Frasat Ali | 2024</Card.Footer>
      </Card>

    </div>
  )
}

export default Footer