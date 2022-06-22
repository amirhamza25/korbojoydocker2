import { getCookie, removeCookies } from "cookies-next";
import jwtDecode from "jwt-decode";
import Link from "next/link";

import { useEffect, useState } from "react";
const NavBar = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const checkToken = getCookie("token");
    const decodedToken = jwtDecode(checkToken);
    if (decodedToken.agentType === "Agent") {
      setToken(decodedToken);
      console.log(decodedToken);
    }
  }, []);
  const remove = () => {
    removeCookies("token");
    window.location.href = "http://localhost:3001";
  };
  return (
    <div>
      <aside className="app-navbar">
        <div className="sidebar-nav scrollbar scroll_light">
          <ul className="metismenu " id="sidebarNav">
            <li className="nav-static-title">Agent Admin</li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Dashboards</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/Home">
                    <a>Dashboards</a>
                  </Link>
                </li>
                <li>
                  <Link href="/agent/profile">
                    <a>Profile</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                <i className="nav-icon ti ti-rocket" />
                <span className="nav-title">Products</span>
                <span className="nav-label label label-danger">1</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/product">
                    <a>Products</a>
                  </Link>
                </li>
              </ul>
            </li>
            {token && (
              <>
                <li>
                  <a className="has-arrow" href="javascript:void(0)" aria-expanded="false">
                    <i className="nav-icon ti ti-rocket" />
                    <span className="nav-title">Create agent</span>
                    <span className="nav-label label label-danger">3</span>
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <Link href="/agent/create-agent-and-subagent">
                        <a>Create Agent</a>
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
                      <Link href="/agent/list-of-sub-agent-request">
                        <a>List of sub agent request </a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            )}

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
                <span className="nav-label label label-danger">5</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/agent-purchase-product">
                    <a>Purchase product</a>
                  </Link>
                </li>

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
                <span className="nav-label label label-danger">5</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <Link href="/agent/agent-return-product">
                    <a>Return product</a>
                  </Link>
                </li>

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
                <span className="nav-label label label-danger">4</span>
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
            <li>
              <a className="has-arrow" href="javascript:void(0)" aria-expanded="false" onClick={() => remove()}>
                <i className="nav-icon ti ti-rocket" />
                Log Out
              </a>
            </li>
            {/* End agent admin */}

            {/* Start vendor admin */}

            {/* End Vender admin */}

            {/* Start agent admin */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
