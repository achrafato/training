import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu
} from "react-icons/ai";
import "./nav.scss";
import { useState } from "react";
import { useCartContext } from "../../pages/products/context/cartContext";

import Cart from "../Cart/Cart";

const Nav = () => {
  const [activeState, setActive] = useState(false);

  const handleMenuAppearnce = () => {
    setActive(!activeState);
  };

  const {
    cart,
    total_Items,
    total_Price,
    isCartSlider,
    dispatch
  } = useCartContext();
  return (
    <section className="nav-pro">
      <div className="container">
        <div className="logo-n">
          <h1>thapa</h1>
          <span>store</span>
        </div>

        <div className={activeState ? "ul-list showup" : "ul-list"}>
          <AiOutlineClose className="close" onClick={handleMenuAppearnce} />
          <ul>
            <li>home</li>
            <li>about</li>
            <li>product</li>
            <li>contact</li>
          </ul>

          <div className="cart">
            <AiOutlineShoppingCart
              onClick={() => dispatch({ type: "switch-cart-slider" })}
            />
            <span>{total_Items}</span>
          </div>
        </div>

        <AiOutlineMenu className="menu-pro" onClick={handleMenuAppearnce} />
      </div>

      {/* *****************Start card************ */}
      <div className={isCartSlider ? "cards active" : "cards"}>
        <div className="cards-heading">
          <h2>Shopping Cart</h2>
          <AiOutlineClose
            onClick={() => dispatch({ type: "switch-cart-slider" })}
          />
        </div>

        {/* loop on Cart list */}
        <div className="cards-list">
          {cart.length > 0 &&
            cart.map((car, index) => <Cart key={index} car={car} />)}
        </div>

        <div className="cart-info">
          <span>Items: {total_Items}</span>
          <span>Total Price: {total_Price}</span>
        </div>
        <button className={isCartSlider ? "btn-cart active" : "btn-cart"}>
          Go to Cart
        </button>
      </div>
      {/* *****************end card************ */}
    </section>
  );
};
export default Nav;
