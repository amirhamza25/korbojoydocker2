import React from "react";

const TopHeader = () => {
  return (
    <div>
      <header className="app-header top-bar">
        <nav className="navbar navbar-expand-md">
          <div className="navbar-header d-flex align-items-center">
            <a href="javascript:void:(0)" className="mobile-toggle">
              <i className="ti ti-align-right" />
            </a>
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logo.png" className="img-fluid logo-desktop" alt="logo" />
              <img src="assets/img/logo-icon.png" className="img-fluid logo-mobile" alt="logo" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti ti-align-left" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navigation d-flex">
              <ul className="navbar-nav nav-left">
                <li className="nav-item">
                  <a href="javascript:void(0)" className="nav-link sidebar-toggle">
                    <i className="ti ti-align-right" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link  "
                    href="javascript:void(0)"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Mega Menu
                    <i className="fa fa-angle-down" />
                  </a>
                  <div className="dropdown-menu mega-menu animated fadeIn" aria-labelledby="navbarDropdown">
                    <div className="row no-gutters">
                      <div className="col-sm-2 p-20">
                        <h4>UI Kit</h4>
                        <ul>
                          <li className="nav-link">
                            <a href="ui-alerts.html">Alerts</a>
                          </li>
                          <li className="nav-link">
                            <a href="ui-button.html">Buttons</a>
                          </li>
                          <li className="nav-link">
                            <a href="ui-cards.html">Cards</a>
                          </li>
                          <li className="nav-link">
                            <a href="ui-carousel.html">Carousel</a>
                          </li>
                          <li className="nav-link">
                            <a href="ui-dropdowns.html">Dropdowns</a>
                          </li>
                          <li className="nav-link">
                            <a href="ui-list-group.html">List Group</a>
                          </li>
                          <li className="nav-link">
                            <a href="ui-modals.html">Modals</a>
                          </li>
                          <li className="nav-link">
                            <a href="ui-progressbars.html">Progress Bars</a>
                          </li>
                          <li className="nav-link">
                            <a href="ui-tabs.html">Tabs</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-2 p-20">
                        <h4>Pages</h4>
                        <ul>
                          <li className="nav-link">
                            <a href="page-account-settings.html">Account Settings</a>
                          </li>
                          <li className="nav-link">
                            <a href="page-clients.html">Clients</a>
                          </li>
                          <li className="nav-link">
                            <a href="page-contacts.html">Contacts</a>
                          </li>
                          <li className="nav-link">
                            <a href="page-gallery.html">Gallery</a>
                          </li>
                          <li className="nav-link">
                            <a href="page-pricing.html">Pricing</a>
                          </li>
                          <li className="nav-link">
                            <a href="page-task-list.html">Task List</a>
                          </li>
                          <li className="nav-link">
                            <a href="page-404.html">404</a>
                          </li>
                          <li className="nav-link">
                            <a href="page-500.html">500</a>
                          </li>
                          <li className="nav-link">
                            <a href="page-coming-soon.html">Coming Soon</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4 p-20">
                        <h4>Contact Us</h4>
                        <div>
                          <form>
                            <div className="form-group">
                              <input type="text" className="form-control" id="Password1" placeholder="Enter Name" />
                            </div>
                            <div className="form-group">
                              <input type="email" className="form-control" id="Email1" placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                              <textarea className="form-control" placeholder="Message" id="Textarea1" rows={3} defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-primary text-uppercase">
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="chart-wrap">
                          <div className="p-20">
                            <h4 className="mb-1">Page Views</h4>
                            <p>Daily page visitors</p>
                            <h2 className="text-primary font-xxl mt-2">80+</h2>
                          </div>
                          <div className="apexchart-wrapper">
                            <div id="pageview" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript:void(0)"
                    className="nav-link "
                    id="navbarDropdown1"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Drop Down
                    <i className="fa fa-angle-down" />
                  </a>
                  <div className="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item nav-link" href="javascript:void(0)">
                      Action
                    </a>
                    <a className="dropdown-item nav-link" href="javascript:void(0)">
                      Another action
                    </a>
                    <a className="dropdown-item nav-link" href="javascript:void(0)">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item full-screen d-none d-lg-block" id="btnFullscreen">
                  <a href="javascript:void(0)" className="nav-link expand">
                    <i className="icon-size-fullscreen" />
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav nav-right ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="javascript:void(0)"
                    id="navbarDropdown2"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="ti ti-email" />
                  </a>
                  <div className="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                    <ul>
                      <li className="dropdown-header bg-gradient p-4 text-white text-left">
                        Messages
                        <label className="label label-info label-round">6</label>
                        <a href="#" className="float-right btn btn-square btn-inverse-light btn-xs m-0">
                          <span className="font-13"> Mark all as read</span>
                        </a>
                      </li>
                      <li className="dropdown-body">
                        <ul className="scrollbar scroll_dark max-h-240">
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <img className="img-fluid" src="assets/img/avtar/03.jpg" alt="user3" />
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">Brianing Leyon</p>
                                  <small>You will sail along until you...</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <img className="img-fluid" src="assets/img/avtar/01.jpg" alt="user" />
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">Jimmyimg Leyon</p>
                                  <small>Okay</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <img className="img-fluid" src="assets/img/avtar/02.jpg" alt="user2" />
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">Brainjon Leyon</p>
                                  <small>So, make the decision...</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <img className="img-fluid" src="assets/img/avtar/04.jpg" alt="user4" />
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">Smithmin Leyon</p>
                                  <small>Thanks</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <img className="img-fluid" src="assets/img/avtar/05.jpg" alt="user5" />
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">Jennyns Leyon</p>
                                  <small>How are you</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <img className="img-fluid" src="assets/img/avtar/06.jpg" alt="user6" />
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">Demian Leyon</p>
                                  <small>I like your themes</small>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-footer">
                        <a className="font-13" href="javascript:void(0)">
                          View All messages
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="javascript:void(0)"
                    id="navbarDropdown3"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fe fe-bell" />
                    <span className="notify">
                      <span className="blink" />
                      <span className="dot" />
                    </span>
                  </a>
                  <div className="dropdown-menu extended animated fadeIn" aria-labelledby="navbarDropdown">
                    <ul>
                      <li className="dropdown-header bg-gradient p-4 text-white text-left">
                        Notifications
                        <a href="#" className="float-right btn btn-square btn-inverse-light btn-xs m-0">
                          <span className="font-13"> Clear all</span>
                        </a>
                      </li>
                      <li className="dropdown-body min-h-240 nicescroll">
                        <ul className="scrollbar scroll_dark max-h-240">
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <div className="bg-type bg-type-md">
                                    <span>HY</span>
                                  </div>
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">New registered user</p>
                                  <small>Just now</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <div className="bg-type bg-type-md bg-success">
                                    <span>GM</span>
                                  </div>
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">New invoice received</p>
                                  <small>22 min</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <div className="bg-type bg-type-md bg-danger">
                                    <span>FR</span>
                                  </div>
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">Server error report</p>
                                  <small>7 min</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <div className="bg-type bg-type-md bg-info">
                                    <span>HT</span>
                                  </div>
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">Database report</p>
                                  <small>1 day</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <div className="notification d-flex flex-row align-items-center">
                                <div className="notify-icon bg-img align-self-center">
                                  <div className="bg-type bg-type-md">
                                    <span>DE</span>
                                  </div>
                                </div>
                                <div className="notify-message">
                                  <p className="font-weight-bold">Order confirmation</p>
                                  <small>2 day</small>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-footer">
                        <a className="font-13" href="javascript:void(0)">
                          View All Notifications
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link search" href="javascript:void(0)">
                    <i className="ti ti-search" />
                  </a>
                  <div className="search-wrapper">
                    <div className="close-btn">
                      <i className="ti ti-close" />
                    </div>
                    <div className="search-content">
                      <form>
                        <div className="form-group">
                          <i className="ti ti-search magnifier" />
                          <input type="text" className="form-control autocomplete" placeholder="Search Here" id="autocomplete-ajax" autofocus="autofocus" />
                        </div>
                      </form>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown user-profile">
                  <a
                    href="javascript:void(0)"
                    className="nav-link dropdown-toggle "
                    id="navbarDropdown4"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src="assets/img/avtar/02.jpg" alt="avtar-img" />
                    <span className="bg-success user-status" />
                  </a>
                  <div className="dropdown-menu animated fadeIn" aria-labelledby="navbarDropdown">
                    <div className="bg-gradient px-4 py-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="mr-1">
                          <h4 className="text-white mb-0">Alice Williams</h4>
                          <small className="text-white">Henry@example.com</small>
                        </div>
                        <a
                          href="#"
                          className="text-white font-20 tooltip-wrapper"
                          data-toggle="tooltip"
                          data-placement="top"
                          title
                          data-original-title="Logout"
                        >
                          <i className="zmdi zmdi-power" />
                        </a>
                      </div>
                    </div>
                    <div className="p-4">
                      <a className="dropdown-item d-flex nav-link" href="javascript:void(0)">
                        <i className="fa fa-user pr-2 text-success" /> Profile
                      </a>
                      <a className="dropdown-item d-flex nav-link" href="javascript:void(0)">
                        <i className="fa fa-envelope pr-2 text-primary" /> Inbox
                        <span className="badge badge-primary ml-auto">6</span>
                      </a>
                      <a className="dropdown-item d-flex nav-link" href="javascript:void(0)">
                        <i className=" ti ti-settings pr-2 text-info" /> Settings
                      </a>
                      <a className="dropdown-item d-flex nav-link" href="javascript:void(0)">
                        <i className="fa fa-compass pr-2 text-warning" /> Need help?
                      </a>
                      <div className="row mt-2">
                        <div className="col">
                          <a className="bg-light p-3 text-center d-block" href="#">
                            <i className="fe fe-mail font-20 text-primary" />
                            <span className="d-block font-13 mt-2">My messages</span>
                          </a>
                        </div>
                        <div className="col">
                          <a className="bg-light p-3 text-center d-block" href="#">
                            <i className="fe fe-plus font-20 text-primary" />
                            <span className="d-block font-13 mt-2">Compose new</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default TopHeader;
