import "./main.scss";
import { BsGridFill, BsList } from "react-icons/bs";
import Product from "../../../../components/product/product";

import { useProductContext } from "../../context/productContext";
import { useFilterContext } from "../../context/filterContext";

const Main = () => {
  const {
    state: { isLoading }
  } = useProductContext();

  const {
    state: { filtered_Products },
    dispatch
  } = useFilterContext();

  //handle Select Click
  const handleSort = (e) => {
    dispatch({
      type: "set_Sort",
      payload: e.target.value
    });
  };

  return (
    <div className="main-pro">
      {/* *********start-top**** */}
      <div className="main-pro-top">
        <div className="control-grid">
          <BsGridFill className="active" />
          <BsList />
        </div>

        <div className="lenght-pro">
          {filtered_Products.length} products available
        </div>

        <select name="sort" onChange={handleSort}>
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">alphabet(a-z)</option>
          <option value="z-a">alphabet(z-a)</option>
        </select>
      </div>
      {/* *********end-top**** */}

      {/* *********start-bottom**** */}

      <div className="main-pro-bottom">
        {isLoading
          ? "...loading"
          : filtered_Products.length > 0
          ? filtered_Products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : "Empty List"}
      </div>
      {/* *********end-bottom**** */}
    </div>
  );
};

export default Main;
