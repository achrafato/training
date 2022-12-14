import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer/filterReducer";
import { useProductContext } from "./productContext";

const FilterContext = createContext();

const initialState = {
  filtered_Products: [],
  genuine_Products: [],
  sort_val: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 6000000,
    maxPrice: 0
  }
};

const FilterProvider = ({ children }) => {
  const {
    state: { products }
  } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //handle sort & filter
  useEffect(() => {
    dispatch({ type: "handle_filter" });
    dispatch({ type: "handle_sort" });
  }, [state.sort_val, state.filters]);

  useEffect(() => {
    dispatch({ type: "load_states", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

export const useFilterContext = () => {
  return useContext(FilterContext);
};
