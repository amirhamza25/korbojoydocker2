import axios from "axios";
import { checkCookies, getCookie, removeCookies } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryAtom } from "../../atom/CategoryAtom";
import { filteredCounts } from "../../atom/FilterProducts";
import { totalsState } from "../../commonFunction/addToCartTotalsState";
import { CartItems } from "../../commonFunction/CartItems";
import profilePic from '../../public/assets/images/WhatsApp Image 2022-02-09 at 3.25.23 PM.png';


function TopHeader() {
  const [category, setCategory] = useState([]);
  const [categorySubBrand, setCategorySubBrand] = useRecoilState(categoryAtom);
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



  const remove = () => {
    removeCookies('token')

  }




  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await axios.get(
          process.env.API_URL + "/GetInformationSingle/category&chk=1"
        );
        // console.log(result.data)
        setCategory(result.data.data);
      };
    } catch (error) {
      // console.log(error);
    }

    try {
      const fetchCategorySubBrand = async () => {
        const result = await axios.get(
          process.env.API_URL + "/GetCategoryData"
        );
        setCategorySubBrand(result.data);
      };
    } catch (error) {
      // console.log(error);
    }

    fetchData();
    fetchCategorySubBrand();
  }, []);
  const categoryItem = useRecoilValue(categoryAtom);
  return (
    <div >
      <header className="header">
        <div className="header-top" >
          <div className={`container main-nav `} >
            <div className="header-left">
              <p className="welcome-msg">
                Welcome to Korbo Joy Store
              </p>
            </div>
            <div className="header-right">
              {
                !token ? <>
                  <Link href="/login">
                    <div className="btn-wrap show-code-action" style={{ width: '120px' }}>
                      <a href="#" className="btn btn-secondary btn-outline btn-ellipse" style={{ fontSize: 10 }}>Vendor Login</a>
                    </div>
                  </Link>
                  <>
                    <Link href="/login">
                      <div className="btn-wrap show-code-action" style={{ width: '120px' }}>
                        <a href="#" className="btn btn-primary btn-outline btn-ellipse" style={{ fontSize: 10 }}>Member Login</a>
                      </div>
                    </Link>
                  </>

                </> : <>
                  <Link href={`${process.env.API_USER}/home/?token=${getCookie('token')}`} passHref>
                    <div className="btn-wrap show-code-action">
                      <a href="#" className="btn btn-secondary btn-outline btn-ellipse" style={{ fontSize: 12 }}>Member Panel</a>
                    </div>
                  </Link>

                  <div className="btn-wrap show-code-action">

                    <a href="#" className="btn btn-secondary btn-outline btn-ellipse" style={{ fontSize: 12 }} onClick={() => remove()} >Sign Out</a>

                  </div>


                </>}




            </div>
          </div>
        </div>
        {/* End of Header Top */}
        <div className="header-middle" style={{

          background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(229,255,250,1) 100%)"
        }} >
          <div className="container" >
            <div className="header-left mr-md-4">
              <a
                href="#"
                className="mobile-menu-toggle  w-icon-hamburger"
                aria-label="menu-toggle"
              ></a>
              <Link href="/">
                <a>
                  <figure className="brand">
                    <Image
                      src={profilePic}
                      alt="Picture of the author"
                      width={250}
                      height={30}

                    />
                  </figure>
                </a>

              </Link>



              <form
                method="get"
                action="#"
                className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
              >

                <div className="select-box">


                </div>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  id="search"
                  placeholder="Search in..."
                  required
                />
                <button className="btn btn-search" type="submit">
                  <i className="w-icon-search" />
                </button>
              </form>
            </div>
            <div className="header-right ml-4">
              {/* <div className="header-call d-xs-show d-lg-flex align-items-center">
                <a className="w-icon-call" />
                <div className="call-info d-lg-show">
                  <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                    <a className="text-capitalize">
                      Live Chat
                    </a>
                    or :
                  </h4>
                  <a

                    className="phone-number font-weight-bolder ls-50"
                  >
                    +8801837212981
                  </a>
                </div>
              </div> */}
              {/* <Link href="/wishlist"> */}
              <a className="wishlist label-down link d-xs-show">
                <i className="w-icon-heart" />
                <span className="wishlist-label d-lg-show">Wishlist</span>
              </a>
              {/* </Link> */}
              <a className="compare label-down link d-xs-show" >
                <i className="w-icon-compare" />
                <span className="compare-label d-lg-show">Compare</span>
              </a>

            </div>
          </div>
        </div >
        {/* End of Header Middle */}
        <div div className="header-bottom sticky-content fix-top sticky-header shadow p-2 mb-5 bg-body rounded" style={{ borderTop: "solid 2px #8A908E" }
        } >
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div
                  className="dropdown category-dropdown has-border"
                  data-visible="true"
                >
                  <a

                    className="category-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    data-display="static"
                    title="Browse Categories"
                  >
                    <i className="w-icon-category" />
                    <span>Browse Categories</span>
                  </a>
                  <div className="dropdown-box">
                    <ul className="menu vertical-menu category-menu">
                      {categoryItem.map((category, index) => (
                        <li key={index}>
                          <Link href="/category/[categoryId]" as={`/category/${category.id}`}>
                            <a>
                              <i className="w-icon-home" />
                              {category.title}
                            </a>
                          </Link>
                          <ul className="megamenu">
                            {category.categorySubs.map((subcategory, index) => (
                              <li key={index}>
                                <h4 className="menu-title">
                                  {subcategory.title}
                                </h4>
                                <hr className="divider" />
                                <ul>
                                  {subcategory.categoryBrands.map(
                                    (brand, index) => (
                                      <li key={index}>
                                        <Link href="/brand-wise-product/[brand-wise-product]" as={`/brand-wise-product/${brand.id}`}>
                                          <a>
                                            {brand.title}
                                          </a>
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}

                      <li>
                        <a className="font-weight-bold text-primary text-uppercase ls-25">     View All Categories
                        </a>




                      </li>
                    </ul>
                  </div>
                </div>
                <nav className="main-nav">
                  <ul className="menu active-underline">
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
                      <Link href="/mission">
                        <a>Mission & Vission</a>
                      </Link>
                    </li>

                    <li>
                      <Link href="/blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/become-a-vendor">
                        Vendor
                      </Link>
                    </li>
                    <li>
                      <Link href="/outlet">
                        <a >Outlet</a>
                      </Link>
                    </li>

                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <a className="d-xl-show">
                  <i className="w-icon-map-marker mr-1" />
                  Track Order
                </a>
                <a>
                  <i className="w-icon-sale" />
                  Daily Deals
                </a>
              </div>
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

            </div>
          </div>

        </div>

      </header >
    </div >
  );
}

export default TopHeader;