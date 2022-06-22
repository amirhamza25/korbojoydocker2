import Link from "next/link";
import React from "react";
const NavBar = () => {
  return (
    <div>
      <aside className="app-navbar">
        <div className="sidebar-nav scrollbar scroll_light">
          <ul className="metismenu " id="sidebarNav">
            {/* Start vendor admin */}
            <li className="nav-static-title">Vendor Panel</li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Dashboards</span>
                <span className="nav-label label label-danger">2</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/">
                    <a>Dashboards</a>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Vendor Password Change</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-password-change">
                    <a>Password Change</a>
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
                  <Link href="/add-product">
                    <a>Add product</a>
                  </Link>
                </li>
                <li>
                  <Link href="/list-of-product">
                    <a>List of product</a>
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
                  <Link href="/vendor-product-stock-qty">
                    <a>Product stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-package-stock-qty">
                    <a>Package stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-remainder-stock-qty">
                    <a>Remainder stock qty</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-remainder-package-qty">
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
                  <Link href="/vendor-pending-order-from-user">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-success-order-from-user">
                    <a>Success order</a>
                  </Link>
                </li>

                <li>
                  <Link href="/vendor-process-order-from-user">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-picked-order-from-user">
                    <a>Picked order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-delivered-order-from-user">
                    <a>Delivery order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-cancel-order-from-user">
                    <a>Cancel order </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-return-order-from-user">
                    <a>Return order</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Transaction History</span>
                <span className="nav-label label label-danger">3</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-account-summary-from-user">
                    <a>Account Summary</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tab">
                    <a>Balance Withdrawal</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vendor-withdrawal-report-from-user">
                    <a>Withdrawal Report</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Announcement</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-announcement">
                    <a>Announcement</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Faq</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-faq">
                    <a>Faq</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Account Statement</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/vendor-account-statement">
                    <a>Account Statement</a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* End Vender admin */}

            {/* Start agent admin */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
