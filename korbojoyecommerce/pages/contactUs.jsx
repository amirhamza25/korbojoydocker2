import React from "react";
import useScript from "../commonFunction/ReloadJs";
function aboutUs() {
  useScript("/assets/js/main.min.js");
  return (
    <div>
      {/* Start of Main */}
      <main className="main">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">Contact Us</h1>
          </div>
        </div>
        {/* End of Page Header */}
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav mb-10 pb-1">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of PageContent */}
        <div className="page-content contact-us">
          <div className="container">
            <section className="content-title-section mb-10">
              <h3 className="title title-center mb-3">Contact Information</h3>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </section>
            {/* End of Contact Title Section */}
            <section className="contact-information-section mb-10">
              <div
                className=" swiper-container swiper-theme "
                data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 1,
                      'breakpoints': {
                          '480': {
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
                <div className="swiper-wrapper row cols-xl-4 cols-md-4 cols-sm-2 cols-1">
                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-email">
                      <i className="w-icon-envelop-closed" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">E-mail Address</h4>
                      <p>mail@example.com</p>
                    </div>
                  </div>
                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-headphone">
                      <i className="w-icon-headphone" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Phone Number</h4>
                      <p>(123) 456-7890 / (123) 456-9870</p>
                    </div>
                  </div>
                  <div className="swiper-slide icon-box text-center icon-box-primary">
                    <span className="icon-box-icon icon-map-marker">
                      <i className="w-icon-map-marker" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">Address</h4>
                      <p>101/B Chowdhuripara, Malibagh 1219, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End of Contact Information section */}
            <hr className="divider mb-10 pb-1" />

            {/* End of Contact Section */}
          </div>

          <div className="google-map contact-google-map" id="googlemaps" />
          {/* End Map Section */}
        </div>
        {/* End of PageContent */}
      </main>
      {/* End of Main */}
    </div>
  );
}

export default aboutUs;
