import React from "react";
import useScript from "../commonFunction/ReloadJs";
function deliveryPolicy() {
  useScript("/assets/js/main.min.js");
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">Delivery Policy</h1>
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
            <li>Delivery Policy</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}
      {/* Start of Page Content */}
      <div className="page-content">
        <div className="container">
          <section className="introduce mb-10 pb-10">
            <h2 className=" mx-auto text-center">Delivery Policy for Korbo Joy</h2>
            <h6>Inside Dhaka Delivery: </h6>
            <li>Delivery Charge 80 Taka Applicable. (Courier charge may differ based on package size and courier’s weight-based costing.) </li>
            <li>Cash on Delivery (COD) and Home Delivery Available </li>
            <h6>Outside Dhaka Delivery: </h6>
            <li>Full Pre-Payment required. </li>
            <li>100 Taka basic Courier Charge (Courier charge may differ based on package size and courier’s weight-based costing.) </li>
            <li>Fastest delivery within 48-72 hrs by Courier service anywhere in Bangladesh.</li>
          </section>
        </div>
      </div>
    </div>
  );
}

export default deliveryPolicy;
