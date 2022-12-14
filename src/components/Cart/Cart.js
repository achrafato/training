import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState, useEffect } from "react";

import { useCartContext } from "../../pages/products/context/cartContext";

const Cart = ({ car }) => {
  const { dispatch, cart } = useCartContext();
  const [amount, setAmount] = useState(
    cart.find((ca) => ca.id === car.id)?.amount || 1
  );

  //set a value of amount reltated to this cart
  useEffect(() => {
    setAmount(cart.find((ca) => ca.id === car.id)?.amount || 1);
  }, [cart]);

  //increase Amount
  const Increase = (cart) => {
    setAmount(() => amount + 1);

    dispatch({ type: "increment", payload: { cart, amount: amount + 1 } });
  };

  //decrease Amount
  const Decrease = (cart) => {
    if (amount > 1) {
      setAmount(() => amount - 1);
      dispatch({ type: "decrease", payload: { cart, amount: amount - 1 } });
    }
  };

  //remove item from Cart
  const removeCart = (cart) => {
    dispatch({ type: "remove-From-cart", payload: cart.id });
  };
  return (
    <div className="list-item">
      <div className="item-info">
        <img src={car.image} alt="pic" />
        <div>
          <h3>{car.name}</h3>
          <span>{car.price}</span>
        </div>
      </div>
      <div className="control-amount">
        <AiOutlinePlus onClick={() => Increase(car)} />
        <span>{amount}</span>
        <AiOutlineMinus onClick={() => Decrease(car)} />
      </div>
      <div className="Delete">
        <AiFillDelete onClick={() => removeCart(car)} />
      </div>
    </div>
  );
};
export default Cart;
