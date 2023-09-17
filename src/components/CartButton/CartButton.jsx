import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './CartButton.css';

function CartButton() {
  return (
    <button type="button" className="cart__button">
      <AiOutlineShoppingCart />
      <span className="cart-status"></span>
    </button>
  );
}

export default CartButton;
