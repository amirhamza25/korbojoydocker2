import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { addToCartProductInfo, cartState } from "../../atom/addTocartAtom";
import { productState } from "../../atom/FilterProducts";
import useScript from "../../commonFunction/ReloadJs";
import Sidebar from "../../component/layout/Sidebar";
import Products from "../../component/products/products";
function categoryWiseProduct(props) {
  useScript("/assets/js/main.min.js");

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

  const AllProductInfo = props.getCatagoryWiseProductShow["0"].products;

  const [pd, setPd] = useRecoilState(productState);

  useEffect(() => {
    setPd(AllProductInfo);
  }, [setPd]);

  // console.log(pd);

  return (
    <div>
      {/* Start of Main */}
      <div className="container">
        <div
          style={{
            backgroundColor: "#FFC74E",
          }}
        >
          {props.getCatagoryWiseProductShow.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: ` url(${"https://baybridgebd.com/upload/" + item.brandicon})`,
                width: "100%",
                height: "300px",
                objectFit: "fill",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ))}
        </div>
      </div>
      <main className="main">
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <a href="shop-banner-sidebar.html">Categories</a>
              </li>
              {props.getCatagoryWiseProductShow.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="page-wrapper">
          {/* Start of Main */}
          <main className="main">
            <div className="page-content">
              <div className="container">
                <div className="shop-default-category category-ellipse-section mb-6">
                  <div
                    className="swiper-container swiper-theme shadow-swiper"
                    data-swiper-options="{
                        'spaceBetween': 20,
                        'slidesPerView': 2,
                        'breakpoints': {
                            '480': {
                                'slidesPerView': 3
                            },
                            '576': {
                                'slidesPerView': 4
                            },
                            '768': {
                                'slidesPerView': 6
                            },
                            '992': {
                                'slidesPerView': 7
                            },
                            '1200': {
                                'slidesPerView': 8,
                                'spaceBetween': 30
                            }
                        }
                    }"
                  >
                    <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
                      {props.getAllBrand.data.map((item, index) => (
                        <div key={index} className="swiper-slide category-wrap">
                          <div className="category category-ellipse">
                            <figure className="category-media">
                              <Link href={"/brand-wise-product/[brand-wise-product]"} as={`/brand-wise-product/${item.id}`}>
                                {/* <Link href={"/brand-wise-product/[brandId]"} as={`/brand-wise-product/${item.id}`}> */}
                                <img
                                  src={process.env.API_URL + "/upload/" + item.mobileicon}
                                  alt="Categroy"
                                  width={190}
                                  height={190}
                                  style={{ height: "120px", width: "100%", objectFit: "fill" }}
                                />
                              </Link>
                            </figure>

                            <div className="category-content">
                              <h4 className="category-name">
                                <Link href={"/brand-wise-product/[brand-wise-product]"} as={`/brand-wise-product/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* End of Breadcrumb */}
        {/* Start of Page Content */}
        <div className="page-content">
          <div className="container">
            {/* Start of Shop Banner */}
            <dir></dir>

            <div className="shop-content row gutter-lg mb-10">
              <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
                <div className="sidebar-overlay" />
                <a className="sidebar-close" href="#">
                  <i className="close-icon" />
                </a>

                <div className="sidebar-content scrollable">
                  <div className="sticky-sidebar">
                    <Sidebar></Sidebar>
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <span>Color</span>
                      </h3>
                      <ul className="widget-body filter-items item-check mt-1">
                        <li>
                          <a href="#">Black</a>
                        </li>
                        <li>
                          <a href="#">Blue</a>
                        </li>
                        <li>
                          <a href="#">Brown</a>
                        </li>
                        <li>
                          <a href="#">Green</a>
                        </li>
                        <li>
                          <a href="#">Grey</a>
                        </li>
                        <li>
                          <a href="#">Orange</a>
                        </li>
                        <li>
                          <a href="#">Yellow</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="main-content">
                <Products />
                <div className="toolbox toolbox-pagination justify-content-between">
                  <p className="showing-info mb-2 mb-sm-0">
                    Showing<span>1-12 of 60</span>Products
                  </p>
                  <ul className="pagination">
                    <li className="prev disabled">
                      <a href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                        <i className="w-icon-long-arrow-left" />
                        Prev
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="next">
                      <a href="#" aria-label="Next">
                        Next
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.categoryId;

  const { data: getCatagoryWiseProductShow } = await axios.get(process.env.API_URL + "/api/ev1/CategoryAllProduct/" + id);

  const { data: getAllBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk=1");

  return {
    props: { getCatagoryWiseProductShow, getAllBrand },
  };
}

export default categoryWiseProduct;
