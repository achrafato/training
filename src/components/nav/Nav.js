import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="#">
          <span>Holux</span>
          <i class="fa-solid fa-house"></i>
        </a>
      </div>

      <div className="nav-items">
        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Teachers</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <i class="fa-solid fa-moon"></i>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Nav;
