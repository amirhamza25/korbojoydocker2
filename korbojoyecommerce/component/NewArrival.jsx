import React from "react";

function NewArrival() {
  const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  return (
    <div className="container mt-5">
      <h2 className="title title-underline mb-4 ls-normal appear-animate"> NewArrival</h2>
      <div
        className="swiper-container swiper-theme brands-wrapper mb-9 appear-animate"
        data-swiper-options="{
              'spaceBetween': 0,
              'slidesPerView': 2,
              'breakpoints': {
                  '576': {
                      'slidesPerView': 3
                  },
                  '768': {
                      'slidesPerView': 4
                  },
                  '992': {
                      'slidesPerView': 5
                  },
                  '1200': {
                      'slidesPerView': 6
                  }
              }
          }"
      >
        <div className="swiper-wrapper row gutter-no cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
          {arr.map((item, index) => (
            <div key={index} className="swiper-slide brand-col">
              <figure className="brand-wrapper">
                <img src="assets/images/demos/demo1/brands/1.png" alt="Brand" width={410} height={186} />
              </figure>
              {/* <figure className="brand-wrapper">
                <img src="assets/images/demos/demo1/brands/2.png" alt="Brand" width={410} height={186} />
              </figure> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
