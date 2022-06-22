import { removeCookies } from "cookies-next";
import Link from "next/link";
const NavBar = () => {
  const remove = () => {
    removeCookies("token");
    window.location.href = "http://localhost:3000";
  };
  return (
    <div>
      <aside className="app-navbar">
        <div className="sidebar-nav scrollbar scroll_light">
          <ul className="metismenu " id="sidebarNav">
            <li className="nav-static-title">E-commerce Member</li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Dashboards</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
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
                <span className="nav-title">Daily product order</span>
                <span className="nav-label label label-danger">5</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/daily-order">
                    <a>Daily order</a>
                  </Link>
                  <Link href="/daily-pending-product-order">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/daily-process-product-order">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/daily-success-product-order">
                    <a>Success order </a>
                  </Link>
                </li>

                <li>
                  <Link href="/daily-cancel-product-order">
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
                  <Link href="/daily-pending-product-order-return">
                    <a>Pending return order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/daily-process-product-order-return">
                    <a>Return process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/daily-success-product-order-return">
                    <a>Success return order</a>
                  </Link>
                </li>

                <li>
                  <Link href="/daily-cancel-product-order-return">
                    <a>Return cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Total product order </span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/all-product-pending-order">
                    <a>Pending order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-process-order">
                    <a>Process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-success-order">
                    <a>Success order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-cancel-order">
                    <a>Cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Total product return </span>
                <span className="nav-label label label-danger">4</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/all-product-pending-order-return">
                    <a>Pending return order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-process-order-return">
                    <a>Return process order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-success-order-return">
                    <a>Success return order</a>
                  </Link>
                </li>
                <li>
                  <Link href="/all-product-cancel-order-return">
                    <a>Return cancel order </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Notice</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/notice">
                    <a>Notice Board</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Inquiry</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/inquiry">
                    <a>Inquiry </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Order Track</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/order-track">
                    <a>Order Track</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">News Feed</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/news-feed">
                    <a>News Feed </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false" onClick={() => remove()}>
                <i className="nav-icon ti ti-rocket" />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
