import axios from "axios";
import React from "react";
import useScript from "../commonFunction/ReloadJs";
function blogDetails() {
  useScript("/assets/js/main.min.js");

  return (
    <div>
      {/* Start of Main */}
      <main className="main">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">{token ? "This is my ecommerce site" : ""} Blog Details</h1>
          </div>
        </div>
        {/* End of Page Header */}
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>Blog Single</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of Page Content */}
        <div className="page-content mb-8">
          <div className="container">
            <div className="row gutter-lg">
              <div className="main-content post-single-content">
                <div className="post post-grid post-single">
                  <figure className="post-media br-sm">
                    <img src="assets/images/blog/single/1.jpg" alt="Blog" width={930} height={500} />
                  </figure>
                  <div className="post-details">
                    <div className="post-meta">
                      by{" "}
                      <a href="#" className="post-author">
                        John Doe
                      </a>
                      -{" "}
                      <a href="#" className="post-date">
                        03.01.2021
                      </a>
                      <a href="#" className="post-comment">
                        <i className="w-icon-comments" />
                        <span>0</span>Comments
                      </a>
                    </div>
                    <h2 className="post-title">
                      <a href="#">Fashion tells about who you are from external point</a>
                    </h2>
                    <div className="post-content">
                      <p>
                        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed
                        egstas, ant at vulputate volutpat, uctus metus libero eu augue, vitae luctus metus libero eu augue.{" "}
                      </p>
                      <p>
                        Morbi purus libero, faucibus adi piscing, com modo quis, gravida iest. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                        at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. pede arcu, dapibus
                        eu, fermen tum et, dapibus sed, urna. <a href="#">Morbi interdum mollis sapien.</a>
                        Sed ac risus. Pha sellus lacinia, magna a laoreet, lect us arcu pulvinar risus, vitae fac ilisis libero dolor a purus.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Post */}
                <blockquote className="text-center mb-8">
                  <i className="fas fa-quote-left" />
                  <p className="font-weight-bold text-dark mt-1 mb-2">War and Marketing Have Many Similarities</p>
                  <cite className="font-weight-normal text-dark">JELLY CRISTIANA</cite>
                </blockquote>
                {/* End Blockquote */}
                <p className="mb-10">
                  Morbi interdum mollis sapien. Sed ac risus. Pha sellus lacinia, magna a laoreet, lect us arcu pulvinar risus, vitae fac ilisis libeo dolor.
                  Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
                </p>
                <h4 className="title title-md font-weight-bold">Defaulting to Mindfulness: The Third Person Effect</h4>
                <p className="mb-2">
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, da pibus id, mattis vel, nisi. Sed pretium, ligula soll
                  itudin laoreet viverra. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultric
                  sagittis, mi neque euismod duin.
                </p>
                <ul className="list-style-none list-type-check">
                  <li>Nunc nec porttitor turpis. In eu risus enim neque, aliquet ve In vitae mollis elit.</li>
                  <li>Vivamus finibus vel mauris eu risus enut vehicula.</li>
                  <li>Nullam a magna porttitor, dictum risus nec, fauci eu risus enbus sapien.</li>
                  <li>Ultrices eros in eu risus encursus turpis massa tincidunt ante.</li>
                </ul>
                <p>Nibh ipsum consequat nisl vel. Non arcu risus quis varius quam quisque id diam vel. Eu turpis egestas pharetra.</p>

                <div className="post-navigation">
                  <div className="nav nav-prev">
                    <a href="#" className="align-items-start text-left">
                      <span>
                        <i className="w-icon-long-arrow-left" />
                        previous post
                      </span>
                      <span className="nav-content mb-0 text-normal">Vivamus vestibulum ntulla nec ante</span>
                    </a>
                  </div>
                  <div className="nav nav-next">
                    <a href="#" className="align-items-end text-right">
                      <span>
                        next post
                        <i className="w-icon-long-arrow-right" />
                      </span>
                      <span className="nav-content mb-0 text-normal">Fusce lacinia arcuet nulla</span>
                    </a>
                  </div>
                </div>
                {/* End Post Navigation */}
                <h4 className="title title-lg font-weight-bold mt-10 pt-1 mb-5">Related Posts</h4>
                <div className="swiper">
                  <div
                    className="post-slider swiper-container swiper-theme nav-top pb-2"
                    data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 1,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 2
                                  },
                                  '768': {
                                      'slidesPerView': 3
                                  },
                                  '992': {
                                      'slidesPerView': 2
                                  },
                                  '1200': {
                                      'slidesPerView': 3
                                  }
                              }
                          }"
                  >
                    <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-xs-2 cols-1">
                      <div className="swiper-slide post post-grid">
                        <figure className="post-media br-sm">
                          <a href="post-single.html">
                            <img src="assets/images/blog/single/2.jpg" alt="Post" width={296} height={190} style={{ backgroundColor: "#bcbcb4" }} />
                          </a>
                        </figure>
                        <div className="post-details text-center">
                          <div className="post-meta">
                            by{" "}
                            <a href="#" className="post-author">
                              Logan Cee
                            </a>
                            -{" "}
                            <a href="#" className="post-date">
                              03.05.2021
                            </a>
                          </div>
                          <h4 className="post-title mb-3">
                            <a href="post-single.html">Fashion tell about who you are from...</a>
                          </h4>
                          <a href="post-single.html" className="btn btn-link btn-dark btn-underline font-weight-normal">
                            Read More
                            <i className="w-icon-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide post post-grid">
                        <figure className="post-media br-sm">
                          <a href="post-single.html">
                            <img src="assets/images/blog/single/3.jpg" alt="Post" width={296} height={190} style={{ backgroundColor: "#cad2d1" }} />
                          </a>
                        </figure>
                        <div className="post-details text-center">
                          <div className="post-meta">
                            by{" "}
                            <a href="#" className="post-author">
                              Hilary Kreton
                            </a>
                            -{" "}
                            <a href="#" className="post-date">
                              03.05.2021
                            </a>
                          </div>
                          <h4 className="post-title mb-3">
                            <a href="post-single.html">Comes a cool blog post with Images</a>
                          </h4>
                          <a href="post-single.html" className="btn btn-link btn-dark btn-underline font-weight-normal">
                            Read More
                            <i className="w-icon-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide post post-grid">
                        <figure className="post-media br-sm">
                          <a href="post-single.html">
                            <img src="assets/images/blog/single/4.jpg" alt="Post" width={296} height={190} style={{ backgroundColor: "#ececec" }} />
                          </a>
                        </figure>
                        <div className="post-details text-center">
                          <div className="post-meta">
                            by{" "}
                            <a href="#" className="post-author">
                              Casper Dailn
                            </a>
                            -{" "}
                            <a href="#" className="post-date">
                              03.05.2021
                            </a>
                          </div>
                          <h4 className="post-title mb-3">
                            <a href="post-single.html">Comes a cool blog post with Images</a>
                          </h4>
                          <a href="post-single.html" className="btn btn-link btn-dark btn-underline font-weight-normal">
                            Read More
                            <i className="w-icon-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide post post-grid">
                        <figure className="post-media br-sm">
                          <a href="post-single.html">
                            <img src="assets/images/blog/single/5.jpg" alt="Post" width={296} height={190} style={{ backgroundColor: "#AFAFAF" }} />
                          </a>
                        </figure>
                        <div className="post-details text-center">
                          <div className="post-meta">
                            by{" "}
                            <a href="#" className="post-author">
                              John Doe
                            </a>
                            -{" "}
                            <a href="#" className="post-date">
                              03.05.2021
                            </a>
                          </div>
                          <h4 className="post-title mb-3">
                            <a href="post-single.html">We want to be different and fashion gives to me that outlet</a>
                          </h4>
                          <a href="post-single.html" className="btn btn-link btn-dark btn-underline font-weight-normal">
                            Read More
                            <i className="w-icon-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <button className="swiper-button-next" />
                    <button className="swiper-button-prev" />
                  </div>
                </div>
              </div>
              {/* End of Main Content */}
              <aside className="sidebar right-sidebar blog-sidebar sidebar-fixed sticky-sidebar-wrapper">
                <div className="sidebar-overlay">
                  <a href="#" className="sidebar-close">
                    <i className="close-icon" />
                  </a>
                </div>
                <a href="#" className="sidebar-toggle">
                  <i className="fas fa-chevron-left" />
                </a>
                <div className="sidebar-content">
                  <div className="sticky-sidebar">
                    <div className="widget widget-search-form">
                      <div className="widget-body">
                        <form action="#" method="GET" className="input-wrapper input-wrapper-inline">
                          <input type="text" className="form-control" placeholder="Search in Blog" autoComplete="off" required />
                          <button className="btn btn-search">
                            <i className="w-icon-search" />
                          </button>
                        </form>
                      </div>
                    </div>
                    {/* End of Widget search form */}
                    <div className="widget widget-categories">
                      <h3 className="widget-title bb-no mb-0">Categories</h3>
                      <ul className="widget-body filter-items search-ul">
                        <li>
                          <a href="blog.html">Clothes</a>
                        </li>
                        <li>
                          <a href="blog.html">Entertainment</a>
                        </li>
                        <li>
                          <a href="blog.html">Fashion</a>
                        </li>
                        <li>
                          <a href="blog.html">Lifestyle</a>
                        </li>
                        <li>
                          <a href="blog.html">Others</a>
                        </li>
                        <li>
                          <a href="blog.html">Shoes</a>
                        </li>
                        <li>
                          <a href="blog.html">Technology</a>
                        </li>
                      </ul>
                    </div>
                    {/* End of Widget categories */}
                    <div className="widget widget-posts">
                      <h3 className="widget-title bb-no">Popular Posts</h3>
                      <div className="widget-body">
                        <div className="swiper">
                          <div
                            className="swiper-container swiper-theme nav-top"
                            data-swiper-options="{
                                              'spaceBetween': 20,
                                              'slidesPerView': 1
                                          }"
                          >
                            <div className="swiper-wrapper row cols-1">
                              <div className="swiper-slide widget-col">
                                <div className="post-widget mb-4">
                                  <figure className="post-media br-sm">
                                    <img src="assets/images/blog/sidebar/1.jpg" alt={150} height={150} />
                                  </figure>
                                  <div className="post-details">
                                    <div className="post-meta">
                                      <a href="#" className="post-date">
                                        March 1, 2021
                                      </a>
                                    </div>
                                    <h4 className="post-title">
                                      <a href="post-single.html">Fashion tells about who you are from external point</a>
                                    </h4>
                                  </div>
                                </div>
                                <div className="post-widget mb-4">
                                  <figure className="post-media br-sm">
                                    <img src="assets/images/blog/sidebar/2.jpg" alt={150} height={150} />
                                  </figure>
                                  <div className="post-details">
                                    <div className="post-meta">
                                      <a href="#" className="post-date">
                                        March 5, 2021
                                      </a>
                                    </div>
                                    <h4 className="post-title">
                                      <a href="post-single.html">New found the men dress for summer</a>
                                    </h4>
                                  </div>
                                </div>
                                <div className="post-widget mb-2">
                                  <figure className="post-media br-sm">
                                    <img src="assets/images/blog/sidebar/3.jpg" alt={150} height={150} />
                                  </figure>
                                  <div className="post-details">
                                    <div className="post-meta">
                                      <a href="#" className="post-date">
                                        March 1, 2021
                                      </a>
                                    </div>
                                    <h4 className="post-title">
                                      <a href="post-single.html">Cras ornare tristique elit</a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                              <div className="swiper-slide widget-col">
                                <div className="post-widget mb-4">
                                  <figure className="post-media br-sm">
                                    <img src="assets/images/blog/sidebar/4.jpg" alt={150} height={150} />
                                  </figure>
                                  <div className="post-details">
                                    <div className="post-meta">
                                      <a href="#" className="post-date">
                                        March 1, 2021
                                      </a>
                                    </div>
                                    <h4 className="post-title">
                                      <a href="post-single.html">Vivamus vestibulum ntulla nec ante</a>
                                    </h4>
                                  </div>
                                </div>
                                <div className="post-widget mb-4">
                                  <figure className="post-media br-sm">
                                    <img src="assets/images/blog/sidebar/5.jpg" alt={150} height={150} />
                                  </figure>
                                  <div className="post-details">
                                    <div className="post-meta">
                                      <a href="#" className="post-date">
                                        March 5, 2021
                                      </a>
                                    </div>
                                    <h4 className="post-title">
                                      <a href="post-single.html">Fusce lacinia arcuet nulla</a>
                                    </h4>
                                  </div>
                                </div>
                                <div className="post-widget mb-2">
                                  <figure className="post-media br-sm">
                                    <img src="assets/images/blog/sidebar/6.jpg" alt={150} height={150} />
                                  </figure>
                                  <div className="post-details">
                                    <div className="post-meta">
                                      <a href="#" className="post-date">
                                        March 1, 2021
                                      </a>
                                    </div>
                                    <h4 className="post-title">
                                      <a href="post-single.html">Comes a cool blog post with Images</a>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button className="swiper-button-next" />
                            <button className="swiper-button-prev" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of Widget posts */}
                    <div className="widget widget-custom-block">
                      <h3 className="widget-title bb-no">Custom Block</h3>
                      <div className="widget-body">
                        <p className="text-default mb-0">
                          Fringilla urna porttitor rhoncus dolor purus. Luctus veneneratis lectus magna fring. Suspendisse potenti. Sed egestas, ante et
                          vulputate volutpat, uctus metus libero.
                        </p>
                      </div>
                    </div>
                    {/* End of Widget custom block */}
                    <div className="widget widget-tags">
                      <h3 className="widget-title bb-no">Browse Tags</h3>
                      <div className="widget-body tags">
                        <a href="#" className="tag">
                          Fashion
                        </a>
                        <a href="#" className="tag">
                          Style
                        </a>
                        <a href="#" className="tag">
                          Travel
                        </a>
                        <a href="#" className="tag">
                          Women
                        </a>
                        <a href="#" className="tag">
                          Men
                        </a>
                        <a href="#" className="tag">
                          Hobbies
                        </a>
                        <a href="#" className="tag">
                          Shopping
                        </a>
                        <a href="#" className="tag">
                          Photography
                        </a>
                      </div>
                    </div>
                    <div className="widget widget-calendar">
                      <h3 className="widget-title bb-no">Calendar</h3>
                      <div className="widget-body">
                        <div
                          className="calendar-container"
                          data-calendar-options="{
                                          'dayExcerpt': 1
                                      }"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/* End of Page Content */}
      </main>
      {/* End of Main */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");

  const { data: getCatagoryWisieProduct } = await axios.get(process.env.API_URL + "/api/ev1/GetCategoryWishProduct");

  const { data: getAllBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk=1");

  const { data: recentItem } = await axios.get(process.env.API_URL + "/api/ev1/RecentProduct");

  const { data: recentAllBlog } = await axios.get(process.env.API_URL + "/api/ev1/RecentAllBlog");

  const { data: getVendorInfo } = await axios.get(process.env.API_URL + "/GetVendorInfo");

  return {
    props: { getCatagory, getAllBrand, getCatagoryWisieProduct, recentItem, recentAllBlog, getVendorInfo },
  };
}
export default blogDetails;
