import "./Left.scss";

const Left = () => {
  return (
    <div className="sideBar">
      <div className="profile-info">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
          alt="pic"
          className="profile_pic"
        />
        <div>
          <h1>Diana ayi</h1>
          <small>@ayi</small>
        </div>
      </div>

      <div className="home-menu">
        <a href="#">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </a>
        <a href="#">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </a>
        <a href="#">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </a>
        <a href="#">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </a>
        <a href="#">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </a>
        <a href="#">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </a>
        <a href="#">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </a>
        <a href="#">
          <i class="fa-solid fa-house-user"></i>
          <span>Home</span>
        </a>

      </div>

      <button className="btn">Create post</button>
    </div>
  );
};

export default Left;
