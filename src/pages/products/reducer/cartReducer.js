export const reducer = (state, action) => {
  switch (action.type) {
    case "switch-cart-slider":
      return {
        ...state,
        isCartSlider: !state.isCartSlider
      };

    case "add-to-cart":
      const { cart } = state;
      const {
        product: { id },
        product,
        amount
      } = action.payload;

      let newItem;
      let isExist = cart.filter((cat) => cat.id === id);

      if (isExist) {
        const withoutNewOne = cart.filter((car) => car.id !== id);
        return {
          ...state,
          cart: [...withoutNewOne, { ...product, amount }]
        };
      } else {
        newItem = {
          ...product,
          amount
        };
      }

      return {
        ...state,
        cart: [...state.cart, newItem]
      };

    case "increment": {
      const {
        cart: { id },
        amount
      } = action.payload;
      const { cart } = state; //amount

      let MyItem = cart.filter((car) => car.id === id);

      //price = totalPice / amount - 1 * amount
      MyItem = { ...MyItem[0], amount };

      let myNewCart = cart.map((car) => (car.id === id ? MyItem : car));
      return {
        ...state,
        cart: [...myNewCart]
      };
    }

    case "decrease": {
      const {
        cart: { id },
        amount
      } = action.payload;
      const { cart } = state;

      let MyItem = cart.filter((car) => car.id === id);

      MyItem = { ...MyItem[0], amount };

      let myNewCart = cart.map((car) => (car.id === id ? MyItem : car));
      return {
        ...state,
        cart: [...myNewCart]
      };
    }

    case "cart_total_items": {
      const Total = state.cart.reduce((initialVal, current) => {
        const { amount } = current;

        initialVal = initialVal + amount;

        return initialVal;
      }, 0);
      return {
        ...state,
        total_Items: Total
      };
    }

    case "cart_total_price": {
      const Total = state.cart.reduce((initialVal, current) => {
        const { price, amount } = current;

        initialVal = initialVal + amount * price;

        return initialVal;
      }, 0);
      return {
        ...state,
        total_Price: Total
      };
    }

    case "remove-From-cart": {
      const id = action.payload;
      const { cart } = state;

      let myNewCart = cart.filter((car) => car.id !== id);
      return {
        ...state,
        cart: [...myNewCart]
      };
    }

    default:
      return state;
  }
};
