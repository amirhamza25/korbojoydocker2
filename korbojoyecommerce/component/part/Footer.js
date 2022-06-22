import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profilePic from '../../public/assets/images/WhatsApp Image 2022-02-09 at 3.25.23 PM.png';
function Footer() {
    return (
        <div>
            <div >
                <footer className="footer appear-animate" style={{ backgroundColor: "#F2F2F2" }} data-animation-options="{
      'name': 'fadeIn'
  }">
                    <div className="footer-newsletter" style={{ backgroundColor: "#5A5A5A" }}>

                        <div >
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="icon-box icon-box-side text-white">
                                            <div className="icon-box-icon d-inline-flex">
                                                <i className="w-icon-envelop3" />
                                            </div>
                                            <div className="icon-box-content">
                                                <h4 className="icon-box-title text-white text-uppercase font-weight-bold">Subscribe To
                                                    Our Newsletter</h4>
                                                <p className="text-white">Get all the latest information on Events, Sales and Offers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                                        <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-rounded">
                                            <input type="email" className="form-control mr-2 bg-white" name="email" id="email" placeholder="Your E-mail Address" />
                                            <button className="btn btn-dark btn-rounded" type="submit">Subscribe<i className="w-icon-long-arrow-right" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="footer-top">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="">
                                        <Image
                                            src={profilePic}
                                            alt='pic'

                                        />

                                        <div className="widget-body">
                                            <p className="widget-about-title">Got Question? Call us 24/7</p>
                                            <a href="tel:+8801837212981" className="widget-about-call">+8801837212981</a>
                                            <p className="widget-about-desc">Register now to get updates on pronot get up icons
                                                &amp; coupons ster now toon.
                                            </p>
                                            <div className="social-icons social-icons-colored">
                                                <a href="#" className="social-icon social-facebook w-icon-facebook" />
                                                <a href="#" className="social-icon social-twitter w-icon-twitter" />
                                                <a href="#" className="social-icon social-instagram w-icon-instagram" />
                                                <a href="#" className="social-icon social-youtube w-icon-youtube" />
                                                <a href="#" className="social-icon social-pinterest w-icon-pinterest" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget">
                                        <h3 className="widget-title">Company</h3>
                                        <ul className="widget-body">

                                            <Link href={"/aboutUs"}>
                                                <li><a href={"/aboutUs"}>About Us</a></li>
                                            </Link>

                                            <Link href={"/team-member"}>
                                                <li><a href={"/team-member"}>Team Member</a></li>
                                            </Link>
                                            {/* <Link href={'/career'}>
                                                <li><a href={'/career'}>Career</a></li>
                                            </Link> */}
                                            <Link href={'/contactUs'}>
                                                <li><a href={'/contactUs'}>Contact Us</a></li>
                                            </Link>



                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget">
                                        <h4 className="widget-title">My Account</h4>
                                        <ul className="widget-body">

                                            <Link href={'/cart'}>
                                                <li><a href="cart.html">View Cart</a></li>
                                            </Link>


                                            <Link href={"/login"}>
                                                <li><a href="">Sign in</a></li>
                                            </Link>



                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>
                                        <ul className="widget-body">
                                            {/* <Link href={"/digital-payment"}>
                                                <li><a href={"/digital-payment"}>Digital Payment</a></li>
                                            </Link> */}

                                            {/* <Link href={"/support-center"}>
                                                <li><a href={"/support-center"}>Support Center</a></li>
                                            </Link> */}


                                            <Link href={"/terms-and-condition"}>
                                                <li><a href={"/terms-and-condition"}>Term and Conditions</a></li>
                                            </Link>
                                            <Link href={"/privacy-policy"}>
                                                <li><a href={"/privacy-policy"}>Privacy Policy</a></li>
                                            </Link>
                                            <Link href={"/return-policy"}>
                                                <li><a href={"/return-policy"}>Return Policy</a></li>
                                            </Link>
                                            <Link href={"/refund-policy"}>
                                                <li><a href={"/refund-policy"}>Refund Policy</a></li>
                                            </Link>
                                            <Link href={"/delivery-policy"}>
                                                <li><a href={"/delivery-policy"}>Delivery Policy </a></li>
                                            </Link>
                                            <Link href={"/faq"}>
                                                <li><a href={"/faq"}>Faq</a></li>
                                            </Link>
                                            <Link href={"/order-system"}>
                                                <li><a href={"/order-system"}>Order System</a></li>
                                            </Link>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <div className="footer-left">
                                <p className="copyright">Copyright © 2022 KORBO JOY STORE. All Rights Reserved.</p>
                            </div>
                            <div className="footer-right">
                                <span className="payment-label mr-lg-8">We're using safe payment for</span>
                                <figure className="payment">
                                    <img src="assets/images/payment.png" alt="payment" width={159} height={25} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="sticky-footer sticky-content fix-bottom">
                    <a href="demo1.html" className="sticky-link active">
                        <i className="w-icon-home" />
                        <p>Home</p>
                    </a>
                    <a href="shop-banner-sidebar.html" className="sticky-link">
                        <i className="w-icon-category" />
                        <p>Shop</p>
                    </a>
                    <a href="my-account.html" className="sticky-link">
                        <i className="w-icon-account" />
                        <p>Account</p>
                    </a>
                    <div className="cart-dropdown dir-up">
                        <a href="cart.html" className="sticky-link">
                            <i className="w-icon-cart" />
                            <p>Cart</p>
                        </a>
                        <div className="dropdown-box">
                            <div className="products">
                                <div className="product product-cart">
                                    <div className="product-detail">
                                        <h3 className="product-name">
                                            <a href="product-default.html">Beige knitted elas<br />tic
                                                runner shoes</a>
                                        </h3>
                                        <div className="price-box">
                                            <span className="product-quantity">1</span>
                                            <span className="product-price">$25.68</span>
                                        </div>
                                    </div>
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/cart/product-1.jpg" alt="product" height={84} width={94} />
                                        </a>
                                    </figure>
                                    <button className="btn btn-link btn-close" aria-label="button">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                                <div className="product product-cart">
                                    <div className="product-detail">
                                        <h3 className="product-name">
                                            <a href="product-default.html">Blue utility pina<br />fore
                                                denim dress</a>
                                        </h3>
                                        <div className="price-box">
                                            <span className="product-quantity">1</span>
                                            <span className="product-price">$32.99</span>
                                        </div>
                                    </div>
                                    <figure className="product-media">
                                        <a href="product-default.html">
                                            <img src="assets/images/cart/product-2.jpg" alt="product" width={84} height={94} />
                                        </a>
                                    </figure>
                                    <button className="btn btn-link btn-close" aria-label="button">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="cart-total">
                                <label>Subtotal:</label>
                                <span className="price">$58.67</span>
                            </div>
                            <div className="cart-action">
                                <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">View Cart</a>
                                <a href="checkout.html" className="btn btn-primary  btn-rounded">Checkout</a>
                            </div>
                        </div>
                        {/* End of Dropdown Box */}
                    </div>
                    <div className="header-search hs-toggle dir-up">
                        <a href="#" className="search-toggle sticky-link">
                            <i className="w-icon-search" />
                            <p>Search</p>
                        </a>
                        <form action="#" className="input-wrapper">
                            <input type="text" className="form-control" name="search" autoComplete="off" placeholder="Search" required />
                            <button className="btn btn-search" type="submit">
                                <i className="w-icon-search" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
