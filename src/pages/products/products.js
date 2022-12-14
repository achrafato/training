import Nav from "../../components/navProduct/Nav";
import Sidebar from "./components/sideBar/sideBar";
import Main from "./components/Content/main";
import "./products.scss";

//provider
import AppProvider from "./context/productContext";
import FilterProvider from "./context/filterContext";
import { CartProvider } from "./context/cartContext";

const Products = () => {
  return (
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <Nav />
          <section className="products-comp">
            <div className="container">
              <Sidebar />
              <Main />
            </div>
          </section>
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  );
};
export default Products;
