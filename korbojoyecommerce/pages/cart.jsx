import { checkCookies } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { addToCartProductInfo, cartState } from "../atom/addTocartAtom";
import { totalsState } from "../commonFunction/addToCartTotalsState";
import useScript from "../commonFunction/ReloadJs";

function cart() {
  useScript("/assets/js/main.min.js");

  const cart = useRecoilValue(cartState);

  const product = useRecoilValue(addToCartProductInfo);
  const totals = useRecoilValue(totalsState);

  const [token, setToken] = useState("");
  useEffect(() => {
    const checkToken = checkCookies("token");
    setToken(checkToken);
  }, []);

  return (
    <div>
      <main className="cart">
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb shop-breadcrumb bb-no">
              <li className="active">
                <Link href="/cart">
                  <a>Shopping Cart</a>
                </Link>
              </li>
              <li>
                <Link href="/checkout">
                  <a>Checkout</a>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <a>Order Complete</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
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
                            <button type="submit" className="btn btn-close">
                              <i className="fas fa-times" />
                            </button>
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
                            <button className="quantity-plus w-icon-plus" /> <button className="quantity-minus w-icon-minus" />
                          </div>
                        </td>
                        <td className="product-subtotal">
                          <span className="amount">
                            {product[key][2] * value} + {product[key][2]}
                          </span>
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
                  {/* <button type="submit" className="btn btn-rounded btn-default btn-clear" name="clear_cart" value="Clear Cart">
                    Clear Cart
                  </button>
                  <button type="submit" className="btn btn-rounded btn-update disabled" name="update_cart" value="Update Cart">
                    Update Cart
                  </button> */}
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

                    {!token ? (
                      <Link href="/login">
                        <a className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout">
                          Proceed to checkout
                          <i className="w-icon-long-arrow-right" />
                        </a>
                      </Link>
                    ) : (
                      <Link href="/checkout">
                        <a className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout">
                          Proceed to checkout
                          <i className="w-icon-long-arrow-right" />
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default cart;
