import "./adminPage.scss";
import {
  AiFillApple,
  AiFillHome,
  AiFillSetting,
  AiFillLock,
  AiOutlineMenu,
  AiOutlineEye
} from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiMessageRounded, BiHelpCircle, BiConfused } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import { useState, useRef } from "react";

const AdminPage = () => {
  const [menu, setMenu] = useState(false);
  const sideBarRef = useRef();

  const handleClick = () => {
    sideBarRef.current.classList.toggle("shrink");
    setMenu(!menu);
  };
  return (
    <section>
      <div className="pageContainer">
        <div className="sidebar" ref={sideBarRef}>
          <div className="headTitle">
            <AiFillApple />
            <h1>Brand name</h1>
          </div>

          <div className="navItems">
            <ul>
              <li>
                <a href="#">
                  <AiFillHome />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <RiCustomerService2Fill />
                  <span>Customers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <BiMessageRounded />
                  <span>Messages</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <BiHelpCircle />
                  <span>Helps</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillSetting />
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillLock />
                  <span>Password</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoSignOut />
                  <span>Signout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={menu ? "mainpage shrink" : "mainpage"}>
          <div className="main-nav">
            <AiOutlineMenu onClick={handleClick} />
            <input type="text" placeholder="search" />
            <BiConfused />
          </div>

          <div className="main-cards">
            <div className="main-singleCard">
              <div className="contents">
                <h2>1,456</h2>
                <small>Daily views</small>
              </div>
              <AiOutlineEye />
            </div>
            <div className="main-singleCard">
              <div className="contents">
                <h2>1,456</h2>
                <small>Daily views</small>
              </div>
              <AiOutlineEye />
            </div>
            <div className="main-singleCard">
              <div className="contents">
                <h2>1,456</h2>
                <small>Daily views</small>
              </div>
              <AiOutlineEye />
            </div>
            <div className="main-singleCard">
              <div className="contents">
                <h2>1,456</h2>
                <small>Daily views</small>
              </div>
              <AiOutlineEye />
            </div>
          </div>

          <div className="main-data">
            <div className="left">
              <div className="left-head">
                <h2>Recents Orders</h2>
                <span>view all</span>
              </div>

              <div className="table">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Payment</th>
                    <th>Status</th>
                  </tr>

                  <tr>
                    <td>window coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>pending</td>
                  </tr>
                  <tr>
                    <td>window coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>pending</td>
                  </tr>
                  <tr>
                    <td>window coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>pending</td>
                  </tr>
                  <tr>
                    <td>window coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>pending</td>
                  </tr>
                  <tr>
                    <td>window coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>pending</td>
                  </tr>
                  <tr>
                    <td>window coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>pending</td>
                  </tr>
                  <tr>
                    <td>window coolers</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>pending</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="right">
              <div className="right-head">
                <h2>Recent Customers</h2>
              </div>

              <div className="listOfCustomers">
                <div className="singleCus">
                  <img
                    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                    alt="profilePic"
                  />
                  <div className="profile">
                    <h6>Dave</h6>
                    <small>kaly</small>
                  </div>
                </div>
                <div className="singleCus">
                  <img
                    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                    alt="profilePic"
                  />
                  <div className="profile">
                    <h6>Dave</h6>
                    <small>kaly</small>
                  </div>
                </div>
                <div className="singleCus">
                  <img
                    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                    alt="profilePic"
                  />
                  <div className="profile">
                    <h6>Dave</h6>
                    <small>kaly</small>
                  </div>
                </div>
                <div className="singleCus">
                  <img
                    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                    alt="profilePic"
                  />
                  <div className="profile">
                    <h6>Dave</h6>
                    <small>kaly</small>
                  </div>
                </div>
                <div className="singleCus">
                  <img
                    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                    alt="profilePic"
                  />
                  <div className="profile">
                    <h6>Dave</h6>
                    <small>kaly</small>
                  </div>
                </div>
                <div className="singleCus">
                  <img
                    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                    alt="profilePic"
                  />
                  <div className="profile">
                    <h6>Dave</h6>
                    <small>kaly</small>
                  </div>
                </div>
                <div className="singleCus">
                  <img
                    src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6"
                    alt="profilePic"
                  />
                  <div className="profile">
                    <h6>Dave</h6>
                    <small>kaly</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdminPage;
