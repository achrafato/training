import { useRef, useState } from "react";

import "./dynamicgrid.scss";

const DynamicGrid = () => {
  const [gridStyle, setGridStyle] = useState("checked");
  const refContainer = useRef();

  const handleClick1 = () => {
    setGridStyle("checked");
    refContainer.current.style["grid-template-columns"] =
      "repeat( auto-fit, minmax(300px,1fr))";
  };

  const handleClick2 = () => {
    console.log("fff");
    setGridStyle("listed");
    refContainer.current.style["grid-template-columns"] =
      "repeat( 1, minmax(300px,1fr))";
  };

  return (
    <section className="grid-section">
      <div className="grid-control">
        <i
          className={
            gridStyle === "checked"
              ? "fa-solid fa-grip-vertical active"
              : "fa-solid fa-grip-vertical"
          }
          onClick={() => handleClick1()}
        ></i>
        <i
          className={
            gridStyle === "listed"
              ? "fa-solid fa-list active"
              : "fa-solid fa-list"
          }
          onClick={() => handleClick2()}
        ></i>
      </div>

      <div className="container" ref={refContainer}>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>
        <div className="grid-box">
          <h1>grid box</h1>
          <p>
            lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <div></div>
        </div>       
      </div>
    </section>
  );
};

export default DynamicGrid;
