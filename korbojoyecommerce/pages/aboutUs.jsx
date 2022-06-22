import React from "react";
import useScript from "../commonFunction/ReloadJs";
function aboutUs() {
  useScript("/assets/js/main.min.js");
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">About Us</h1>
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
            <li>About Us</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}
      {/* Start of Page Content */}
      <div className="page-content">
        <div className="container">
          <section className="introduce mb-10 pb-10">
            <h2 className="title title-center">
              Welcome To korbojoy
              <br />
            </h2>
            <p className=" mx-auto text-center">
              korbojoy is a Professional eCommerce Platform. Here we will provide you with only interesting products, which you will like very much. We're
              dedicated to providing you the best of eCommerce, with a focus on dependability and shopping. We're working to turn our passion for eCommerce into
              a booming online website. We hope you enjoy our eCommerce as much as we enjoy offering them to you. I will keep posting more important posts on my
              Website for all of you. Please give your support and love.
            </p>
          </section>
          {/* <section className="customer-service mb-7">
            <div className="row align-items-center">
              <div className="col-md-6 pr-lg-8 mb-8">
                <h2 className="title text-left">We Provide Continuous &amp; Kind Service for Customers</h2>
                <div className="accordion accordion-simple accordion-plus">
                  <div className="card border-no">
                    <div className="card-header">
                      <a href="#collapse3-1" className="collapse">
                        Customer Service
                      </a>
                    </div>
                    <div className="card-body expanded" id="collapse3-1">
                      <p className="mb-0">
                        Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.
                        Venenatis tell us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a href="#collapse3-2" className="expand">
                        Online Consultation
                      </a>
                    </div>
                    <div className="card-body collapsed" id="collapse3-2">
                      <p className="mb-0">
                        Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.
                        Venenatis tell us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a href="#collapse3-3" className="expand">
                        Sales Management
                      </a>
                    </div>
                    <div className="card-body collapsed" id="collapse3-3">
                      <p className="mb-0">
                        Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua.
                        Venenatis tell us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-8">
                <figure className="br-lg">
                  <img src="assets/images/pages/about_us/2.jpg" alt="Banner" width={610} height={500} style={{ backgroundColor: "#CECECC" }} />
                </figure>
              </div>
            </div>
          </section> */}
          <section className="count-section mb-10 pb-5">
            <div
              className="swiper-container swiper-theme"
              data-swiper-options="{
                      'slidesPerView': 1,
                      'breakpoints': {
                          '768': {
                              'slidesPerView': 2
                          },
                          '992': {
                              'slidesPerView': 3
                          }
                      }
                  }"
            >
              <div className="swiper-wrapper row cols-lg-3 cols-md-2 cols-1">
                <div className="swiper-slide counter-wrap">
                  <div className="counter text-center">
                    <span className="count-to" data-to={15}>
                      0
                    </span>
                    <span>M+</span>
                    <h4 className="title title-center">Products For Sale</h4>
                    <p>
                      Diam maecenas ultricies mi eget mauris
                      <br />
                      Nibh tellus molestie nunc non
                    </p>
                  </div>
                </div>
                <div className="swiper-slide counter-wrap">
                  <div className="counter text-center">
                    <span>৳</span>
                    <span className="count-to" data-to={25}>
                      0
                    </span>
                    <span>B+</span>
                    <h4 className="title title-center">Community Earnings</h4>
                    <p>
                      Diam maecenas ultricies mi eget mauris
                      <br />
                      Nibh tellus molestie nunc non
                    </p>
                  </div>
                </div>
                <div className="swiper-slide counter-wrap">
                  <div className="counter text-center">
                    <span className="count-to" data-to={100}>
                      0
                    </span>
                    <span>M+</span>
                    <h4 className="title title-center">Growing Buyers</h4>
                    <p>
                      Diam maecenas ultricies mi eget mauris
                      <br />
                      Nibh tellus molestie nunc non
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </section>
        </div>
        <section className="boost-section pt-10 pb-10">
          <div className="container mt-10 mb-9">
            <div className="row align-items-center mb-10">
              <div className="col-md-6 mb-8">
                <figure className="br-lg">
                  <img src="assets/images/pages/about_us/3.jpg" alt="Banner" width={610} height={450} style={{ backgroundColor: "#9E9DA2" }} />
                </figure>
              </div>
              <div className="col-md-6 pl-lg-8 mb-8">
                <h4 className="title text-left">We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential</h4>
                <p className="mb-6">I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                <a href="#" className="btn btn-dark btn-rounded">
                  Visit Our Store
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default aboutUs;
