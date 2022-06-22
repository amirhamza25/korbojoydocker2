import React from "react";
import useScript from "../commonFunction/ReloadJs";
function orderSystem() {
  useScript("/assets/js/main.min.js");
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">How To Order From Korbo Joy</h1>
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
            <li>Order System</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}
      {/* Start of Page Content */}
      <div className="page-content">
        <div className="container">
          <section className="introduce mb-10 pb-10">
            <h2 className=" mx-auto text-center">How To Order From Korbo Joy</h2>
            <p>
              The largest online shopping mall korbojoy.com offers various offers and attractive discounts on various daily necessities like gadgets,
              accessories, fashion and lifestyle products, healthcare products, home appliances, etc. In most cases, buyers can buy at home by paying the price
              at home.
            </p>

            <h2>How to buy the product:</h2>
            <p>
              1. If you are our new guest then sign up / register now to buy any product. <br /> 2. To purchase the product of your choice, go to the details
              page of the offer by clicking on the product image and click on the 'Order Now' button next to the image. <br /> 3. If you wish to purchase more
              than one product, order all of your selected products at once by clicking the 'Add to Cart' button. <br /> 4. If you already have an account at
              korbojoy, sign in / login with your username and password, or create a username and password for your new account by signing up / registering as a
              new customer. <br /> 5. Please provide the information requested in the 'Delivery and Payment Process' section correctly. Remember that the
              accurate information you provide will expedite the delivery process of your product. <br /> 6. Then you click on the 'Next Step' button to go to
              the next step. <br /> 7. Go to the next step and double-check the summary of your order. <br /> 8. ‘Confirm’ if everything is correct. <br /> 9.
              Our representative will contact you by phone within 24 hours. <br /> 10. Call for any information assistance - (9 am to 11pm). <br /> 11. Also
              order directly over the phone. <br /> 12. With Ichelist you can select different orders that you can buy later.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default orderSystem;
