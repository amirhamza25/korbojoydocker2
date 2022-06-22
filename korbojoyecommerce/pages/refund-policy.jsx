import React from "react";
import useScript from "../commonFunction/ReloadJs";
function refundPolicy() {
  useScript("/assets/js/main.min.js");
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">Refund Policy</h1>
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
            <li>Refund Policy</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}
      {/* Start of Page Content */}
      <div className="page-content">
        <div className="container">
          <section className="introduce mb-10 pb-10">
            <h2 className=" mx-auto text-center">Refund Policy for Korbo Joy</h2>
            <p>1.Most refunds are fully refunded in 7-15 days after we receive and process your return.</p>
            <p>
              2. If you pay us by using the card, then we will request a refund in the bank which will take 7-15 working days. (credit card payment return may
              take longer depending on Commercial Banks)
            </p>
            <p>3. If you pay us by bkash/rocket/mobile banking, then your money will be added in your desired account within 7-15 working days.</p>
            <h6>Shipping Cost: </h6>
            <p>1) Customer will bear own shipping cost item; we are not responsible for it.</p>
            <p>2) Delivery cost is non-refundable. We will deduct the shipping cost from the refund amount</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default refundPolicy;
