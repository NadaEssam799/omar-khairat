import classes from "../styles/gallery.module.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function GalleryComponent() {
  let [activeTab, setActiveTab] = useState("videography");
  function handleActiveTab(tab) {
    setActiveTab(tab);
  }
  return (
    <div className="container">
      <h1 className={classes.gallery}>Gallery</h1>
      <div className="row">
        <ul className={classes.list}>
          <li
            onClick={() => handleActiveTab("videography")}
            className={activeTab === "videography" ? classes.active : ""}>
            videography
          </li>
          <li
            onClick={() => handleActiveTab("photography")}
            className={activeTab === "photography" ? classes.active : ""}>
            photography
          </li>
          <li
            onClick={() => handleActiveTab("awards")}
            className={activeTab === "awards" ? classes.active : ""}>
            awards
          </li>
          <li
            onClick={() => handleActiveTab("bts")}
            className={activeTab === "bts" ? classes.active : ""}>
            behind the scenes
          </li>
        </ul>
      </div>
      <div className={classes.swiper}>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          className={classes.mySwiper} >
          <SwiperSlide>
            <div className={classes.imgwrapper}>
              <div className={classes.hover}>
                <img
                  className={classes.swipeImage}
                  src={require("../images/Party.jpg")} alt=""/>
                <img
                  className={classes.play}
                  src={require("../images/play.png")} alt=""/>
                <p className={classes.slidetext}>Qadyet Am Ahmad 1</p>
                <div className={classes.undetext}>
                  <div>
                    <p>Cairo opera house</p>
                  </div>
                  <div>
                    <p>05.2022</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.imgwrapper}>
              <div className={classes.hover}>
                <img
                  className={classes.swipeImage}
                  src={require("../images/Party.jpg")}
                  alt=""
                />
                <img
                  className={classes.play}
                  src={require("../images/play.png")}
                  alt=""
                />
                <p className={classes.slidetext}>Qadyet Am Ahmad 1</p>
                <div className={classes.undetext}>
                  <div>
                    <p>Cairo opera house</p>
                  </div>
                  <div>
                    <p>05.2022</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.imgwrapper}>
              <div className={classes.hover}>
                <img
                  className={classes.swipeImage}
                  src={require("../images/Party.jpg")}
                  alt=""
                />
                <img
                  className={classes.play}
                  src={require("../images/play.png")}
                  alt=""
                />
                <p className={classes.slidetext}>Qadyet Am Ahmad 1</p>
                <div className={classes.undetext}>
                  <div>
                    <p>Cairo opera house</p>
                  </div>
                  <div>
                    <p>05.2022</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.imgwrapper}>
              <div className={classes.hover}>
                <img
                  className={classes.swipeImage}
                  src={require("../images/Party.jpg")}
                  alt=""
                />
                <img
                  className={classes.play}
                  src={require("../images/play.png")}
                  alt=""
                />
                <p className={classes.slidetext}>Qadyet Am Ahmad 1</p>
                <div className={classes.undetext}>
                  <div>
                    <p>Cairo opera house</p>
                  </div>
                  <div>
                    <p>05.2022</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.imgwrapper}>
              <div className={classes.hover}>
                <img
                  className={classes.swipeImage}
                  src={require("../images/Party.jpg")}
                  alt=""
                />
                <img
                  className={classes.play}
                  src={require("../images/play.png")}
                  alt=""
                />
                <p className={classes.slidetext}>Qadyet Am Ahmad 1</p>
                <div className={classes.undetext}>
                  <div>
                    <p>Cairo opera house</p>
                  </div>
                  <div>
                    <p>05.2022</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={classes.allvideos}>
        <p>see all videos</p>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      ></link>
    </div>
  );
}
export default GalleryComponent;
