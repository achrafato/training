import "./product.scss";
import { useCartContext } from "../../pages/products/context/cartContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState, useEffect } from "react";

const Product = ({ product }) => {
  const { dispatch, cart } = useCartContext();
  const [amount, setAmount] = useState(1);
  const [active, setActive] = useState(
    cart.find((car) => car.id === product.id) !== undefined
  );

  // return amount of the current Items every Time cart changed
  useEffect(() => {
    setActive(cart.find((car) => car.id === product.id) !== undefined);
    setAmount(cart.find((car) => car.id === product.id)?.amount || 1);
    // setAmount(...cart.map((car)=> car.id === product.id ? car.amount : null ).filter(Boolean))
  }, [cart]);

  //handle Increase
  const Increase = (id) => {
    dispatch({
      type: "increment",
      payload: { cart: { id }, amount: parseInt(amount) + 1 }
    });
  };

  // handle Decrease
  const Decrease = (id) => {
    if (amount > 1) {
      dispatch({
        type: "decrease",
        payload: { cart: { id }, amount: parseInt(amount) - 1 }
      });
    }
  };
  return (
    <div className="pro-bottom-single">
      <span className="single-company">{product.company}</span>
      <div className="img">
        <img src={product.image} alt="pic" />

        {!active ? (
          <span
            onClick={() => {
              dispatch({
                type: "add-to-cart",
                payload: { product, amount: 1 }
              });
            }}
          >
            Add To Cart
          </span>
        ) : (
          <div className="control-amount">
            <AiOutlinePlus onClick={() => Increase(product.id)} />
            <span>{amount}</span>
            <AiOutlineMinus onClick={() => Decrease(product.id)} />
          </div>
        )}
        {/* handle Click Button */}
        {/* { cart.length > 0 ?
          cart.map((car,index)=>{
            // if this item not in cart
            if(car.id !== product.id){
              return (<span key={index} onClick={() =>
                dispatch({ type: "add-to-cart", payload:{product,amount:1} }) 
                }>
              Add To Cart
              </span>)
            }else{
              return(
              <div key={index} className="control-amount">
                <AiOutlinePlus onClick={()=> Increase(product.id)}/>
                <span>{car.amount}</span>
                <AiOutlineMinus onClick={()=> Decrease(product.id)} />
              </div>)
            }
          })
          : <span onClick={() => dispatch({ type: "add-to-cart", payload:{product,amount:1} })}>
              Add To 1 Cart</span>
        } */}
        {/* handle Click Button */}
      </div>

      <div className="single-info">
        <h2 className="info-name">{product.name}</h2>
        <span className="info-price">{product.price}</span>
      </div>
    </div>
  );
};

export default Product;
