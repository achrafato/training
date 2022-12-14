import "./Middle.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import SwiperCore, { Navigation, Parallax } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

const Configs = {
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: "auto"
};

const Middle = () => {
  SwiperCore.use([Navigation, Parallax]);

  return (
    <div className="middle">
      <Swiper {...Configs} className="stories">
        <SwiperSlide className="story">
          <img
            src="https://i.pinimg.com/736x/a5/22/85/a522850cf3a71d858cb382692a4b4bd7.jpg"
            alt=""
            className=""
          />
          <div className="content">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
              alt="pic"
              className="profile_pic"
            />
            <h4>name</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="story">
          <img
            src="https://i.pinimg.com/736x/a5/22/85/a522850cf3a71d858cb382692a4b4bd7.jpg"
            alt=""
            className=""
          />
          <div className="content">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
              alt="pic"
              className="profile_pic"
            />
            <h4>name</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="story">
          <img
            src="https://i.pinimg.com/736x/a5/22/85/a522850cf3a71d858cb382692a4b4bd7.jpg"
            alt=""
            className=""
          />
          <div className="content">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
              alt="pic"
              className="profile_pic"
            />
            <h4>name</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="story">
          <img
            src="https://i.pinimg.com/736x/a5/22/85/a522850cf3a71d858cb382692a4b4bd7.jpg"
            alt=""
            className=""
          />
          <div className="content">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
              alt="pic"
              className="profile_pic"
            />
            <h4>name</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="story">
          <img
            src="https://i.pinimg.com/736x/a5/22/85/a522850cf3a71d858cb382692a4b4bd7.jpg"
            alt=""
            className=""
          />
          <div className="content">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
              alt="pic"
              className="profile_pic"
            />
            <h4>name</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className="story">
          <img
            src="https://i.pinimg.com/736x/a5/22/85/a522850cf3a71d858cb382692a4b4bd7.jpg"
            alt=""
            className=""
          />
          <div className="content">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
              alt="pic"
              className="profile_pic"
            />
            <h4>name</h4>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="make_Post">
        <img
          src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
          alt=""
          className="profile_pic"
        />
        <input type="text" placeholder="what is on your mind ?" />
        <button>Post</button>
      </div>

      <div className="posts">
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
        <div className="post">
          <div className="top">
            <div className="user-top">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                alt="profile"
                class="profile_pic"
              />
              <div>
                <h4>Malik bery</h4>
                <small>@ana</small>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <img
            src="https://images.unsplash.com/photo-1669865063337-fa6493400292"
            alt="lifelike"
            className="lifelike"
          />
          <div className="btn-control">
            <div className="main-control">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment-dots"></i>
              <i class="fa-solid fa-share-nodes"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
          </div>

          <div className="post-interaction">
            <div className="profile-icons">
              <img
                src="https://images.unsplash.com/photo-1557296387-5358ad7997bb"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1545996124-0501ebae84d0"
                alt=""
                className="profile_pic"
              />
              <img
                src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78"
                alt=""
                className="profile_pic"
              />
            </div>
            <p>
              like by <b>Hajua Bintu</b> and <b>16,204others</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
