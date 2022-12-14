import "./home.scss";
import Left from "./childComponents/left/Left";
import Middle from "./childComponents/middle/Middle";
import Right from "./childComponents/right/Right";

const Home = () => {
  return (
    <section className="home-social">
      <div className="container">
        <Left />
        <Middle />
        <Right />
      </div>
    </section>
  );
};

export default Home;
