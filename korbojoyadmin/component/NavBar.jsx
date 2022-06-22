import Link from "next/link";
import React from "react";
const NavBar = () => {
  return (
    <div>
      <aside className="app-navbar">
        <div className="sidebar-nav scrollbar scroll_light">
          <ul className="metismenu " id="sidebarNav">
            <li className="nav-static-title">E-commerce Admin</li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Dashboards</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce">
                    <a>Dashboards</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Add slider and ads</span>
                <span className="nav-label label label-danger">6</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/add-slider-and-ads">
                    <a>Add slider & ads</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-slider">
                    <a>List of slider</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-offer">
                    <a>List of offer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-ads">
                    <a>List of ads</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/add-blog">
                    <a>Add Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-blog-post">
                    <a>List of blogs</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Category</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/add-category">
                    <a>Add category</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-category">
                    <a>List of category</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-subcategory">
                    <a>List of Subcategory</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-brand">
                    <a>List of Brand</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Add Product</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/add-product">
                    <a>Add product</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">List of product</span>
                <span className="nav-label label label-danger">6</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/list-of-product">
                    <a>List of product</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-offer">
                    <a>List of offer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-flash-sales">
                    <a>List of flash sales</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-cash-back">
                    <a>List of cash back</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-discount">
                    <a>List of discount</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-package">
                    <a>List of product package</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Company stock</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/list-of-product-stock-qty">
                    <a>Product stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-package-stock-qty">
                    <a>Package stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/remainder-product-stock-qty">
                    <a> Remainder stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/remainder-product-package-stock-qty">
                    <a>Remainder package qty</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Update company stock</span>
                <span className="nav-label label label-danger">3</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/update-product-stock-qty">
                    <a>Update stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-update-product-stock-qty">
                    <a>Product stock qty & list</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-update-product-package-stock-qty">
                    <a> Package stock qty & list</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Daily product order</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/daily-pending-product-order">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/daily-process-product-order">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/daily-success-product-order">
                    <a>Success order </a>
                  </Link>
                </li>

                <li>
                  <Link href="/ecommerce/daily-cancel-product-order">
                    <a>Cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Daily product return</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/daily-pending-product-order-return">
                    <a>Pending return order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/daily-process-product-order-return">
                    <a>Return process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/daily-success-product-order-return">
                    <a>Success return order</a>
                  </Link>
                </li>

                <li>
                  <Link href="/ecommerce/daily-cancel-product-order-return">
                    <a>Return cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">All product return order </span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/all-product-pending-order-return">
                    <a>Pending return order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/all-product-process-order-return">
                    <a>Return process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/all-product-success-order-return">
                    <a>Success return order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/all-product-cancel-order-return">
                    <a>Return cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">All product order </span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/all-product-pending-order">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/all-product-process-order">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/all-product-success-order">
                    <a>Success order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/all-product-cancel-order">
                    <a>Cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Notice </span>
                <span className="nav-label label label-danger">2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/add-notice">
                    <a>Add Notice</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-notice">
                    <a>List of Notice</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Inquiry </span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/list-of-inquiry">
                    <a>List Of Inquiry</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">NewsFeed </span>
                <span className="nav-label label label-danger">2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/add-newsFeed">
                    <a>Add NewsFeed</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-newsFeed">
                    <a>List of NewsFeed</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-static-title">Agent Admin</li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Dashboards</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/">
                    <a>Dashboards</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Create agent</span>
                <span className="nav-label label label-danger">3</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/create-agent-and-subagent">
                    <a>Create agent & sub agent</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/list-of-agent">
                    <a>List of agent</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/list-of-sub-agent">
                    <a>List of sub agent</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Sign up request</span>
                <span className="nav-label label label-danger">2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/list-of-agent-request">
                    <a>List of agent request </a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/list-of-sub-agent-request">
                    <a>List of sub agent request </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Agent sales</span>
                <span className="nav-label label label-danger">2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/agent-sales-details">
                    <a>Agent sales details</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/sub-agent-sales-details">
                    <a>Sub agent sales details</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Agent purchase product</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/agent-purchase-product">
                    <a>Purchase product</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/agent/agent-purchase-package">
                    <a>Purchase package</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/agent/agent-order-pending">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-order-success">
                    <a>Success order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-order-cancel">
                    <a>Cancel order</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Agent return product</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/agent-return-product">
                    <a>Return product</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/agent/agent-return-package">
                    <a>Return package</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/agent/agent-return-pending-order">
                    <a> Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-return-success-order">
                    <a>Success order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-return-order-cancel">
                    <a>Cancel order</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Agent product stock</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/agent-product-stock-qty">
                    <a>Product stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-package-stock-qty">
                    <a>Package stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-remainder-stock-qty">
                    <a>Remainder stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-remainder-package-qty">
                    <a>Remainder package qty</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Order from user</span>
                <span className="nav-label label label-danger">6</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/agent-daily-order-from-user">
                    <a>Daily order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-pending-order-from-user">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-process-order-from-user">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-success-order-from-user">
                    <a>Success order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-cancel-order-from-user">
                    <a>Cancel order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-return-order-from-user">
                    <a>Return order</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Order from sub agent</span>
                <span className="nav-label label label-danger">6</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/agent-daily-order-from-sub-agent">
                    <a>Daily order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-pending-order-from-sub-agent">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-process-order-from-sub-agent">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-success-order-from-sub-agent">
                    <a>Success order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-cancel-order-from-sub-agent">
                    <a>Cancel order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-return-order-from-sub-agent">
                    <a>Return order</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* End agent admin */}

            {/* Start vendor admin */}
            <li className="nav-static-title">Vendor Admin</li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Dashboards</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/">
                    <a>Dashboards</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Create vendor</span>
                <span className="nav-label label label-danger">2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor/vendor-create">
                    <a>Create vendor</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/list-of-vendor">
                    <a>List of vendor</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Sign up request</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor/list-of-vendor-request">
                    <a>List of vendor request</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Vendor sales</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor/vendor-sales-details">
                    <a>Vendor sales details</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">List of product</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor/vendor-list-of-vendor-product">
                    <a>List of product</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/vendor/vendor-list-of-offer-product">
                    <a>List of offer product</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-list-of-flash-sales">
                    <a>List of flash sales</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-list-of-cash-back">
                    <a>List of cash back</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-list-of-discount">
                    <a>List of discount</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-list-of-product-package">
                    <a>List of product package</a>
                  </Link>
                </li> */}
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Vendor product stock</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor/vendor-product-stock-qty">
                    <a>Product stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-package-stock-qty">
                    <a>Package stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-remainder-stock-qty">
                    <a>Remainder stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-remainder-package-qty">
                    <a>Remainder package qty</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Order from user</span>
                <span className="nav-label label label-danger">5</span>
              </a>
              <ul aria-expanded="false">
                {/* <li>
                  <Link href="/vendor/vendor-daily-order-from-user">
                    <a>Daily order</a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/vendor/vendor-pending-order-from-user">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-process-order-from-user">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-success-order-from-user">
                    <a>Success order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-cancel-order-from-user">
                    <a>Cancel order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-return-order-from-user">
                    <a>Return order</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* End Vender admin */}

            {/* Start agent admin */}
            <li className="nav-static-title">Inventory</li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Dashboards</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce">
                    <a>Dashboards</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Category</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/add-category">
                    <a>Add category</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-category">
                    <a>List of category</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-subcategory">
                    <a>List of Subcategory</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-brand">
                    <a>List of Brand</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Add Product</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/add-product">
                    <a>Add product</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Company stock</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/list-of-product-stock-qty">
                    <a>Product stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-package-stock-qty">
                    <a>Package stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/remainder-product-stock-qty">
                    <a> Remainder stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/remainder-product-package-stock-qty">
                    <a>Remainder package qty</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Update company stock</span>
                <span className="nav-label label label-danger">3</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/update-product-stock-qty">
                    <a>Update stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-update-product-stock-qty">
                    <a>Product stock qty & list</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-update-product-package-stock-qty">
                    <a> Package stock qty & list</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title"> Agent product stock</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/agent-product-stock-qty">
                    <a>Product stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-package-stock-qty">
                    <a>Package stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-remainder-stock-qty">
                    <a>Remainder stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/agent-remainder-package-qty">
                    <a>Remainder package qty</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* End agent admin */}
            {/* Start vendor admin */}

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">List of product</span>
                <span className="nav-label label label-danger">6</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/ecommerce/list-of-product">
                    <a>List of product</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-offer">
                    <a>List of offer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-flash-sales">
                    <a>List of flash sales</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-cash-back">
                    <a>List of cash back</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-discount">
                    <a>List of discount</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce/list-of-product-package">
                    <a>List of product package</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Vendor product stock</span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor/vendor-product-stock-qty">
                    <a>Product stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-package-stock-qty">
                    <a>Package stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-remainder-stock-qty">
                    <a>Remainder stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor/vendor-remainder-package-qty">
                    <a>Remainder package qty</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
