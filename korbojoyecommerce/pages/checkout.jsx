import axios from "axios";
import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addToCartProductInfo, cartState } from "../atom/addTocartAtom";
import fromValueUpdate from "../commonFunction/onChangeHandle";
import useScript from "../commonFunction/ReloadJs";
function checkout(props) {
  useScript("/assets/js/main.min.js");
  console.log(props);
  const agentInfo = props.agent.data;
  const countryInfo = props.country.data;
  // console.log(countryInfo);
  const districtsInfo = props.districts.data;
  console.log(districtsInfo);
  const MySwal = withReactContent(Swal);
  const [userInformation, upadateProductState] = useState("");
  const categoryHandleChange = (e) => {
    fromValueUpdate(e, upadateProductState);
  };

  const cartInfo = useRecoilValue(cartState);
  const productInfo = useRecoilValue(addToCartProductInfo);

  const onSubmit = async (e) => {
    e.preventDefault();
    const getCookies = getCookie("token");
    const NewUser = e.target.NewUser.value;
    const orderTypes = e.target.orderTypes.value;
    let decodedToken = jwtDecode(getCookies);

    var newData = { ...userInformation, NewUser: NewUser, orderType: orderTypes };

    const orderInformation = { userInfo: newData, cartInfo: cartInfo, productInfo: productInfo, logInfo: decodedToken };

    const response = await axios
      .post(process.env.API_URL + "/api/ev1/ShoppingCartOrder", orderInformation)
      .then((response) => {
        MySwal.fire("Good job!", "Product added successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Product not saved!", "Something Error Found.", "warning");
      });
  };
  return (
    <div>
      {/* Start of Main */}
      <main className="main checkout">
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb shop-breadcrumb bb-no">
              <li className="passed">
                <a href="cart.html">Shopping Cart</a>
              </li>
              <li className="active">
                <a href="checkout.html">Checkout</a>
              </li>
              <li>
                <a href="order.html">Order Complete</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of PageContent */}
        <div className="page-content">
          <div className="container">
            <form onSubmit={onSubmit} method="post" encType="multipart/form-data">
              <div className="row mb-9">
                <div className="col-lg-7 pr-lg-4 mb-4">
                  <h3 className="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">Billing Details</h3>
                  <div className="row gutter-sm">
                    <div className="col-xs-12">
                      <div className="form-group">
                        <label>First name *</label>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          onChange={categoryHandleChange}
                          name="firstname"
                          placeholder="Enter your first and last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Phone *</label>
                      <input
                        type="text"
                        className="form-control form-control-md"
                        onChange={categoryHandleChange}
                        name="phone"
                        placeholder="Please enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <input type="hidden" className="form-control form-control-md" onClick={onSubmit} name="orderTypes" value="order" required />
                  <input type="hidden" className="form-control form-control-md" onClick={onSubmit} name="NewUser" value="NewUser" required />
                  <div className="form-group">
                    <label>Country / Region *</label>
                    <div className="select-box">
                      <select name="country" onChange={categoryHandleChange} className="form-control form-control-md">
                        <option value="default" selected="selected">
                          Please choose your region
                        </option>
                        {countryInfo.map((country, index) => (
                          <option value={`${country.country_name}`} key={index}>
                            {country.country_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row gutter-sm">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>City *</label>
                        <div className="select-box">
                          <select name="City" onChange={categoryHandleChange} className="form-control form-control-md">
                            <option value="default" selected="selected">
                              Please choose your city
                            </option>
                            {districtsInfo.map((districts, index) => (
                              <option value={`${districts.name}`} key={index}>
                                {districts.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Area *</label>
                        <input
                          type="text"
                          className="form-control mb-2"
                          name="State"
                          onChange={categoryHandleChange}
                          placeholder="For Example: House# 123, Street# 123, ABC Road"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Address *</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      name="streetaddress"
                      onChange={categoryHandleChange}
                      placeholder="For Example: House# 123, Street# 123, ABC Road"
                      required
                    />
                  </div>

                  {/* <div className="form-group mb-7">
                    <label>Email address *</label>
                    <input type="email" onChange={categoryHandleChange} className="form-control form-control-md" name="email" required />
                  </div> */}
                  {/* <div className="form-group">
                    <label>Outlet</label>
                    <div className="select-box">
                      <select name="Outlet" onChange={categoryHandleChange} className="form-control form-control-md">
                        <option value="default" selected="selected">
                          Please choose your outlet
                        </option>
                        <option value="11">United Kingdom (UK)</option>
                        <option value="11">United States</option>
                        <option value="11">France</option>
                        <option value="11">Australia</option>
                      </select>
                    </div>
                  </div> */}
                  <div className="form-row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="inputState">Outlet</label>
                        <select id="inputState" name="Outlet" onChange={categoryHandleChange} className="form-control">
                          <option selected>Select agent type</option>

                          {agentInfo.map((item, index) => (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label> Select a label for effective delivery:</label>
                    <div className="select-box">
                      <select name="effectiveDelivery" onChange={categoryHandleChange} className="form-control form-control-md">
                        <option value="default" selected="selected">
                          Please choose your effective delivery
                        </option>
                        <option value="office">Office</option>
                        <option value="home">Home</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="order-notes">Order notes (optional)</label>
                    <textarea
                      className="form-control mb-0"
                      id="order-notes"
                      name="ordernotes"
                      cols={30}
                      rows={4}
                      onChange={categoryHandleChange}
                      placeholder="Notes about your order, e.g special notes for delivery"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-5 mb-4 sticky-sidebar-wrapper">
                  <div className="order-summary-wrapper sticky-sidebar">
                    <h3 className="title text-uppercase ls-10">Your Order</h3>
                    <div className="order-summary">
                      <div className="payment-methods" id="payment_method">
                        <h4 className="title font-weight-bold ls-25 pb-0 mb-1">Payment Methods</h4>
                        <div className="accordion payment-accordion">
                          <div className="card">
                            <div className="card-header">
                              <a href="#cash-on-delivery" className="collapse">
                                Direct Bank Transfor
                              </a>
                            </div>
                            <div id="cash-on-delivery" className="card-body expanded">
                              <p className="mb-0">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be
                                shipped until the funds have cleared in our account.
                              </p>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">
                              <a href="#payment" className="expand">
                                Check Payments
                              </a>
                            </div>
                            <div id="payment" className="card-body collapsed">
                              <p className="mb-0">Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header">
                              <a href="#delivery" className="expand">
                                Cash on delivery
                              </a>
                            </div>
                            <div id="delivery" className="card-body collapsed">
                              <p className="mb-0">Pay with cash upon delivery.</p>
                            </div>
                          </div>
                          <div className="card p-relative">
                            <div className="card-header">
                              <a href="#paypal" className="expand">
                                Paypal
                              </a>
                            </div>
                            <a
                              href="https://www.paypal.com/us/webapps/mpp/paypal-popup"
                              className="text-primary paypal-que"
                              onclick="javascript:window.open('https://www.paypal.com/us/webapps/mpp/paypal-popup','WIPaypal',
                                                  'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); 
                                                  return false;"
                            >
                              What is PayPal?
                            </a>
                            <div id="paypal" className="card-body collapsed">
                              <p className="mb-0">Pay via PayPal, you can pay with your credit cart if you don't have a PayPal account.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group place-order pt-6">
                        <button type="submit" className="btn btn-dark btn-block btn-rounded">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* End of PageContent */}
      </main>
      {/* End of Main */}
    </div>
  );
}
export async function getServerSideProps(context) {
  const { data: agent } = await axios.get(process.env.API_URL + "/GetInformationSingle/agent&chk=1");

  const { data: country } = await axios.get(process.env.API_URL + "/GetInformationSingle/apps_countries&chk=1");
  const { data: districts } = await axios.get(process.env.API_URL + "/GetInformationSingle/districts&chk=1");

  return {
    props: { agent, country, districts },
  };
}
export default checkout;
