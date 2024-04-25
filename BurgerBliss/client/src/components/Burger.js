import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Burger({ burger }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("mini");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const item = {
      id: burger.id,
      name: burger.name,
      image: burger.image,
      variant: variant,
      quantity: Number(quantity),
      price: burger.prices[0][variant],
    };
    dispatch(addToCart(item));
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div className="burger-card shadow-lg p-3 mb-5 bg-white rounded">
      {/* Clickable image to show details in a modal */}
      <div onClick={handleShow} className="burger-image-container">
        <img
          src={burger.image}
          className="img-fluid burger-image"
          alt={burger.name}
        />
      </div>

      {/* Burger name and details */}
      <div className="burger-details">
        <h1 className="burger-name">{burger.name}</h1>
        <div className="flex-container">
          <h3 className="price">BDT {burger.prices[0][variant]}</h3>
          <button className="btn add-to-cart-button" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>

      {/* Modal for additional burger details */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{burger.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={burger.image} className="img-fluid" alt={burger.name} />
          {/* Add burger.description or other details here */}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
