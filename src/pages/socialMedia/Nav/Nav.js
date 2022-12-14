import "./Nav.scss";

const Nav = () => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="logo">
          <h1>nokoSocial</h1>
        </div>

        <div className="searchBar">
          <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="search about ..." />
        </div>

        <div className="leftSide">
          <label className="btn">Create</label>
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
            alt="profile"
            className="profile_pic"
          />
        </div>
      </div>
    </section>
  );
};

export default Nav;
