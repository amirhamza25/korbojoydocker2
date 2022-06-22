import React from "react";
import useScript from "../commonFunction/ReloadJs";

function vendorDetails() {
  useScript("/assets/js/main.min.js");

  return (
    <div>
      {/* Start of Main */}
      <main className="main">
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb bb-no">
              <li>
                <a href="demo1.html">Home</a>
              </li>
              <li>
                <a href="#">Vendor</a>
              </li>
              <li>
                <a href="#">WC Marketplace</a>
              </li>
              <li>Store List</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        {/* Start of Pgae Contetn */}
        <div className="page-content mb-8">
          <div className="container">
            {/* Start of Vendor Map */}
            <div className="vendor-map br-sm">
              <div className="google-map" id="googlemaps" />
              <div className="vendor-map-filter">
                <input
                  type="search"
                  className="form-control mb-2"
                  placeholder="Enter Address"
                  name="address"
                  id="address"
                  required
                />
                <div className="select-box mb-2">
                  <select name="distanceby" className="form-control">
                    <option value="within" selected="selected">
                      Within
                    </option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                  </select>
                </div>
                <div className="select-box mb-2">
                  <select name="distanceby" className="form-control">
                    <option value="mile" selected="selected">
                      Miles
                    </option>
                    <option value="kilometer">Kilometers</option>
                    <option value="nautical">Nautical miles</option>
                  </select>
                </div>
                <a href="#" className="btn btn-dark btn-rounded mb-2">
                  Submit
                </a>
              </div>
            </div>
            {/* End of Vendor Map */}
            {/* Start of Vendor Filter */}
            <div className="vendor-filter mb-4">
              <div className="vendor-filter-left mr-auto">
                <div className="select-box mb-2 mr-2">
                  <select name="sortby" className="form-control">
                    <option value="date" selected="selected">
                      By date
                    </option>
                    <option value="alphabet">By Alphabetically</option>
                    <option value="category">By Category</option>
                    <option value="shipping">By Shipping</option>
                  </select>
                </div>
                <a href="#" className="btn btn-rounded mb-2 mr-4">
                  Sort
                </a>
              </div>
              <div className="vendor-filter-right">
                <label className="d-inline-block font-size-md text-dark mb-2">
                  Viewing all 6 vendors
                </label>
              </div>
            </div>
            {/* End of Vendor Filter */}
            {/* Start of Vendor Store */}
            <div className="row cols-lg-3 cols-sm-2">
              <div className="store-wrap mb-4">
                <div className="store store-wcmp br-sm">
                  <figure className="store-banner">
                    <img
                      src="assets/images/vendor/wcmp/1.jpg"
                      alt="Vendor"
                      width={400}
                      height={318}
                      style={{ backgroundColor: "#454b63" }}
                    />
                  </figure>
                  <div className="store-content">
                    <figure className="seller-brand">
                      <img
                        src="assets/images/vendor/brand/1.jpg"
                        alt="Brand"
                        width={80}
                        height={80}
                      />
                    </figure>
                    <div className="seller-date">
                      <h4 className="store-title">
                        <a href="https://www.portotheme.com/html/wolmart/vendor-wcmp-store.html">
                          Vendor 1
                        </a>
                      </h4>
                      <ul className="seller-info-list list-style-none">
                        <li className="store-address">
                          <i className="w-icon-map-marker" />
                          <p>
                            287 cherry Hill Ave. South El Monte, CA 91733, Aland
                            lslands
                          </p>
                        </li>
                        <li className="store-rating">
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End of Store */}
              </div>
              <div className="store-wrap mb-4">
                <div className="store store-wcmp br-sm">
                  <figure className="store-banner">
                    <img
                      src="assets/images/vendor/wcmp/2.jpg"
                      alt="Vendor"
                      width={400}
                      height={318}
                      style={{ backgroundColor: "#6a6867" }}
                    />
                  </figure>
                  <div className="store-content">
                    <figure className="seller-brand">
                      <img
                        src="assets/images/vendor/brand/2.jpg"
                        alt="Brand"
                        width={80}
                        height={80}
                      />
                    </figure>
                    <div className="seller-date">
                      <h4 className="store-title">
                        <a href="https://www.portotheme.com/html/wolmart/vendor-wcmp-store.html">
                          Vendor 2
                        </a>
                      </h4>
                      <ul className="seller-info-list list-style-none">
                        <li className="store-address">
                          <i className="w-icon-map-marker" />
                          <p>
                            Fuchu, Hiroshima, Thai Nguyen, Hiroshima,
                            Japan,27000
                          </p>
                        </li>
                        <li className="store-rating">
                          <i className="w-icon-star-full" />
                          <p>No Rating Yet</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End of Store */}
              </div>
              <div className="store-wrap mb-4">
                <div className="store store-wcmp br-sm">
                  <figure className="store-banner">
                    <img
                      src="assets/images/vendor/wcmp/3.jpg"
                      alt="Vendor"
                      width={400}
                      height={318}
                      style={{ backgroundColor: "#5a5958" }}
                    />
                  </figure>
                  <div className="store-content">
                    <figure className="seller-brand">
                      <img
                        src="assets/images/vendor/brand/3.jpg"
                        alt="Brand"
                        width={80}
                        height={80}
                      />
                    </figure>
                    <div className="seller-date">
                      <h4 className="store-title">
                        <a href="https://www.portotheme.com/html/wolmart/vendor-wcmp-store.html">
                          Vendor 3
                        </a>
                      </h4>
                      <ul className="seller-info-list list-style-none">
                        <li className="store-address">
                          <i className="w-icon-map-marker" />
                          <p>
                            848 Baker Rd, Huntsville, AL 35803, Minato, Tokyo,
                            Japan, 12000
                          </p>
                        </li>
                        <li className="store-rating">
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End of Store */}
              </div>
              <div className="store-wrap mb-4">
                <div className="store store-wcmp br-sm">
                  <figure className="store-banner">
                    <img
                      src="assets/images/vendor/wcmp/4.jpg"
                      alt="Vendor"
                      width={400}
                      height={318}
                      style={{ backgroundColor: "#585e65" }}
                    />
                  </figure>
                  <div className="store-content">
                    <figure className="seller-brand">
                      <img
                        src="assets/images/vendor/brand/4.jpg"
                        alt="Brand"
                        width={80}
                        height={80}
                      />
                    </figure>
                    <div className="seller-date">
                      <h4 className="store-title">
                        <a href="https://www.portotheme.com/html/wolmart/vendor-wcmp-store.html">
                          Vendor 4
                        </a>
                      </h4>
                      <ul className="seller-info-list list-style-none">
                        <li className="store-address">
                          <i className="w-icon-map-marker" />
                          <p>
                            908 New Hampshire Avenue #100, Washington, United
                            States
                          </p>
                        </li>
                        <li className="store-rating">
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End of Store */}
              </div>
              <div className="store-wrap mb-4">
                <div className="store store-wcmp br-sm">
                  <figure className="store-banner">
                    <img
                      src="assets/images/vendor/wcmp/5.jpg"
                      alt="Vendor"
                      width={400}
                      height={318}
                      style={{ backgroundColor: "#27282c" }}
                    />
                  </figure>
                  <div className="store-content">
                    <figure className="seller-brand">
                      <img
                        src="assets/images/vendor/brand/5.jpg"
                        alt="Brand"
                        width={80}
                        height={80}
                      />
                    </figure>
                    <div className="seller-date">
                      <h4 className="store-title">
                        <a href="https://www.portotheme.com/html/wolmart/vendor-wcmp-store.html">
                          Vendor 5
                        </a>
                      </h4>
                      <ul className="seller-info-list list-style-none">
                        <li className="store-address">
                          <i className="w-icon-map-marker" />
                          <p>
                            Fuchu, Hiroshima, Thai Nguyen, Hiroshima,
                            Japan,27000
                          </p>
                        </li>
                        <li className="store-rating">
                          <i className="w-icon-star-full" />
                          <p>No Rating Yet</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End of Store */}
              </div>
              <div className="store-wrap mb-4">
                <div className="store store-wcmp br-sm">
                  <figure className="store-banner">
                    <img
                      src="assets/images/vendor/wcmp/6.jpg"
                      alt="Vendor"
                      width={400}
                      height={318}
                      style={{ backgroundColor: "#a387b8" }}
                    />
                  </figure>
                  <div className="store-content">
                    <figure className="seller-brand">
                      <img
                        src="assets/images/vendor/brand/6.jpg"
                        alt="Brand"
                        width={80}
                        height={80}
                      />
                    </figure>
                    <div className="seller-date">
                      <h4 className="store-title">
                        <a href="https://www.portotheme.com/html/wolmart/vendor-wcmp-store.html">
                          Vendor 6
                        </a>
                      </h4>
                      <ul className="seller-info-list list-style-none">
                        <li className="store-address">
                          <i className="w-icon-map-marker" />
                          <p>
                            848 Baker Rd, Huntsville, AL 35803, Minato, Tokyo,
                            Japan, 12000
                          </p>
                        </li>
                        <li className="store-rating">
                          <i className="w-icon-star-full" />
                          <p>No Rating Yet</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End of Store */}
              </div>
            </div>
            {/* End of Vendor Store */}
          </div>
        </div>
        {/* End of Page Content */}
      </main>
      {/* End of Main */}
    </div>
  );
}

export default vendorDetails;
