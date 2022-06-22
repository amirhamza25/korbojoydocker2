import axios from "axios";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { addToCartProductInfo, cartState } from "../../atom/addTocartAtom";
import useScript from "../../commonFunction/ReloadJs";
function singleProductView(props) {
  useScript("/assets/js/main.min.js");

  const proDetails = props.data[0];
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

  return (
    <div>
      {/* Start of Main */}
      <main className="main mb-10 pb-1">
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav container">
          <ul className="breadcrumb bb-no">
            <li>
              <a href="demo1.html">Home</a>
            </li>
            <li>Products</li>
          </ul>
          <ul className="product-nav list-style-none">
            <li className="product-nav-prev">
              <a href="#">
                <i className="w-icon-angle-left" />
              </a>
              <span className="product-nav-popup">
                <img src="assets/images/products/product-nav-prev.jpg" alt="Product" width={110} height={110} />
                <span className="product-name">Soft Sound Maker</span>
              </span>
            </li>
            <li className="product-nav-next">
              <a href="#">
                <i className="w-icon-angle-right" />
              </a>
              <span className="product-nav-popup">
                <img src="assets/images/products/product-nav-next.jpg" alt="Product" width={110} height={110} />
                <span className="product-name">{proDetails.name}</span>
              </span>
            </li>
          </ul>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of Page Content */}
        <div className="page-content">
          <div className="container">
            <div className="row gutter-lg">
              <div className="main-content">
                <div className="product product-single row">
                  <div className="col-md-6 mb-4 mb-md-8">
                    <div className="product-gallery product-gallery-sticky">
                      <div
                        className="swiper-container product-single-swiper swiper-theme nav-inner"
                        data-swiper-options="{
                                      'navigation': {
                                          'nextEl': '.swiper-button-next',
                                          'prevEl': '.swiper-button-prev'
                                      }
                                  }"
                      >
                        <div className="swiper-wrapper row cols-1 gutter-no">
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src={"https://baybridgebd.com/upload/" + JSON.parse(proDetails.img)}
                                data-zoom-image={"https://baybridgebd.com/upload/" + JSON.parse(proDetails.img)}
                                alt="Fashion Table Sound Marker"
                                style={{ width: "400px", height: "400px" }}
                              />
                            </figure>
                          </div>
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src={"https://baybridgebd.com/upload/" + JSON.parse(proDetails.img)}
                                data-zoom-image={"https://baybridgebd.com/upload/" + JSON.parse(proDetails.img)}
                                alt="Fashion Table Sound Marker"
                                style={{ width: "400px", height: "400px" }}
                              />
                            </figure>
                          </div>
                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src={"https://baybridgebd.com/upload/" + JSON.parse(proDetails.img)}
                                data-zoom-image={"https://baybridgebd.com/upload/" + JSON.parse(proDetails.img)}
                                alt="Fashion Table Sound Marker"
                                style={{ width: "400px", height: "400px" }}
                              />
                            </figure>
                          </div>

                          <div className="swiper-slide">
                            <figure className="product-image">
                              <img
                                src={"https://baybridgebd.com/upload/" + JSON.parse(proDetails.img)}
                                data-zoom-image={"https://baybridgebd.com/upload/" + JSON.parse(proDetails.img)}
                                alt="Fashion Table Sound Marker"
                                style={{ width: "400px", height: "400px" }}
                              />
                            </figure>
                          </div>
                        </div>
                        <button className="swiper-button-next" />
                        <button className="swiper-button-prev" />
                        <a href="#" className="product-gallery-btn product-image-full">
                          <i className="w-icon-zoom" />
                        </a>
                      </div>
                      <div
                        className="product-thumbs-wrap swiper-container"
                        data-swiper-options="{
                                      'navigation': {
                                          'nextEl': '.swiper-button-next',
                                          'prevEl': '.swiper-button-prev'
                                      }
                                  }"
                      >
                        {" "}
                        <button className="swiper-button-next" />
                        <button className="swiper-button-prev" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-6 mb-md-8">
                    <div className="product-details" data-sticky-options="{'minWidth': 767}">
                      <h1 className="product-title">{proDetails.name}</h1>
                      <div className="product-bm-wrapper">
                        {/* <figure className="brand">
                          <img src={"https://baybridgebd.com/upload/" + JSON.parse(proDetails.img)} alt="Brand" width={120} height={120} />
                        </figure> */}
                        <div className="product-meta">
                          <div className="product-categories">
                            Category:
                            <span className="product-category">
                              <a href="#">Electronics</a>
                            </span>
                          </div>
                          <div className="product-sku">
                            SKU: <span>{proDetails.brandCode}</span>
                          </div>
                        </div>
                      </div>
                      <hr className="product-divider" />
                      <div className="product-price">৳{proDetails.buyPrice}</div>
                      <div className="ratings-container">
                        <div className="ratings-full">
                          <span className="ratings" style={{ width: "80%" }} />
                          <span className="tooltiptext tooltip-top" />
                        </div>
                      </div>

                      <div className="product-short-desc">
                        <ul className="list-type-check list-style-none">
                          <p>{proDetails.shortDescription}</p>
                        </ul>
                      </div>
                      <hr className="product-divider" />
                      {/* <div className="product-form product-variation-form product-image-swatch">
                        <label>Color:</label>
                        <div className="d-flex align-items-center product-variations">
                          <a href="#" className="image">
                            <img src="assets/images/products/swatch/1-800x900.jpg" alt="Product Swatch" width={24} height={24} />
                          </a>
                          <a href="#" className="image">
                            <img src="assets/images/products/swatch/7-800x900.jpg" alt="Product Swatch" width={24} height={24} />
                          </a>
                          <a href="#" className="image">
                            <img src="assets/images/products/swatch/8-800x900.jpg" alt="Product Swatch" width={24} height={24} />
                          </a>
                          <a href="#" className="image">
                            <img src="assets/images/products/swatch/14-800x900.jpg" alt="Product Swatch" width={24} height={24} />
                          </a>
                        </div>
                      </div> */}
                      {/* <div className="product-form product-variation-form product-size-swatch">
                        <label className="mb-1">Size:</label>
                        <div className="flex-wrap d-flex align-items-center product-variations">
                          <a href="#" className="size">
                            Small
                          </a>
                          <a href="#" className="size">
                            Medium
                          </a>
                          <a href="#" className="size">
                            Large
                          </a>
                          <a href="#" className="size">
                            Extra Large
                          </a>
                        </div>
                        <a href="#" className="product-variation-clean">
                          Clean All
                        </a>
                      </div> */}
                      <div className="product-variation-price"></div>
                      <div>
                        <div className="product-form">
                          <button className="btn btn-primary" onClick={() => cartUpdate(proDetails)} style={{ width: "190px" }}>
                            <i className="w-icon-cart" />
                            <span>Add to Cart</span>
                          </button>

                          {cart[proDetails.id] && (
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => {
                                cartRemove(proDetails);
                              }}
                              style={{ width: "190px" }}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab tab-nav-boxed tab-nav-underline product-tabs">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a href="#product-tab-description" className="nav-link active">
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#product-tab-specification" className="nav-link">
                        Specification
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a href="#product-tab-vendor" className="nav-link">
                        Vendor Info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#product-tab-reviews" className="nav-link">
                        Customer Reviews (3)
                      </a>
                    </li> */}
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="product-tab-description">
                      <div className="row mb-4">
                        <div className="col-md-6 mb-5">
                          <h4 className="title tab-pane-title font-weight-bold mb-2">Detail</h4>
                          <p className="mb-4">{proDetails.fullDescription}</p>
                        </div>
                        {/* <div className="col-md-6 mb-5">
                          <div className="banner banner-video product-video br-xs">
                            <figure className="banner-media">
                              <a href="#">
                                <img
                                  src="assets/images/products/video-banner-610x300.jpg"
                                  alt="banner"
                                  width={610}
                                  height={300}
                                  style={{ backgroundColor: "#bebebe" }}
                                />
                              </a>
                              <a className="btn-play-video btn-iframe" href="assets/video/memory-of-a-woman.mp4" />
                            </figure>
                          </div>
                        </div> */}
                      </div>
                      <div className="row cols-md-3">
                        <div className="mb-3">
                          <h5 className="sub-title font-weight-bold">
                            <span className="mr-3">1.</span>Free Shipping &amp; Return
                          </h5>
                          <p className="detail pl-5">We offer free shipping for products on orders above 50৳ and offer free delivery for all orders in US.</p>
                        </div>
                        <div className="mb-3">
                          <h5 className="sub-title font-weight-bold">
                            <span>2.</span>Free and Easy Returns
                          </h5>
                          <p className="detail pl-5">We guarantee our products and you could get back all of your money anytime you want in 30 days.</p>
                        </div>
                        <div className="mb-3">
                          <h5 className="sub-title font-weight-bold">
                            <span>3.</span>Special Financing
                          </h5>
                          <p className="detail pl-5">Get 20%-50% off items over 50৳ for a month or over 250৳ for a year with our special credit card.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="product-tab-specification">
                      <ul className="list-none">
                        <li>
                          <label>Model</label>
                          <p>Skysuite 320</p>
                        </li>
                        <li>
                          <label>Color</label>
                          <p>Black</p>
                        </li>
                        <li>
                          <label>Size</label>
                          <p>Large, Small</p>
                        </li>
                        <li>
                          <label>Guarantee Time</label>
                          <p>3 Months</p>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="product-tab-vendor">
                      <div className="row mb-3">
                        <div className="col-md-6 mb-4">
                          <figure className="vendor-banner br-sm">
                            <img
                              src="assets/images/products/vendor-banner.jpg"
                              alt="Vendor Banner"
                              width={610}
                              height={295}
                              style={{ backgroundColor: "#353B55" }}
                            />
                          </figure>
                        </div>
                        <div className="col-md-6 pl-2 pl-md-6 mb-4">
                          <div className="vendor-user">
                            <figure className="vendor-logo mr-4">
                              <a href="#">
                                <img src="assets/images/products/vendor-logo.jpg" alt="Vendor Logo" width={80} height={80} />
                              </a>
                            </figure>
                            <div>
                              <div className="vendor-name">
                                <a href="#">Jone Doe</a>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span className="ratings" style={{ width: "90%" }} />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <a href="#" className="rating-reviews">
                                  (32 Reviews)
                                </a>
                              </div>
                            </div>
                          </div>
                          <ul className="vendor-info list-style-none">
                            <li className="store-name">
                              <label>Store Name:</label>
                              <span className="detail">OAIO Store</span>
                            </li>
                            <li className="store-address">
                              <label>Address:</label>
                              <span className="detail">Steven Street, El Carjon, CA 92020, United States (US)</span>
                            </li>
                            <li className="store-phone">
                              <label>Phone:</label>
                              <a href="#tel:">1234567890</a>
                            </li>
                          </ul>
                          <a href="vendor-dokan-store.html" className="btn btn-dark btn-link btn-underline btn-icon-right">
                            Visit Store
                            <i className="w-icon-long-arrow-right" />
                          </a>
                        </div>
                      </div>
                      <p className="mb-5">
                        <strong className="text-dark">L</strong>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Venenatis tellus in metus vulputate eu scelerisque felis. Vel pretium lectus quam id leo in vitae turpis
                        massa. Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam id diam maecenas ultricies mi eget mauris. Volutpat
                        ac tincidunt vitae semper quis lectus. Vestibulum mattis ullamcorper velit sed. A arcu cursus vitae congue mauris.
                      </p>
                      <p className="mb-2">
                        <strong className="text-dark">A</strong> arcu cursus vitae congue mauris. Sagittis id consectetur purus ut. Tellus rutrum tellus
                        pellentesque eu tincidunt tortor aliquam nulla. Diam in arcu cursus euismod quis. Eget sit amet tellus cras adipiscing enim eu. In
                        fermentum et sollicitudin ac orci phasellus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. In dictum non
                        consectetur a erat. Nunc scelerisque viverra mauris in aliquam sem fringilla.
                      </p>
                    </div>
                    <div className="tab-pane" id="product-tab-reviews">
                      <div className="row mb-4">
                        <div className="col-xl-4 col-lg-5 mb-4">
                          <div className="ratings-wrapper">
                            <div className="avg-rating-container">
                              <h4 className="avg-mark font-weight-bolder ls-50">3.3</h4>
                              <div className="avg-rating">
                                <p className="text-dark mb-1">Average Rating</p>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span className="ratings" style={{ width: "60%" }} />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a href="#" className="rating-reviews">
                                    (3 Reviews)
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="ratings-value d-flex align-items-center text-dark ls-25">
                              <span className="text-dark font-weight-bold">66.7%</span>
                              Recommended<span className="count">(2 of 3)</span>
                            </div>
                            <div className="ratings-list">
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span className="ratings" style={{ width: "100%" }} />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm ">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>70%</mark>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span className="ratings" style={{ width: "80%" }} />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm ">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>30%</mark>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span className="ratings" style={{ width: "60%" }} />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm ">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>40%</mark>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span className="ratings" style={{ width: "40%" }} />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm ">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>0%</mark>
                                </div>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span className="ratings" style={{ width: "20%" }} />
                                  <span className="tooltiptext tooltip-top" />
                                </div>
                                <div className="progress-bar progress-bar-sm ">
                                  <span />
                                </div>
                                <div className="progress-value">
                                  <mark>0%</mark>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 mb-4">
                          <div className="review-form-wrapper">
                            <h3 className="title tab-pane-title font-weight-bold mb-1">Submit Your Review</h3>
                            <p className="mb-3">Your email address will not be published. Required fields are marked *</p>
                            <form action="#" method="POST" className="review-form">
                              <div className="rating-form">
                                <label htmlFor="rating">Your Rating Of This Product :</label>
                                <span className="rating-stars">
                                  <a className="star-1" href="#">
                                    1
                                  </a>
                                  <a className="star-2" href="#">
                                    2
                                  </a>
                                  <a className="star-3" href="#">
                                    3
                                  </a>
                                  <a className="star-4" href="#">
                                    4
                                  </a>
                                  <a className="star-5" href="#">
                                    5
                                  </a>
                                </span>
                                <select name="rating" id="rating" required style={{ display: "none" }}>
                                  <option value>Rate…</option>
                                  <option value={5}>Perfect</option>
                                  <option value={4}>Good</option>
                                  <option value={3}>Average</option>
                                  <option value={2}>Not that bad</option>
                                  <option value={1}>Very poor</option>
                                </select>
                              </div>
                              <textarea cols={30} rows={6} placeholder="Write Your Review Here..." className="form-control" id="review" defaultValue={""} />
                              <div className="row gutter-md">
                                <div className="col-md-6">
                                  <input type="text" className="form-control" placeholder="Your Name" id="author" />
                                </div>
                                <div className="col-md-6">
                                  <input type="text" className="form-control" placeholder="Your Email" id="email_1" />
                                </div>
                              </div>
                              <div className="form-group">
                                <input type="checkbox" className="custom-checkbox" id="save-checkbox" />
                                <label htmlFor="save-checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
                              </div>
                              <button type="submit" className="btn btn-dark">
                                Submit Review
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tab tab-nav-boxed tab-nav-outline tab-nav-center">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a href="#show-all" className="nav-link active">
                              Show All
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#helpful-positive" className="nav-link">
                              Most Helpful Positive
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#helpful-negative" className="nav-link">
                              Most Helpful Negative
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#highest-rating" className="nav-link">
                              Highest Rating
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#lowest-rating" className="nav-link">
                              Lowest Rating
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="show-all">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img src="assets/images/agents/1-100x100.png" alt="Commenter Avatar" width={90} height={90} />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <a href="#">John Doe</a>
                                      <span className="comment-date">March 22, 2021 at 1:54 pm</span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span className="ratings" style={{ width: "60%" }} />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      pellentesque habitant morbi tristique senectus et. In dictum non consectetur a erat. Nunc ultrices eros in cursus turpis
                                      massa tincidunt ante in nibh mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a href="#" className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a href="#" className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <a href="#">
                                          <figure>
                                            <img
                                              src="assets/images/products/default/review-img-1.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="assets/images/products/default/review-img-1-800x900.jpg"
                                            />
                                          </figure>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img src="assets/images/agents/2-100x100.png" alt="Commenter Avatar" width={90} height={90} />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <a href="#">John Doe</a>
                                      <span className="comment-date">March 22, 2021 at 1:52 pm</span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span className="ratings" style={{ width: "80%" }} />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      Nullam a magna porttitor, dictum risus nec, faucibus sapien. Ultrices eros in cursus turpis massa tincidunt ante in nibh
                                      mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a href="#" className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a href="#" className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <a href="#">
                                          <figure>
                                            <img
                                              src="assets/images/products/default/review-img-2.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="assets/images/products/default/review-img-2.jpg"
                                            />
                                          </figure>
                                        </a>
                                        <a href="#">
                                          <figure>
                                            <img
                                              src="assets/images/products/default/review-img-3.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="assets/images/products/default/review-img-3.jpg"
                                            />
                                          </figure>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img src="assets/images/agents/3-100x100.png" alt="Commenter Avatar" width={90} height={90} />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <a href="#">John Doe</a>
                                      <span className="comment-date">March 22, 2021 at 1:21 pm</span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span className="ratings" style={{ width: "60%" }} />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      In fermentum et sollicitudin ac orci phasellus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus
                                      et. In dictum non consectetur a erat. Nunc scelerisque viverra mauris in aliquam sem fringilla.
                                    </p>
                                    <div className="comment-action">
                                      <a href="#" className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-up" />
                                        Helpful (0)
                                      </a>
                                      <a href="#" className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (1)
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="helpful-positive">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img src="assets/images/agents/1-100x100.png" alt="Commenter Avatar" width={90} height={90} />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <a href="#">John Doe</a>
                                      <span className="comment-date">March 22, 2021 at 1:54 pm</span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span className="ratings" style={{ width: "60%" }} />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      pellentesque habitant morbi tristique senectus et. In dictum non consectetur a erat. Nunc ultrices eros in cursus turpis
                                      massa tincidunt ante in nibh mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a href="#" className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a href="#" className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <a href="#">
                                          <figure>
                                            <img
                                              src="assets/images/products/default/review-img-1.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="assets/images/products/default/review-img-1.jpg"
                                            />
                                          </figure>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img src="assets/images/agents/2-100x100.png" alt="Commenter Avatar" width={90} height={90} />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <a href="#">John Doe</a>
                                      <span className="comment-date">March 22, 2021 at 1:52 pm</span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span className="ratings" style={{ width: "80%" }} />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      Nullam a magna porttitor, dictum risus nec, faucibus sapien. Ultrices eros in cursus turpis massa tincidunt ante in nibh
                                      mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a href="#" className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a href="#" className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <a href="#">
                                          <figure>
                                            <img
                                              src="assets/images/products/default/review-img-2.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="assets/images/products/default/review-img-2-800x900.jpg"
                                            />
                                          </figure>
                                        </a>
                                        <a href="#">
                                          <figure>
                                            <img
                                              src="assets/images/products/default/review-img-3.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="assets/images/products/default/review-img-3-800x900.jpg"
                                            />
                                          </figure>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="helpful-negative">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img src="assets/images/agents/3-100x100.png" alt="Commenter Avatar" width={90} height={90} />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <a href="#">John Doe</a>
                                      <span className="comment-date">March 22, 2021 at 1:21 pm</span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span className="ratings" style={{ width: "60%" }} />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      In fermentum et sollicitudin ac orci phasellus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus
                                      et. In dictum non consectetur a erat. Nunc scelerisque viverra mauris in aliquam sem fringilla.
                                    </p>
                                    <div className="comment-action">
                                      <a href="#" className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-up" />
                                        Helpful (0)
                                      </a>
                                      <a href="#" className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (1)
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="highest-rating">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img src="assets/images/agents/2-100x100.png" alt="Commenter Avatar" width={90} height={90} />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <a href="#">John Doe</a>
                                      <span className="comment-date">March 22, 2021 at 1:52 pm</span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span className="ratings" style={{ width: "80%" }} />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      Nullam a magna porttitor, dictum risus nec, faucibus sapien. Ultrices eros in cursus turpis massa tincidunt ante in nibh
                                      mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a href="#" className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a href="#" className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <a href="#">
                                          <figure>
                                            <img
                                              src="assets/images/products/default/review-img-2.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="assets/images/products/default/review-img-2-800x900.jpg"
                                            />
                                          </figure>
                                        </a>
                                        <a href="#">
                                          <figure>
                                            <img
                                              src="assets/images/products/default/review-img-3.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="assets/images/products/default/review-img-3-800x900.jpg"
                                            />
                                          </figure>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="tab-pane" id="lowest-rating">
                            <ul className="comments list-style-none">
                              <li className="comment">
                                <div className="comment-body">
                                  <figure className="comment-avatar">
                                    <img src="assets/images/agents/1-100x100.png" alt="Commenter Avatar" width={90} height={90} />
                                  </figure>
                                  <div className="comment-content">
                                    <h4 className="comment-author">
                                      <a href="#">John Doe</a>
                                      <span className="comment-date">March 22, 2021 at 1:54 pm</span>
                                    </h4>
                                    <div className="ratings-container comment-rating">
                                      <div className="ratings-full">
                                        <span className="ratings" style={{ width: "60%" }} />
                                        <span className="tooltiptext tooltip-top" />
                                      </div>
                                    </div>
                                    <p>
                                      pellentesque habitant morbi tristique senectus et. In dictum non consectetur a erat. Nunc ultrices eros in cursus turpis
                                      massa tincidunt ante in nibh mauris cursus mattis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.
                                    </p>
                                    <div className="comment-action">
                                      <a href="#" className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-up" />
                                        Helpful (1)
                                      </a>
                                      <a href="#" className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize">
                                        <i className="far fa-thumbs-down" />
                                        Unhelpful (0)
                                      </a>
                                      <div className="review-image">
                                        <a href="#">
                                          <figure>
                                            <img
                                              src="assets/images/products/default/review-img-3.jpg"
                                              width={60}
                                              height={60}
                                              alt="Attachment image of John Doe's review on Electronics Black Wrist Watch"
                                              data-zoom-image="assets/images/products/default/review-img-3-800x900.jpg"
                                            />
                                          </figure>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <section className="vendor-product-section">
                  <div className="title-link-wrapper mb-4">
                    <h4 className="title text-left">More Products From This Vendor</h4>
                    <a href="#" className="btn btn-dark btn-link btn-slide-right btn-icon-right">
                      More Products
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 2,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 3
                                  },
                                  '768': {
                                      'slidesPerView': 4
                                  },
                                  '992': {
                                      'slidesPerView': 3
                                  }
                              }
                          }"
                  >
                    <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                      {props.recentItem.map((user) => (
                        <div className="swiper-slide product-wrap mb-0">
                          <div className="product text-center product-absolute">
                            <figure className="brand">
                              <a>
                                {" "}
                                <img src={"https://baybridgebd.com/upload/" + JSON.parse(user.img)} alt="Product" width={300} height={338} />
                              </a>
                            </figure>
                            <h4 className="product-name">
                              <Link href={"/product-details/[productId]"} as={`/product-details/${user.id}`}>
                                <a>
                                  {" "}
                                  <a href="">{user.name}</a>
                                </a>
                              </Link>
                            </h4>
                          </div>
                        </div>
                      ))}

                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img src="assets/images/products/default/5.jpg" alt="Product" width={300} height={338} />
                          </a>
                          <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-product btn-quickview" title="Quick View">
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Drone</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: "100%" }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">$632.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img src="assets/images/products/default/6.jpg" alt="Product" width={300} height={338} />
                          </a>
                          <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-product btn-quickview" title="Quick View">
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Official Camera</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: "100%" }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">
                              <ins className="new-price">$263.00</ins>
                              <del className="old-price">$300.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img src="assets/images/products/default/7-1.jpg" alt="Product" width={300} height={338} />
                            <img src="assets/images/products/default/7-2.jpg" alt="Product" width={300} height={338} />
                          </a>
                          <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-product btn-quickview" title="Quick View">
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Phone Charge Pad</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: "80%" }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                              (8 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">$23.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img src="assets/images/products/default/8.jpg" alt="Product" width={300} height={338} />
                          </a>
                          <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-product btn-quickview" title="Quick View">
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Fashionalble Pencil</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: "100%" }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                              (9 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">$50.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> */}
                <section className="related-product-section">
                  <div className="title-link-wrapper mb-4">
                    <h4 className="title">Related Products</h4>
                    <a href="#" className="btn btn-dark btn-link btn-slide-right btn-icon-right">
                      More Products
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper-options="{
                              'spaceBetween': 20,
                              'slidesPerView': 2,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 3
                                  },
                                  '768': {
                                      'slidesPerView': 4
                                  },
                                  '992': {
                                      'slidesPerView': 3
                                  }
                              }
                          }"
                  >
                    <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                      {props.recentItem.map((user) => (
                        <div className="swiper-slide product-wrap mb-0">
                          <div className="product text-center product-absolute">
                            <figure className="brand">
                              <a href={`/product-details/${user.id}`}>
                                <Link href={"/product-details/[productId]"} as={`/product-details/${user.id}`}>
                                  <img
                                    src={process.env.API_URL + "/upload/" + JSON.parse(user.img)}
                                    alt="Product"
                                    width={300}
                                    height={338}
                                    style={{ height: "180px", objectFit: "cover" }}
                                  />
                                </Link>
                              </a>
                            </figure>
                            <h4 className="product-name">
                              <Link href={"/product-details/[productId]"} as={`/product-details/${user.id}`}>
                                <a>
                                  {" "}
                                  <a href="">{user.name}</a>
                                </a>
                              </Link>
                            </h4>
                          </div>
                        </div>
                      ))}

                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img src="assets/images/products/default/5.jpg" alt="Product" width={300} height={338} />
                          </a>
                          <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-product btn-quickview" title="Quick View">
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Drone</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: "100%" }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">৳632.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img src="assets/images/products/default/6.jpg" alt="Product" width={300} height={338} />
                          </a>
                          <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-product btn-quickview" title="Quick View">
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Official Camera</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: "100%" }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                              (3 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">
                              <ins className="new-price">৳263.00</ins>
                              <del className="old-price">৳300.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img src="assets/images/products/default/7-1.jpg" alt="Product" width={300} height={338} />
                            <img src="assets/images/products/default/7-2.jpg" alt="Product" width={300} height={338} />
                          </a>
                          <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-product btn-quickview" title="Quick View">
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Phone Charge Pad</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: "80%" }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                              (8 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">৳23.00</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product">
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img src="assets/images/products/default/8.jpg" alt="Product" width={300} height={338} />
                          </a>
                          <div className="product-action-vertical">
                            <a href="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <a href="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                            <a href="#" className="btn-product-icon btn-compare w-icon-compare" title="Add to Compare" />
                          </div>
                          <div className="product-action">
                            <a href="#" className="btn-product btn-quickview" title="Quick View">
                              Quick View
                            </a>
                          </div>
                        </figure>
                        <div className="product-details">
                          <h4 className="product-name">
                            <a href="product-default.html">Fashionalble Pencil</a>
                          </h4>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: "100%" }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                              (9 reviews)
                            </a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price">৳50.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* End of Main Content */}
              <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
                <div className="sidebar-overlay" />
                <a className="sidebar-close" href="#">
                  <i className="close-icon" />
                </a>
                <a href="#" className="sidebar-toggle d-flex d-lg-none">
                  <i className="fas fa-chevron-left" />
                </a>
                <div className="sidebar-content scrollable">
                  <div className="sticky-sidebar">
                    <div className="widget widget-icon-box mb-6">
                      <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                          <i className="w-icon-truck" />
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">Free Shipping &amp; Returns</h4>
                          <p>For all orders over ৳99</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                          <i className="w-icon-bag" />
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">Secure Payment</h4>
                          <p>We ensure secure payment</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side">
                        <span className="icon-box-icon text-dark">
                          <i className="w-icon-money" />
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">Money Back Guarantee</h4>
                          <p>Any back within 30 days</p>
                        </div>
                      </div>
                    </div>
                    {/* End of Widget Icon Box */}
                    {/* <div className="widget widget-banner mb-9">
                      <div className="banner banner-fixed br-sm">
                        <figure>
                          <img src="assets/images/shop/banner3.jpg" alt="Banner" width={266} height={220} style={{ backgroundColor: "#1D2D44" }} />
                        </figure>
                        <div className="banner-content">
                          <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                            40<sup className="font-weight-bold">%</sup>
                            <sub className="font-weight-bold text-uppercase ls-25">Off</sub>
                          </div>
                          <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">Ultimate Sale</h4>
                        </div>
                      </div>
                    </div> */}
                    {/* End of Widget Banner */}
                    <div className="widget widget-products">
                      <div className="title-link-wrapper mb-2">
                        <h4 className="title title-link font-weight-bold">More Products</h4>
                      </div>
                      <div className="swiper nav-top">
                        <div
                          className="swiper-container swiper-theme nav-top"
                          data-swiper-options="{
                                          'slidesPerView': 1,
                                          'spaceBetween': 20,
                                          'navigation': {
                                              'prevEl': '.swiper-button-prev',
                                              'nextEl': '.swiper-button-next'
                                          }
                                      }"
                        >
                          <div className="widget widget-collapsible widget-products">
                            {props.getCatagoryWisieProduct.map((item, index) => (
                              <div>
                                {item.products.map((item1, index1) => (
                                  <div className="widget-body">
                                    <div className="product product-widget">
                                      <figure className="product-media">
                                        <a href={`/product-details/${item1.id}`}>
                                          <Link href={"/product-details/[productId]"} as={`/product-details/${item1.id}`}>
                                            <img
                                              src={process.env.API_URL + "/upload/" + JSON.parse(item1.img)}
                                              alt="Product"
                                              style={{ width: "100px", height: "100px" }}
                                            />
                                          </Link>
                                        </a>
                                      </figure>
                                      <div className="product-details">
                                        <h4 className="product-name">
                                          <Link href={"/product-details/[productId]"} as={`/product-details/${item1.id}`}>
                                            {item1.name}
                                          </Link>
                                        </h4>
                                        <div className="ratings-container">
                                          <div className="ratings-full">
                                            <span className="ratings" style={{ width: "100%" }} />
                                            <span className="tooltiptext tooltip-top" />
                                          </div>
                                        </div>
                                        <div className="product-price">
                                          <ins className="new-price">{item1.realPrice}</ins>
                                          <del className="old-price">{item1.buyPrice}</del>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                          <button className="swiper-button-next" />
                          <button className="swiper-button-prev" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              {/* End of Sidebar */}
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
  const id = context.params.productId;

  const { data: getCatagoryWisieProduct } = await axios.get(process.env.API_URL + "/api/ev1/GetCategoryWishProduct");
  const { data } = await axios.get(process.env.API_URL + "/api/ev1/SingleProductDetails/" + id);

  const { data: recentItem } = await axios.get(process.env.API_URL + "/api/ev1/RecentProduct");

  return {
    props: { data, getCatagoryWisieProduct, recentItem },
  };
}

export default singleProductView;
