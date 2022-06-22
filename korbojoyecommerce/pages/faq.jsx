import React from "react";
import useScript from "../commonFunction/ReloadJs";
function faq() {
  useScript("/assets/js/main.min.js");
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">Faq</h1>
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
            <li>Faq</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}
      {/* Start of Page Content */}
      <div className="page-content">
        <div className="container">
          <section className="introduce mb-10 pb-10">
            <h2 className=" mx-auto text-center">Faq for Korbo Joy</h2>
            <div className="col-lg-12 mb-8">
              <h4 className="title mb-3">People usually ask these</h4>
              <div className="accordion accordion-bg accordion-gutter-md accordion-border">
                <div className="card">
                  <div className="card-header">
                    <a href="#collapse1" className="expand">
                      FAQ Is my data protected?
                    </a>
                  </div>
                  <div id="collapse1" className="card-body collapsed" style={{ display: "none" }}>
                    <p className="mb-0">Yes, your data is completely secured</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a href="#collapse2" className="collapse">
                      How do I contact with you?
                    </a>
                  </div>
                  <div id="collapse2" className="card-body expanded" style={{ display: "block" }}>
                    <p className="mb-0">Feel free to Inbox us, Email us or call us at 01919-880322 for any type of queries.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a href="#collapse3" className="expand">
                      How do I cancel my order?
                    </a>
                  </div>
                  <div id="collapse3" className="card-body collapsed">
                    <p className="mb-0">Inbox or call us at 01919-880322 to cancel the order.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a href="#collapse4" className="expand">
                      Do you deliver outside Dhaka?
                    </a>
                  </div>
                  <div id="collapse4" className="card-body collapsed">
                    <p className="mb-0">Yes, we deliver all over Bangladesh via courier service.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a href="#collapse5" className="expand">
                      How much does the shipping cost?
                    </a>
                  </div>
                  <div id="collapse5" className="card-body collapsed">
                    <p className="mb-0">
                      Inside Dhaka Delivery Charge: 70 Taka Applicable. (Courier charge may differ based on package size and courier’s weight-based costing)
                      Outside Dhaka Delivery Charge: 100 Taka (Courier charge may differ based on package size and courier’s weight-based costing.)
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a href="#collapse5" className="expand">
                      Do you provide Free Shipping?
                    </a>
                  </div>
                  <div id="collapse5" className="card-body collapsed">
                    <p className="mb-0">Free shipping may be offered only during campaigns or promotional offers.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a href="#collapse5" className="expand">
                      Do I receive an invoice for my order?
                    </a>
                  </div>
                  <div id="collapse5" className="card-body collapsed">
                    <p className="mb-0">Yes, an Electronic invoice will be sent to your email every time you order.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default faq;
