import React from "react";
import useScript from "../commonFunction/ReloadJs";

function mission() {
  useScript("/assets/js/main.min.js");
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">Our Mission and Vision</h1>
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
            <li>Our Mission and Vision</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}
      {/* Start of Page Content */}
      <div className="page-content">
        <div className="container">
          <section className="customer-service mb-7">
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
          </section>
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
                    <span>$</span>
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
                <p className="mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis tellus
                  in. metus vulputate eu scelerisque felis. Vel pretium lectus qua . Arpis massa. Nunc id cursus metus ididunt ut labore metus vulputate
                  episcing.
                </p>
                <a href="#" className="btn btn-dark btn-rounded">
                  Visit Our Store
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="page-wrapper">
        <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>
        <main className="main">
          <div className="page-content">
            <div className="banner coming-soon-bg">
              <div className="coming-content-wrapper d-flex align-items-center justify-content-end pl-sm-4 pr-sm-4">
                <div className="coming-content">
                  <a href="demo1.html" className="logo">
                    <img src="assets/images/pages/coming/logo.png" alt="Logo" width={168} height={53} />
                  </a>
                  <h2 className="coming-title ls-25">
                    Coming <span>Soon...</span>
                  </h2>
                  <p>
                    We are currently working on an awesome new site. Stay tuned for more information. Subscribe to our newsletter to stay updated on our
                    progress.
                  </p>
                  <div className="countdown countdown-coming" data-until="+10d" data-format="DHMS" data-relative="true">
                    10:00:00
                  </div>
                  <div className="social-icons social-icons-colored">
                    <a href="#" className="social-icon social-facebook w-icon-facebook" />
                    <a href="#" className="social-icon social-twitter w-icon-twitter" />
                    <a href="#" className="social-icon social-instagram w-icon-instagram" />
                    <a href="#" className="social-icon social-youtube w-icon-youtube" />
                    <a href="#" className="social-icon social-pinterest w-icon-pinterest" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default mission;
