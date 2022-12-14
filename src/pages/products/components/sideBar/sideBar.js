import "./sideBar.scss";

import { useProductContext } from "../../context/productContext";
import { useFilterContext } from "../../context/filterContext";

const Sidebar = () => {
  const {
    state: { products }
  } = useProductContext();

  const { dispatch, state } = useFilterContext();
  const { category, price, color, maxPrice } = state.filters;

  const CleanList = (name) => {
    let newList = products.map((prod) => prod[name]);

    if (name === "colors") {
      newList = newList.flat();
    }

    return ["all", ...new Set(newList)];
  };

  const categories = CleanList("category");
  const comapanies = CleanList("company");
  const colors = CleanList("colors");

  const handleSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({
      type: "set_filter",
      payload: { name, value }
    });
    console.log({ [e.target.name]: e.target.value });
  };

  const handleFilter = () => {
    dispatch({ type: "clear_filter" });
  };

  return (
    <div className="sideBar-pro">
      <input
        type="text"
        name="text"
        onChange={handleSort}
        placeholder="search"
      />

      <div className="filter-control">
        <div className="category">
          <h2>Category</h2>

          <div className="single-cat">
            {
              //className='active'
              categories.length > 0 &&
                categories.map((cat,index) => (
                  <button
                    key={index}
                    className={cat === category ? "active" : ""}
                    onClick={handleSort}
                    name="category"
                    value={cat}
                  >
                    {cat}
                  </button>
                ))
            }
          </div>
        </div>

        <div className="company">
          <h2>Company</h2>

          <select onClick={handleSort} name="company">
            {comapanies.length > 0 &&
              comapanies.map((comp,index) => <option key={index} value={comp}>{comp}</option>)}
          </select>
        </div>

        <div className="colors">
          <h2>Colors</h2>

          <div className="bunch-colors">
            {
              //className="active"
              colors.length > 0 &&
                colors.map((clr) =>
                  clr === "all" ? (
                    <button
                      key={clr}
                      onClick={handleSort}
                      name="color"
                      value={clr}
                      className={clr === color ? "active" : ""}
                    >
                      {clr}
                    </button>
                  ) : (
                    <button
                      key={clr}
                      onClick={handleSort}
                      name="color"
                      value={clr}
                      style={{ backgroundColor: clr }}
                      className={clr === color ? "active" : ""}
                    ></button>
                  )
                )
            }
          </div>
        </div>

        <div className="price">
          <h2>{price}</h2>
          <input
            type="range"
            name="price"
            value={price}
            min="0"
            max={maxPrice}
            onChange={handleSort}
          />
        </div>

        <button onClick={handleFilter}>Clear Filter</button>
      </div>
    </div>
  );
};

export default Sidebar;
