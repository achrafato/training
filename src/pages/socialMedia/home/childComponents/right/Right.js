import "./Right.scss";

const Right = () => {
  return (
    <div className="right-container">
      <div className="top">
        <h1>Message</h1>
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </div>

      <div className="search">
        <i class="fa-sharp fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="search" />
      </div>

      <div className="sections">
        <h2>primary</h2>
        <h2>general</h2>
        <h2>requests(3)</h2>
      </div>
    </div>
  );
};

export default Right;
