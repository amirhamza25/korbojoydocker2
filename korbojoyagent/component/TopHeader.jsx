import useScript from "../commonFunction/ReloadJs";

const TopHeader = () => {
  useScript("/assets/js/app.js");
  return (
    <div>
      <header className="app-header top-bar">
        <nav className="navbar navbar-expand-md">
          <div className="navbar-header d-flex align-items-center">
            <a href="javascript:void:(0)" className="mobile-toggle">
              <i className="ti ti-align-right" />
            </a>
            <a className="navbar-brand" href="javascript:void(0)">
              <img src="/assets/img/1.png" className="img-fluid logo-desktop" alt="logo" />
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
              </ul>
              <ul className="navbar-nav nav-right ml-auto">
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
