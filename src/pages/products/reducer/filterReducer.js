export const reducer = (state, action) => {
  switch (action.type) {
    case "load_states":
      //set max price
      let maxprods = [...action.payload];
      maxprods = maxprods.map((prod) => prod.price);
      maxprods = Math.max(...maxprods);

      return {
        ...state,
        filtered_Products: action.payload,
        genuine_Products: action.payload,
        filters: {
          ...state.filters,
          maxPrice: maxprods
        }
      };

    case "set_Sort":
      return {
        ...state,
        sort_val: action.payload
      };

    case "handle_sort":
      const { sort_val, filtered_Products } = state;
      let myList;

      const sortingProducts = (a, b) => {
        if (sort_val === "lowest") {
          return a.price - b.price;
        }

        if (sort_val === "highest") {
          return b.price - a.price;
        }

        if (sort_val === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sort_val === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      myList = filtered_Products.sort(sortingProducts);

      return {
        ...state,
        filtered_Products: myList
      };

    case "set_filter":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value
        }
      };

    case "handle_filter":
      const { genuine_Products } = state;
      let filteredProducts = [...genuine_Products];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        filteredProducts = filteredProducts.filter((pro) =>
          pro.name.toLowerCase().includes(text)
        );
      }

      if (category !== "all") {
        filteredProducts = filteredProducts.filter(
          (pro) => pro.category.toLowerCase() === category
        );
      }

      if (company !== "all") {
        filteredProducts = filteredProducts.filter(
          (pro) => pro.company.toLowerCase() === company
        );
      }

      if (color !== "all") {
        console.log(color);
        filteredProducts = filteredProducts.filter((pro) =>
          pro.colors.includes(color)
        );
      }

      if (price !== 0) {
        filteredProducts = filteredProducts.filter((pro) => pro.price <= price);
      }

      return {
        ...state,
        filtered_Products: filteredProducts
      };

    case "clear_filter":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: state.filters.maxPrice
        }
      };

    default:
      return state;
  }
};
