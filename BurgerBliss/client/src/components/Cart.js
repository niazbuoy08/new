import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cart/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.length === 0 && <li>Your cart is empty.</li>}
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
