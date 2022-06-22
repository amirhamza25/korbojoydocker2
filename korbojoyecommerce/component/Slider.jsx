import React, { useEffect, useState } from "react";

function Slider() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(process.env.API_URL + "/api/ev1/GetSlider")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div>
        <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css" />

        <link rel="stylesheet" type="text/css" href="assets/css/demo11.min.css" />
        <div className="page-wrapper">
          <main className="main shadow">
            <section className="intro-section">
              <div
                className="swiper-container swiper-theme nav-inner pg-inner swiper-nav-lg animation-slider pg-xxl-hide nav-xxl-show nav-hide"
                data-swiper-options="{
              'slidesPerView': 1,
              'autoplay': {
                  'delay': 8000,
                  'disableOnInteraction': false
              }
          }"
              >
                <div className="swiper-wrapper">
                  {users.map((item, index) => (
                    <div
                      key={index}
                      className="swiper-slide banner banner-fixed intro-slide intro-slide1"
                      style={{
                        backgroundImage: `url('${process.env.API_URL + "/upload/" + item.img}')`,
                        width: "100%",
                        height: "100%",

                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundColor: "#ebeef2",
                      }}
                    >
                      <div className="container">
                        <figure className="slide-image skrollable slide-animate"></figure>
                        <div className="banner-content y-50 text-right text-danger">
                          <h5
                            className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate text-danger"
                            data-animation-options="{
                              'name': 'fadeInRightShorter',
                              'duration': '1s',
                              'delay': '.2s'
                          }"
                          >
                            {item.title}
                          </h5>
                          <h3
                            className="banner-title font-weight-bolder ls-25 lh-1 slide-animate text-danger"
                            data-animation-options="{
                              'name': 'fadeInRightShorter',
                              'duration': '1s',
                              'delay': '.4s'
                          }"
                          >
                            RUNNING SHOES
                          </h3>
                          <p
                            className="font-weight-normal text-default slide-animate text-danger"
                            data-animation-options="{
                              'name': 'fadeInRightShorter',
                              'duration': '1s',
                              'delay': '.6s'
                          }"
                          >
                            {item.shortDiscription}
                            {/* Sale up to <span className="font-weight-bolder text-secondary"></span> */}
                          </p>
                          <a
                            className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
                            data-animation-options="{
                              'name': 'fadeInRightShorter',
                              'duration': '1s',
                              'delay': '.8s'
                          }"
                          >
                            SHOP NOW
                            <i className="w-icon-long-arrow-right" />
                          </a>
                        </div>
                        {/* End of .banner-content */}
                      </div>
                      ;{/* End of .container */}
                    </div>
                  ))}
                </div>

                <div className="swiper-pagination" />
                <button className="swiper-button-next" />
                <button className="swiper-button-prev" />
              </div>
              {/* End of .swiper-container */}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Slider;
