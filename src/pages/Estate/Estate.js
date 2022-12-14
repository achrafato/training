import Nav from "../../components/nav/Nav";
import Home from "../../components/Home/Home";
import Residence from "../../components/Residence/Residence";
import Values from "../../components/Values/Values";
import Contact from "../../components/Contact/Contact";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";
import Conta from "../../components/conta/Conta";
import Citys from "../../components/Citys/Citys";
import Animation from "../../components/Animation/Animation";
import Hierarchy from "../../components/Hierarchy/Hierarchy";
import DynamicGrid from "../../components/DynamicGrid/DynamicGrid";
import DivFlow from "../../components/DivFlow/DivFlow";

const Estate = () => {
  return (
    <>
      <Nav />
      <Home />
      <Residence />
      <Values />
      <Contact />
      <Conta />
      <Citys />
      {/* <Animation /> */}
      <Hierarchy />
      <DynamicGrid />
      <DivFlow />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Estate;
