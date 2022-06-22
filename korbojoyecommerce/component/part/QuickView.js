import { checkCookies } from "cookies-next";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from 'recoil';
import { categoryAtom } from '../../atom/CategoryAtom';
import { filteredCounts } from "../../atom/FilterProducts";
import { totalsState } from "../../commonFunction/addToCartTotalsState";
import { CartItems } from "../../commonFunction/CartItems";

function QuickView() {
    const category = useRecoilValue(categoryAtom);
    const totals = useRecoilValue(totalsState);
    const totalProducts = useRecoilValue(filteredCounts)

    const [token, setToken] = useState("");
    // const [token1, setToken1] = useState("");
    useEffect(() => {

        const checkToken = checkCookies("token");
        setToken(checkToken);
        // localStorage.setItem("token");
        const { pathname } = Router;
        if (pathname == "/") {
            Router.push("/");
        }
    }, []);
    return (
        <div >
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
            {/* End of Sticky Footer */}
            {/* Start of Scroll Top */}
            <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i className="w-icon-angle-up" /> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                <circle id="progress-indicator" fill="transparent" stroke="#000000" strokeMiterlimit={10} cx={35} cy={35} r={34} style={{ strokeDasharray: '16.4198, 400' }} />
            </svg> </a>
            {/* End of Scroll Top */}
            {/* Start of Mobile Menu */}
            <div className="mobile-menu-wrapper">
                <div className="mobile-menu-overlay" />
                {/* End of .mobile-menu-overlay */}
                <a href="#" className="mobile-menu-close"><i className="close-icon" /></a>
                {/* End of .mobile-menu-close */}
                <div className="mobile-menu-container scrollable">
                    <form action="#" method="get" className="input-wrapper">
                        <input type="text" className="form-control" name="search" autoComplete="off" placeholder="Search" required />
                        <button className="btn btn-search" type="submit">
                            <i className="w-icon-search" />
                        </button>
                    </form>
                    {/* End of Search Form */}
                    <div className="tab" >
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a href="#main-menu" className="nav-link active">Main Menu</a>
                            </li>
                            <li className="nav-item">
                                <a href="#categories" className="nav-link">Categories</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active" id="main-menu">
                            <ul className="mobile-menu">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/aboutUs">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contactUs">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="demo1.html">Mission & Vission</a>
                                </li>
                                <li>
                                    <Link href="/all-product">
                                        <a>Gallery</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/become-a-vendor">
                                        <a>Vendor</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outlet">
                                        <a>Outlet</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/api/auth/signin">
                                        <a onClick={(e) => {
                                            e.preventDefault()
                                            signIn('github')
                                        }}>Sign In</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/api/auth/signout">
                                        <a onClick={(e) => {
                                            e.preventDefault()
                                            signOut()
                                        }}>Sign In</a>
                                    </Link>
                                </li>
                                <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2 mx-3">
                                    <div className="cart-overlay" />
                                    <a className="cart-toggle label-down link" href="cart">
                                        <div style={{ display: 'flex' }}>
                                            <i className="w-icon-cart">

                                            </i>
                                            <span className="cart-label mx-2">Carts</span>
                                        </div>
                                    </a>
                                    <div className="dropdown-box">
                                        <div className="cart-header">

                                            <span>Shopping Cart</span>
                                            <a className="btn-close">

                                                {/* <i className="w-icon-long-arrow-right" /> */}
                                            </a>
                                        </div>

                                        <div className="products">

                                            <CartItems />
                                            <hr />
                                            <div style={{ display: "flex", justifyContent: 'space-between', marginTop: '60px' }}>
                                                <h5>Subtotal:</h5>
                                                <h5 className="price">Total: ${totals.total.toFixed(2)}</h5>
                                            </div>


                                            <div style={{ display: 'flex' }}>
                                                <Link href="/cart">
                                                    <a className="btn btn-dark btn-outline btn-rounded p-3 m-2">
                                                        View Cart
                                                    </a>
                                                </Link>

                                                {!token ? (
                                                    <Link href="/login">
                                                        <a className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout  p-3 m-2">
                                                            checkout
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
                                        <div className="cart-total">

                                        </div>
                                        <div className="cart-action">

                                        </div>
                                    </div>
                                    {/* End of Dropdown Box */}
                                </div>
                            </ul>
                        </div>
                        <div className="tab-pane" id="categories">
                            <ul className="mobile-menu">
                                {
                                    category.map((item, index) => (
                                        <li key={index}>
                                            <Link href="/category/[categoryId]" as={`/category/${item.id}`}>
                                                <a>
                                                    <i className="w-icon-tshirt2" />  {item.title}
                                                </a>
                                            </Link>
                                            <ul>
                                                {item.categorySubs.map((subcategory, index) => (
                                                    <li key={index}>
                                                        <a href="#"> {subcategory.title}</a>
                                                        <ul>
                                                            {subcategory.categoryBrands.map(
                                                                (brand, index) => (
                                                                    <li key={index}>
                                                                        <Link href="/brand-wise-product/[brandId]" as={`/brand-wise-product/${subcategory.id}`}>
                                                                            <a>{brand.title}</a>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))
                                }
                                <li>
                                    <a href="shop-banner-sidebar.html" className="font-weight-bold text-primary text-uppercase ls-25">
                                        View All Categories<i className="w-icon-angle-right" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Mobile Menu */}


            {/* Start of Newsletter popup */}
            <div className="newsletter-popup mfp-hide">
                <div className="newsletter-content">
                    <h4 className="text-uppercase font-weight-normal ls-25">Get Up to<span className="text-primary">25% Off</span></h4>
                    <h2 className="ls-25">Sign up to Wolmart</h2>
                    <p className="text-light ls-10">Subscribe to the Wolmart market newsletter to
                        receive updates on special offers.</p>
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-round">
                        <input type="email" className="form-control email font-size-md" name="email" id="email2" placeholder="Your email address" required />
                        <button className="btn btn-dark" type="submit">SUBMIT</button>
                    </form>
                    <div className="form-checkbox d-flex align-items-center">
                        <input type="checkbox" className="custom-checkbox" id="hide-newsletter-popup" name="hide-newsletter-popup" required />
                        <label htmlFor="hide-newsletter-popup" className="font-size-sm text-light">Don't show this popup again.</label>
                    </div>
                </div>
            </div>
            {/* End of Newsletter popup */}




            {/* Start of Quick View */}
            <div className="product product-single product-popup">
                <div className="row gutter-lg">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="product-gallery product-gallery-sticky">
                            <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                                <div className="swiper-wrapper row cols-1 gutter-no">
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/1-440x494.jpg" data-zoom-image="assets/images/products/popup/1-800x900.jpg" alt="Water Boil Black Utensil" width={800} height={900} />
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/2-440x494.jpg" data-zoom-image="assets/images/products/popup/2-800x900.jpg" alt="Water Boil Black Utensil" width={800} height={900} />
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/3-440x494.jpg" data-zoom-image="assets/images/products/popup/3-800x900.jpg" alt="Water Boil Black Utensil" width={800} height={900} />
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/4-440x494.jpg" data-zoom-image="assets/images/products/popup/4-800x900.jpg" alt="Water Boil Black Utensil" width={800} height={900} />
                                        </figure>
                                    </div>
                                </div>
                                <button className="swiper-button-next" />
                                <button className="swiper-button-prev" />
                            </div>
                            <div className="product-thumbs-wrap swiper-container" data-swiper-options="{
                  'navigation': {
                      'nextEl': '.swiper-button-next',
                      'prevEl': '.swiper-button-prev'
                  }
              }">
                                <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/1-103x116.jpg" alt="Product Thumb" width={103} height={116} />
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/2-103x116.jpg" alt="Product Thumb" width={103} height={116} />
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/3-103x116.jpg" alt="Product Thumb" width={103} height={116} />
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/4-103x116.jpg" alt="Product Thumb" width={103} height={116} />
                                    </div>
                                </div>
                                <button className="swiper-button-next" />
                                <button className="swiper-button-prev" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 overflow-hidden p-relative">
                        <div className="product-details scrollable pl-0">
                            <h2 className="product-title">Electronics Black Wrist Watch</h2>
                            <div className="product-bm-wrapper">
                                <figure className="brand">
                                    <img src="assets/images/products/brand/brand-1.jpg" alt="Brand" width={102} height={48} />
                                </figure>
                                <div className="product-meta">
                                    <div className="product-categories">
                                        Category:
                                        <span className="product-category"><a href="#">Electronics</a></span>
                                    </div>
                                    <div className="product-sku">
                                        SKU: <span>MS46891340</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="product-divider" />
                            <div className="product-price">$40.00</div>
                            <div className="ratings-container">
                                <div className="ratings-full">
                                    <span className="ratings" style={{ width: '80%' }} />
                                    <span className="tooltiptext tooltip-top" />
                                </div>
                                <a href="#" className="rating-reviews">(3 Reviews)</a>
                            </div>
                            <div className="product-short-desc">
                                <ul className="list-type-check list-style-none">
                                    <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                                    <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                                    <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                                </ul>
                            </div>
                            <hr className="product-divider" />
                            <div className="product-form product-variation-form product-color-swatch">
                                <label>Color:</label>
                                <div className="d-flex align-items-center product-variations">
                                    <a href="#" className="color" style={{ backgroundColor: '#ffcc01' }} />
                                    <a href="#" className="color" style={{ backgroundColor: '#ca6d00' }} />
                                    <a href="#" className="color" style={{ backgroundColor: '#1c93cb' }} />
                                    <a href="#" className="color" style={{ backgroundColor: '#ccc' }} />
                                    <a href="#" className="color" style={{ backgroundColor: '#333' }} />
                                </div>
                            </div>
                            <div className="product-form product-variation-form product-size-swatch">
                                <label className="mb-1">Size:</label>
                                <div className="flex-wrap d-flex align-items-center product-variations">
                                    <a href="#" className="size">Small</a>
                                    <a href="#" className="size">Medium</a>
                                    <a href="#" className="size">Large</a>
                                    <a href="#" className="size">Extra Large</a>
                                </div>
                                <a href="#" className="product-variation-clean">Clean All</a>
                            </div>
                            <div className="product-variation-price">
                                <span />
                            </div>
                            <div className="product-form">
                                <div className="product-qty-form">
                                    <div className="input-group">
                                        <input className="quantity form-control" type="number" min={1} max={10000000} />
                                        <button className="quantity-plus w-icon-plus" />
                                        <button className="quantity-minus w-icon-minus" />
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-cart">
                                    <i className="w-icon-cart" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                            <div className="social-links-wrapper">
                                <div className="social-links">
                                    <div className="social-icons social-no-color border-thin">
                                        <a href="#" className="social-icon social-facebook w-icon-facebook" />
                                        <a href="#" className="social-icon social-twitter w-icon-twitter" />
                                        <a href="#" className="social-icon social-pinterest fab fa-pinterest-p" />
                                        <a href="#" className="social-icon social-whatsapp fab fa-whatsapp" />
                                        <a href="#" className="social-icon social-youtube fab fa-linkedin-in" />
                                    </div>
                                </div>
                                <span className="divider d-xs-show" />
                                <div className="product-link-wrapper d-flex">
                                    <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"><span /></a>
                                    <a href="#" className="btn-product-icon btn-compare btn-icon-left w-icon-compare"><span /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default QuickView
