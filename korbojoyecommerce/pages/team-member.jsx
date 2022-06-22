import React from "react";
import useScript from "../commonFunction/ReloadJs";
function TeamMember() {
  useScript("/assets/js/main.min.js");
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">Team Member</h1>
        </div>
      </div>
      {/* End of Page Header */}
      {/* Start of Breadcrumb */}
      <nav className="breadcrumb-nav mb-10 pb-8">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="demo1.html">Home</a>
            </li>
            <li>Team Member</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}
      {/* Start of Page Content */}
      <div className="page-content">
        <div className="container">
          <section className="member-section mt-10 pt-9 mb-10 pb-4">
            <div className="container">
              <h4 className="title title-center mb-3">Meet Our Leaders</h4>
              <p className="text-center mb-8">
                Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam maecenas ultricies mi eget mauris. Volutpat ac
              </p>
              <div
                className="swiper-container swiper-theme swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 1,
                      'breakpoints': {
                          '576': {
                              'slidesPerView': 2
                          },
                          '768': {
                              'slidesPerView': 3
                          },
                          '992': {
                              'slidesPerView': 4
                          }
                      }
                  }"
              >
                <div className="swiper-wrapper " id="swiper-wrapper-bd3a2e23dabe8b80" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                  <div className="swiper-slide member-wrap swiper-slide-active" role="group" aria-label="1 / 4" style={{ width: 295, marginRight: 20 }}>
                    <figure className="br-lg">
                      <img src="assets/images/pages/about_us/4.jpg" alt="Member" width={295} height={332} />
                      <div className="overlay">
                        <div className="social-icons">
                          <a href="#" className="social-icon social-facebook w-icon-facebook" />
                          <a href="#" className="social-icon social-twitter w-icon-twitter" />
                          <a href="#" className="social-icon social-instagram w-icon-instagram" />
                        </div>
                      </div>
                    </figure>
                    <div className="member-info text-center">
                      <h4 className="member-name">John Doe</h4>
                      <p className="text-uppercase">Founder &amp; CEO</p>
                    </div>
                  </div>
                  <div className="swiper-slide member-wrap swiper-slide-next" role="group" aria-label="2 / 4" style={{ width: 295, marginRight: 20 }}>
                    <figure className="br-lg">
                      <img src="assets/images/pages/about_us/5.jpg" alt="Member" width={295} height={332} />
                      <div className="overlay">
                        <div className="social-icons">
                          <a href="#" className="social-icon social-facebook w-icon-facebook" />
                          <a href="#" className="social-icon social-twitter w-icon-twitter" />
                          <a href="#" className="social-icon social-instagram w-icon-instagram" />
                        </div>
                      </div>
                    </figure>
                    <div className="member-info text-center">
                      <h4 className="member-name">Jessica Doe</h4>
                      <p className="text-uppercase">Marketing</p>
                    </div>
                  </div>
                  <div className="swiper-slide member-wrap" role="group" aria-label="3 / 4" style={{ width: 295, marginRight: 20 }}>
                    <figure className="br-lg">
                      <img src="assets/images/pages/about_us/6.jpg" alt="Member" width={295} height={332} />
                      <div className="overlay">
                        <div className="social-icons">
                          <a href="#" className="social-icon social-facebook w-icon-facebook" />
                          <a href="#" className="social-icon social-twitter w-icon-twitter" />
                          <a href="#" className="social-icon social-instagram w-icon-instagram" />
                        </div>
                      </div>
                    </figure>
                    <div className="member-info text-center">
                      <h4 className="member-name">Rick Edward Doe</h4>
                      <p className="text-uppercase">Developer</p>
                    </div>
                  </div>
                  <div className="swiper-slide member-wrap" role="group" aria-label="4 / 4" style={{ width: 295, marginRight: 20 }}>
                    <figure className="br-lg">
                      <img src="assets/images/pages/about_us/7.jpg" alt="Member" width={295} height={332} />
                      <div className="overlay">
                        <div className="social-icons">
                          <a href="#" className="social-icon social-facebook w-icon-facebook" />
                          <a href="#" className="social-icon social-twitter w-icon-twitter" />
                          <a href="#" className="social-icon social-instagram w-icon-instagram" />
                        </div>
                      </div>
                    </figure>
                    <div className="member-info text-center">
                      <h4 className="member-name">Melinda Wolosky</h4>
                      <p className="text-uppercase">Design</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" style={{ display: "none" }}>
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" />
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
