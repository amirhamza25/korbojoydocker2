import axios from "axios";
import Link from "next/link";
import React from "react";
import useScript from "../commonFunction/ReloadJs";

function outlet(props) {
  useScript("/assets/js/main.min.js");

  return (
    <div className="container">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">Our Outlet</h1>
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
            <li>Our Outlet</li>
          </ul>
        </div>
      </nav>
      <section className="vendor-banner-section mb-10 mb-lg-7">
        <div
          className="swiper-container swiper-theme show-code-action"
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
          <div className="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1">
            {props.outlet.map((item, index) => (
              <div key={index} className="swiper-slide vendor-widget">
                <div className="vendor-widget-banner" style={{ height: "300px" }}>
                  <figure className="vendor-banner" style={{ height: "200px" }}>
                    <Link href="/outlet/[outletId]" as={`/outlet/${item.id}`}>
                      <a>
                        <img src={process.env.API_URL + "/upload/" + JSON.parse(item.img)} alt="Product" style={{ height: "200px", objectFit: "fill" }} />
                      </a>
                    </Link>
                  </figure>
                  <div className="">
                    <div className="vendor-personal">
                      <h5 className="text-center" style={{ text: "center" }}>
                        {item.name}
                      </h5>

                      <h4 className="ms-2 text-center">{item.email}</h4>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{ width: "100%" }} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                      </div>
                      <span className="vendor-product-count">27 Products</span>
                    </div>
                  </div>
                </div>
                {/* End of Vendor Widget Banner */}
              </div>
            ))}
          </div>

          <div className="swiper-pagination" />
        </div>
      </section>

      {/* End of Element Section */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data: outlet } = await axios.get(process.env.API_URL + "/api/ev1/AllOutlet");

  return {
    props: { outlet },
  };
}
export default outlet;
