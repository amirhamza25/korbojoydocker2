import axios from "axios";
import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { addToCartProductInfo, cartState } from "../../atom/addTocartAtom";
import { productState } from "../../atom/FilterProducts";
import { totalsState } from "../../commonFunction/addToCartTotalsState";
import useScript from "../../commonFunction/ReloadJs";
import Products from "../../component/Products";
import Sidebar from "../../component/Sidebar";

const Product = (props) => {
  useScript("/assets/js/app.js");
  const productMain = props.recentItem;

  const [cart, setCart] = useRecoilState(cartState);
  const [productCartInfo, updateProductCartInfo] = useRecoilState(addToCartProductInfo);

  const cartUpdate = async (item) => {
    setCart({ ...cart, [item.id]: (cart[item.id] || 0) + 1 });
    const dsfsd = JSON.parse(item.img);
    const img = dsfsd[0];
    updateProductCartInfo({ ...productCartInfo, [item.id]: [item.id, item.name, item.buyPrice, img] });
  };

  const cartRemove = async (item) => {
    const copy = { ...cart };
    if (copy[item.id] === 1) {
      delete copy[item.id];
      setCart(copy);
    } else {
      setCart({ ...copy, [item.id]: copy[item.id] - 1 });
    }
  };

  const carts = useRecoilValue(cartState);
  const product = useRecoilValue(addToCartProductInfo);
  const totals = useRecoilValue(totalsState);

  const [pd, setPd] = useRecoilState(productState);

  useEffect(() => {
    setPd(productMain);
  }, [setPd]);

  const porductOrder = async () => {
    const getCookies = getCookie("token");
    let decodedToken = jwtDecode(getCookies);

    //var newData = { ...userInformation, NewUser: NewUser, orderType: orderTypes };
    const orderInformation = { cartInfo: cart, productInfo: productCartInfo, logInfo: decodedToken };
    console.log(orderInformation);

    const response = await axios
      .post(process.env.API_URL + "/agentPanel/av1/agentProductOrder", orderInformation)
      .then((response) => {
        // MySwal.fire("Good job!", "Product added successfully", "success");
      })
      .catch((error) => {
        // MySwal.fire("Product not saved!", "Something Error Found.", "warning");
      });
  };

  return (
    <div>
      <div>
        <div>
          <div className="app">
            <div className="app-wrap">
              <div className="app-contant">
                <div className="bg-white">
                  <div className="container-fluid p-0">
                    <div className="row no-gutters">
                      <div className="col-sm-6 col-lg-7 col-xxl-7  align-self-center order-2 order-sm-1 p-2" style={{ background: "#EAEBEF" }}>
                        <div className="row no-gutters">
                          <div className="col-sm-6 col-lg-8 col-xxl-8  align-self-center order-2 order-sm-1 p-2" style={{ background: "#EAEBEF" }}>
                            <input id="title" type="text" className="form-control" placeholder="Search/Product Item" />
                          </div>
                          <div className="col-sm-6 col-lg-4 col-xxl-4  align-self-center order-2 order-sm-1 p-2" style={{ background: "#EAEBEF" }}>
                            {/* <Pd /> */}

                            <Sidebar />
                          </div>
                        </div>
                        <div className="row no-gutters">
                          <div className="container">
                            <h2 className="title title-underline mb-4 ls-normal appear-animate"></h2>
                            <div
                              className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-8"
                              data-swiper-options="{
        'spaceBetween': 20,
        'slidesPerView': 2,
        'breakpoints': {
            '576': {
                'slidesPerView': 3
            },
            '768': {
                'slidesPerView': 5
            },
            '992': {
                'slidesPerView': 6
            },
            '1200': {
                'slidesPerView': 8
            }
        }
    }"
                            >
                              <Products />
                              <div className="swiper-pagination" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-6 col-xxl-5 col-lg-5  o-hidden order-1 order-sm-2 p-2">
                        <div className="row">
                          <div className="page-content">
                            <div className="container">
                              <div className="row gutter-lg mb-10">
                                <div className="col-lg-8 pr-lg-4 mb-6">
                                  <table className="shop-table cart-table">
                                    <thead>
                                      <tr>
                                        <th className="product-name">
                                          <span>Product</span>
                                        </th>
                                        <th />
                                        <th className="product-price">
                                          <span>Price</span>
                                        </th>
                                        <th className="product-quantity">
                                          <span>Quantity</span>
                                        </th>
                                        <th className="product-subtotal">
                                          <span>Subtotal</span>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {Object.entries(cart).map(([key, value]) => (
                                        <tr key={key}>
                                          <td className="product-thumbnail">
                                            <div className="p-relative">
                                              <a href="product-default.html">
                                                <figure>
                                                  <img src={`https://baybridgebd.com/upload/${product[key][3]}`} alt="product" height={84} width={94} />
                                                </figure>
                                              </a>
                                              {/* <button type="submit" className="btn btn-close">
                                                <i className="fas fa-times" />
                                              </button> */}
                                            </div>
                                          </td>
                                          <td className="product-name">
                                            <a href="product-default.html"> {product[key][1]}</a>
                                          </td>
                                          <td className="product-price">
                                            {" "}
                                            <span className="amount">{product[key][2]}</span>
                                          </td>
                                          <td className="product-quantity">
                                            <div className="input-group">
                                              <input className="quantity form-control" type="number" value={value} />
                                              {/* <button className="quantity-plus w-icon-plus" /> <button className="quantity-minus w-icon-minus" /> */}
                                            </div>
                                          </td>
                                          <td className="product-subtotal">
                                            <span className="amount">{product[key][2] * value}</span>
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                  <div className="cart-action mb-6">
                                    <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto">
                                      <i className="w-icon-long-arrow-left" />
                                      Continue Shopping
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-4 sticky-sidebar-wrapper">
                                  <div className="sticky-sidebar">
                                    <div className="cart-summary mb-4">
                                      <h3 className="cart-title text-uppercase">Cart Totals</h3>
                                      <div className="cart-subtotal d-flex align-items-center justify-content-between">
                                        <label className="ls-25">Subtotal</label>
                                        <span>{totals.subtotal.toFixed(2)}</span>
                                      </div>
                                      <hr className="divider" />
                                      <ul className="shipping-methods mb-2">
                                        <li>
                                          <label className="shipping-title text-dark font-weight-bold">Shipping</label>
                                        </li>
                                        <li>
                                          <div className="custom-radio">
                                            <input type="radio" id="free-shipping" className="custom-control-input" name="shipping" />
                                            <label htmlFor="free-shipping" className="custom-control-label color-dark">
                                              Free Shipping
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="custom-radio">
                                            <input type="radio" id="local-pickup" className="custom-control-input" name="shipping" />
                                            <label htmlFor="local-pickup" className="custom-control-label color-dark">
                                              Local Pickup
                                            </label>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="custom-radio">
                                            <input type="radio" id="flat-rate" className="custom-control-input" name="shipping" />
                                            <label htmlFor="flat-rate" className="custom-control-label color-dark">
                                              Flat rate: $5.00
                                            </label>
                                          </div>
                                        </li>
                                      </ul>

                                      <hr className="divider mb-6" />
                                      <div className="order-total d-flex justify-content-between align-items-center">
                                        <label>Total</label>
                                        <span className="ls-50">{totals.total.toFixed(2)}</span>
                                      </div>

                                      <a className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout" onClick={porductOrder}>
                                        Proceed to checkout
                                        <i className="w-icon-long-arrow-right" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end app-wrap */}
        </div>
        {/* end app */}
        {/* plugins */}
        {/* custom app */}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data: recentItem } = await axios.get(process.env.API_URL + "/api/ev1/RecentProduct");

  return {
    props: { recentItem },
  };
}

export default Product;
