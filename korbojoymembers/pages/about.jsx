import Image from "next/image";
import useScript from "../commonFunction/ReloadJs";
const About = () => {
  useScript("/assets/js/app.js");
  return (
    <div className="app">
      <div className="loader">
        <div className="h-100 d-flex justify-content-center">
          <div className="align-self-center">
            <Image src="assets/img/loader/loader.svg" alt="loader" />
          </div>
        </div>
      </div>
      {/* begin app-wrap */}
      <div className="app-wrap">
        {/* begin pre-loader */}

        {/* end pre-loader */}
        {/* begin app-header */}

        {/* end app-header */}
        {/* begin app-container */}
        <div className="app-container">
          {/* begin app-nabar */}

          {/* end app-navbar */}
          {/* begin app-main */}
          <div className="app-main" id="main">
            {/* begin container-fluid */}
            <div className="container-fluid">
              {/* begin row */}
              <div className="row">
                <div className="col-md-12 m-b-30">
                  {/* begin page title */}
                  <div className="d-block d-lg-flex flex-nowrap align-items-center">
                    <div className="page-title mr-4 pr-4 border-right">
                      <h1>Dashboard</h1>
                    </div>
                    <div className="breadcrumb-bar align-items-center">
                      <nav>
                        <ol className="breadcrumb p-0 m-b-0">
                          <li className="breadcrumb-item">
                            <a href="index.html">
                              <i className="ti ti-home" />
                            </a>
                          </li>
                          <li className="breadcrumb-item">Dashboard</li>
                          <li className="breadcrumb-item active text-primary" aria-current="page">
                            Default
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="ml-auto d-flex align-items-center secondary-menu text-center">
                      <a
                        href="javascript:void(0);"
                        className="tooltip-wrapper"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Todo list"
                      >
                        <i className="fe fe-edit btn btn-icon text-primary" />
                      </a>
                      <a href="javascript:void(0);" className="tooltip-wrapper" data-toggle="tooltip" data-placement="top" title data-original-title="Projects">
                        <i className="fa fa-lightbulb-o btn btn-icon text-success" />
                      </a>
                      <a href="javascript:void(0);" className="tooltip-wrapper" data-toggle="tooltip" data-placement="top" title data-original-title="Task">
                        <i className="fa fa-check btn btn-icon text-warning" />
                      </a>
                      <a href="javascript:void(0);" className="tooltip-wrapper" data-toggle="tooltip" data-placement="top" title data-original-title="Calendar">
                        <i className="fa fa-calendar-o btn btn-icon text-cyan" />
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="tooltip-wrapper"
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        data-original-title="Analytics"
                      >
                        <i className="fa fa-bar-chart-o btn btn-icon text-danger" />
                      </a>
                    </div>
                  </div>
                  {/* end page title */}
                </div>
              </div>
              {/* Notification */}
              <div className="row">
                <div className="col-md-12">
                  <div className="alert border-0 alert-primary bg-gradient m-b-30 alert-dismissible fade show border-radius-none" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <i className="ti ti-close" />
                    </button>
                  </div>
                </div>
              </div>
              {/* end row */}
              {/* begin row */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="card card-statistics">
                    <div className="row no-gutters">
                      <div className="col-xxl-3 col-lg-6">
                        <div className="p-20 border-lg-right border-bottom border-xxl-bottom-0">
                          <div className="d-flex m-b-10">
                            <p className="mb-0 font-regular text-muted font-weight-bold">Total Visits</p>
                            <a className="mb-0 ml-auto font-weight-bold" href="#">
                              <i className="ti ti-more-alt" />{" "}
                            </a>
                          </div>
                          <div className="d-block d-sm-flex h-100 align-items-center">
                            <div className="apexchart-wrapper">
                              <div id="analytics7" />
                            </div>
                            <div className="statistics mt-3 mt-sm-0 ml-sm-auto text-center text-sm-right">
                              <h3 className="mb-0">
                                <i className="icon-arrow-up-circle" /> 15,640
                              </h3>
                              <p>Monthly visitor</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-6">
                        <div className="p-20 border-xxl-right border-bottom border-xxl-bottom-0">
                          <div className="d-flex m-b-10">
                            <p className="mb-0 font-regular text-muted font-weight-bold">Total Cost</p>
                            <a className="mb-0 ml-auto font-weight-bold" href="#">
                              <i className="ti ti-more-alt" />{" "}
                            </a>
                          </div>
                          <div className="d-block d-sm-flex h-100 align-items-center">
                            <div className="apexchart-wrapper">
                              <div id="analytics8" />
                            </div>
                            <div className="statistics mt-3 mt-sm-0 ml-sm-auto text-center text-sm-right">
                              <h3 className="mb-0">
                                <i className="icon-arrow-up-circle" /> 16,656
                              </h3>
                              <p>This month</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-6">
                        <div className="p-20 border-lg-right border-bottom border-lg-bottom-0">
                          <div className="d-flex m-b-10">
                            <p className="mb-0 font-regular text-muted font-weight-bold">Total Sales</p>
                            <a className="mb-0 ml-auto font-weight-bold" href="#">
                              <i className="ti ti-more-alt" />{" "}
                            </a>
                          </div>
                          <div className="d-block d-sm-flex h-100 align-items-center">
                            <div className="apexchart-wrapper">
                              <div id="analytics9" />
                            </div>
                            <div className="statistics mt-3 mt-sm-0 ml-sm-auto text-center text-sm-right">
                              <h3 className="mb-0">
                                <i className="icon-arrow-up-circle" />
                                569
                              </h3>
                              <p>Avg. Sales per day</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-lg-6">
                        <div className="p-20">
                          <div className="d-block d-sm-flex h-100 align-items-center">
                            <div className="apexchart-wrapper">
                              <div id="analytics10" />
                            </div>
                            <div className="statistics ml-sm-auto mt-4 mt-sm-0 pr-sm-5">
                              <ul className="list-style-none p-0">
                                <li className="d-flex py-1">
                                  <span>
                                    <i className="fa fa-circle text-primary pr-2" /> Redirect Visits
                                  </span>{" "}
                                  <span className="pl-2 font-weight-bold">456</span>
                                </li>
                                <li className="d-flex py-1">
                                  <span>
                                    <i className="fa fa-circle text-warning pr-2" /> New Visits
                                  </span>{" "}
                                  <span className="pl-2 font-weight-bold">256</span>
                                </li>
                                <li className="d-flex py-1">
                                  <span>
                                    <i className="fa fa-circle text-info pr-2" /> Direct Visits
                                  </span>{" "}
                                  <span className="pl-2 font-weight-bold">128</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-7 m-b-30">
                  <div className="card card-statistics h-100 mb-0 apexchart-tool-force-top">
                    <div className="card-header d-flex justify-content-between">
                      <div className="card-heading">
                        <h4 className="card-title">Site activity</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6 col-xs-6 col-lg-3">
                          <div className="row mb-2 pb-3 align-items-end">
                            <div className="col">
                              <p>Users</p>
                              <h3 className="tex-dark mb-0">8.6K</h3>
                            </div>
                            <div className="col ml-auto">
                              <span>
                                <i className="fa fa-arrow-down" /> 2.5%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-xs-6 col-lg-3">
                          <div className="row mb-2 pb-3 align-items-end">
                            <div className="col">
                              <p>Revenue</p>
                              <h3 className="tex-dark mb-0">176K</h3>
                            </div>
                            <div className="col ml-auto">
                              <span>
                                <i className="fa fa-arrow-up" /> 15%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-xs-6 col-lg-3">
                          <div className="row mb-2 pb-3 align-items-end">
                            <div className="col">
                              <p>Rate</p>
                              <h3 className="tex-dark mb-0">6.2K</h3>
                            </div>
                            <div className="col ml-auto">
                              <span>
                                <i className="fa fa-arrow-down" /> 6.5%
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-xs-6 col-lg-3">
                          <div className="row mb-2 pb-3 align-items-end">
                            <div className="col">
                              <p>Sessions</p>
                              <h3 className="tex-dark mb-0">44K</h3>
                            </div>
                            <div className="col ml-auto">
                              <span>
                                <i className="fa fa-arrow-down" /> 1.8%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 px-0">
                          <div className="apexchart-wrapper p-inherit">
                            <div id="analytics1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 m-b-30">
                  <div className="card card-statistics h-100 mb-0">
                    <div className="card-header d-flex justify-content-between">
                      <div className="card-heading">
                        <h4 className="card-title">Income Analysis</h4>
                      </div>
                      <div className="dropdown">
                        <a className="p-2" href="#!" data-toggle="dropdown" aria-expanded="false">
                          <i className="fe fe-circle" />
                        </a>
                        <div className="dropdown-menu custom-dropdown dropdown-menu-right p-4">
                          <h6 className="mb-1">Action</h6>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-file-o pr-2" />
                            View reports
                          </a>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-edit pr-2" />
                            Edit reports
                          </a>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-bar-chart-o pr-2" />
                            Statistics
                          </a>
                          <h6 className="mb-1 mt-3">Export</h6>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-file-pdf-o pr-2" />
                            Export to PDF
                          </a>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-file-excel-o pr-2" />
                            Export to CSV
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-xs-6">
                          <h2>3.8k</h2>
                          <span className="d-block mb-2 font-16">AVG sessions</span>
                          <span className="d-block mb-2 mb-sm-5">
                            <b className="text-primary">-65.88%</b> vs last 1 months
                          </span>
                          <p className="mb-3">Sapiente corporis fugiat, doloremque eveniet nostrum id molestiae quaerat!</p>
                          <a className="btn btn-round btn-inverse-primary mb-3 mb-sm-0" href="#">
                            <b>View details </b>
                          </a>
                        </div>
                        <div className="col-xs-6">
                          <div className="apexchart-wrapper">
                            <div id="analytics2" className="chart-fit" />
                          </div>
                        </div>
                      </div>
                      <div className="border-top my-4" />
                      <h4 className="card-title">Income by department</h4>
                      <div className="row">
                        <div className="col-12 col-md-3">
                          <span>
                            FCBK: <b>$1,475</b>
                          </span>
                          <div className="progress my-3" style={{ height: 4 }}>
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-3">
                          <span>
                            GGL: <b>$23,475</b>
                          </span>
                          <div className="progress my-3" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "66%" }}
                              aria-valuenow={66}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-3">
                          <span>
                            APL: <b>$1,658</b>
                          </span>
                          <div className="progress my-3" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              style={{ width: "78%" }}
                              aria-valuenow={78}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-3">
                          <span>
                            SMG: <b>$12,489</b>
                          </span>
                          <div className="progress my-3" style={{ height: 4 }}>
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: "55%" }}
                              aria-valuenow={55}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-xxl-4 m-b-30">
                  <div className="card card-statistics h-100 mb-0">
                    <div className="card-header d-flex justify-content-between">
                      <div className="card-heading">
                        <h4 className="card-title">Support Ticket</h4>
                      </div>
                      <div className="dropdown">
                        <a className="btn btn-round btn-inverse-primary btn-xs" href="#">
                          View all{" "}
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row active-task m-b-20">
                        <div className="col-xs-1">
                          <div className="bg-type mb-1 mb-xs-0 mt-1">
                            <span>PP</span>
                          </div>
                        </div>
                        <div className="col-11">
                          <small className="d-block mb-1">Car dealer</small>
                          <h5 className="mb-0">
                            <a href="#">Unread utf-8 in more quick overview</a>
                          </h5>
                          <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                              <small> Created by Lizzy Halfman</small>
                            </li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item">
                              <small>Saturday, March 17 2019</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row active-task m-b-20">
                        <div className="col-xs-1">
                          <div className="bg-type bg-pink mb-1 mb-xs-0 mt-1">
                            <span>SL</span>
                          </div>
                        </div>
                        <div className="col-11">
                          <small className="d-block mb-1">Webster HTML5 </small>
                          <h5 className="mb-0">
                            <a href="#">I get an error ,No Direct Access Allowed! when I enter purchase</a>
                          </h5>
                          <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                              <small> Created by Samuel Woods</small>
                            </li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item">
                              <small>Sunday, March 19 2019</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row active-task m-b-20">
                        <div className="col-xs-1">
                          <div className="bg-type bg-success mb-1 mb-xs-0 mt-1">
                            <span>MP</span>
                          </div>
                        </div>
                        <div className="col-11">
                          <small className="d-block mb-1">The corps</small>
                          <h5 className="mb-0">
                            <a href="#">OAuth Credentials not generating the key</a>
                          </h5>
                          <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                              <small> Created by Andrew nico</small>
                            </li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item">
                              <small>Monday, March 21 2019</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row active-task m-b-20">
                        <div className="col-xs-1">
                          <div className="bg-type bg-orange mb-1 mb-xs-0 mt-1">
                            <span>SP</span>
                          </div>
                        </div>
                        <div className="col-11">
                          <small className="d-block mb-1">Sam martin vCard</small>
                          <h5 className="mb-0">
                            <a href="#">Pre-Buy Questions : For bakery Shop (Mentor Android Application)</a>
                          </h5>
                          <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                              <small> Created by Jimmy Falicon</small>
                            </li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item">
                              <small>Friday, March 22 2019</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row active-task m-b-20">
                        <div className="col-xs-1">
                          <div className="bg-type bg-info mb-1 mb-xs-0 mt-1">
                            <span>AP</span>
                          </div>
                        </div>
                        <div className="col-11">
                          <small className="d-block mb-1">Mentor admin </small>
                          <h5 className="mb-0">
                            <a href="#">I need a payment option, for each seller per item</a>
                          </h5>
                          <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                              <small> Created by Brian Joedon</small>
                            </li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item">
                              <small>Saturday, March 17 2019</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-4 m-b-30">
                  <div className="card card-statistics h-100 mb-0">
                    <div className="card-header d-flex justify-content-between">
                      <div className="card-heading">
                        <h4 className="card-title">Project Activity</h4>
                      </div>
                      <div className="dropdown">
                        <a className="p-2" href="#!" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fe fe-more-horizontal" />
                        </a>
                        <div className="dropdown-menu custom-dropdown dropdown-menu-right p-4">
                          <h6 className="mb-1">Action</h6>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-file-o pr-2" />
                            View reports
                          </a>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-edit pr-2" />
                            Edit reports
                          </a>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-bar-chart-o pr-2" />
                            Statistics
                          </a>
                          <h6 className="mb-1 mt-3">Export</h6>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-file-pdf-o pr-2" />
                            Export to PDF
                          </a>
                          <a className="dropdown-item" href="#!">
                            <i className="fa-fw fa fa-file-excel-o pr-2" />
                            Export to CSV
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <ul className="activity">
                        <li className="activity-item primary">
                          <div className="activity-info">
                            <h5 className="mb-0">Meeting with Amanda and team.</h5>
                            <span>10:30 Jan</span>
                          </div>
                        </li>
                        <li className="activity-item info">
                          <div className="activity-info">
                            <h5 className="mb-0"> Assign task for Smith. </h5>
                            <span>Wed, 10 Mar</span>
                          </div>
                        </li>
                        <li className="activity-item success">
                          <div className="activity-info">
                            <h5 className="mb-0"> Complete milestone 3 and update. </h5>
                            <span>Mon, 14 Jun</span>
                          </div>
                        </li>
                        <li className="activity-item danger">
                          <div className="activity-info">
                            <h5 className="mb-0">Start new task with mark. </h5>
                            <span>Sat, 01 May</span>
                          </div>
                        </li>
                        <li className="activity-item warning">
                          <div className="activity-info">
                            <h5 className="mb-0">You have created a new task</h5>
                            <span>9:30</span>
                          </div>
                        </li>
                        <li className="activity-item info">
                          <div className="activity-info">
                            <h5 className="mb-0"> Meeting with client and CEO.</h5>
                            <span>Fri, 10 Aug</span>
                          </div>
                        </li>
                        <li className="activity-item success">
                          <div className="activity-info">
                            <h5 className="mb-0">Meeting with Amanda and team.</h5>
                            <span>Fri, 01 Dec</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 m-b-30">
                  <div className="card card-statistics h-100 mb-0">
                    <div className="card-header d-flex justify-content-between">
                      <div className="card-heading">
                        <h4 className="card-title">Sales</h4>
                      </div>
                      <div className="dropdown">
                        <select className="custom-select custom-select-sm" id="inputGroupSelect01">
                          <option selected>Last 24hr</option>
                          <option value={1}>Last week</option>
                          <option value={2}>Last 6 month</option>
                          <option value={3}>Last year</option>
                        </select>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="border-bottom pb-2 pb-xxs-4">
                        <div className="row">
                          <div className="col-xxs-6 mb-3 mb-xxs-0">
                            <span className="font-17">Total revenue</span>
                            <h3 className="mt-1 mb-1">$45,541</h3>
                            <span className="d-block">
                              {" "}
                              <i className="fa fa-arrow-down text-primary" /> <b className="text-primary">+23%</b> Vs last months{" "}
                            </span>
                          </div>
                          <div className="col-xxs-6 mb-3 mb-xxs-0">
                            <span className="font-17">Total cost</span>
                            <h3 className="mt-1 mb-1">$6,456</h3>
                            <span className="d-block">
                              {" "}
                              <i className="fa fa-arrow-down text-cyan" /> <b className="text-cyan">+65%</b> Vs last months{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xxs-6 pt-2 pt-xxs-4">
                          <div className="d-flex justify-content-between">
                            <span className="font-16">
                              <b>86</b> Deals added
                            </span>
                            <span className="font-16">
                              <b>65%</b> of goal
                            </span>
                          </div>
                          <div className="progress my-3" style={{ height: 6 }}>
                            <div
                              className="progress-bar bg-primary"
                              role="progressbar"
                              style={{ width: "66%" }}
                              aria-valuenow={66}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-xxs-6 pt-2 pt-xxs-4">
                          <div className="d-flex justify-content-between">
                            <span className="font-16">
                              <b>78</b> Project closed
                            </span>
                            <span className="font-16">
                              <b>45%</b> of goal
                            </span>
                          </div>
                          <div className="progress my-3" style={{ height: 6 }}>
                            <div
                              className="progress-bar bg-cyan"
                              role="progressbar"
                              style={{ width: "66%" }}
                              aria-valuenow={66}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="apexchart-wrapper">
                        <div id="analytics3" className="chart-fit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-8">
                  <div className="card card-statistics analytics-contant">
                    <div className="card-body">
                      <div className="row no-gutters">
                        <div className="col-xl-4">
                          <h4 className="card-title mb-3">Site Visitors</h4>
                          <p className="mb-4 ">Architecto expedita sequi nisi a excepturi error provident, repellendus quisquam unde aut.</p>
                          <div className="row">
                            <div className="col-12 mb-3">
                              <span>United states: </span>
                              <b className="float-right">80%</b>
                              <div className="progress my-2" style={{ height: 5 }}>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                            <div className="col-12 mb-3">
                              <span>India: </span>
                              <b className="float-right">75%</b>
                              <div className="progress my-2" style={{ height: 5 }}>
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "75%" }}
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                            <div className="col-12 mb-3">
                              <span>Australia: </span>
                              <b className="float-right">65%</b>
                              <div className="progress my-2" style={{ height: 5 }}>
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                  aria-valuenow={65}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                            <div className="col-12 mb-3">
                              <span>Germany: </span>
                              <b className="float-right">55%</b>
                              <div className="progress my-2" style={{ height: 5 }}>
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "55%" }}
                                  aria-valuenow={55}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                            <div className="col-12 mb-3">
                              <span>United kingdom: </span>
                              <b className="float-right">80%</b>
                              <div className="progress my-2" style={{ height: 5 }}>
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <a className="btn btn-link pl-0" href="#">
                                <b>View details </b>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-8">
                          <div className="vectormap-wrapper">
                            <div id="world" className="vmap" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 m-b-30">
                  <div className="card card-statistics h-100 mb-0 o-hidden">
                    <div className="card-header">
                      <h4 className="card-title">Received all time</h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6 col-xxs-4 col-md-4 mb-3 mb-sm-0">
                          <h3 className="mb-1 mb-xxs-0">25,456</h3>
                          <span className="d-block">
                            {" "}
                            <i className="fa fa-arrow-up text-success" /> <b className="text-success">+23%</b> Views
                          </span>
                        </div>
                        <div className="col-6 col-xxs-4 col-md-4 mb-3 mb-sm-0">
                          <h3 className="mb-1 mb-xxs-0">45,541</h3>
                          <span className="d-block">
                            {" "}
                            <i className="fa fa-arrow-up text-success" /> <b className="text-success">+15%</b> Likes{" "}
                          </span>
                        </div>
                        <div className="col-12 col-xxs-4 col-md-4 mb-3 mb-sm-0">
                          <h3 className="mb-1 mb-xxs-0">78,462</h3>
                          <span className="d-block">
                            {" "}
                            <i className="fa fa-arrow-up text-success" /> <b className="text-success">+32%</b> Comments{" "}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 mt-xxs-4">
                        <p>
                          You are scheduled earn <span className="badge  badge-success-inverse">$2,350 today</span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="tab nav-border-bottom">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link py-2 active show"
                              id="home-02-tab"
                              data-toggle="tab"
                              href="#home-02"
                              role="tab"
                              aria-controls="home-02"
                              aria-selected="true"
                            >
                              Views
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link py-2"
                              id="profile-02-tab"
                              data-toggle="tab"
                              href="#profile-02"
                              role="tab"
                              aria-controls="profile-02"
                              aria-selected="false"
                            >
                              Likes{" "}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link py-2"
                              id="portfolio-02-tab"
                              data-toggle="tab"
                              href="#portfolio-02"
                              role="tab"
                              aria-controls="portfolio-02"
                              aria-selected="false"
                            >
                              Comments{" "}
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content mt-5">
                          <div className="tab-pane fade active show" id="home-02" role="tabpanel" aria-labelledby="home-02-tab">
                            <div className="apexchart-wrapper">
                              <div id="analytics4" className="chart-fit mb-minus" />
                            </div>
                          </div>
                          <div className="tab-pane fade" id="profile-02" role="tabpanel" aria-labelledby="profile-02-tab">
                            <div className="apexchart-wrapper">
                              <div id="analytics5" className="chart-fit mb-minus" />
                            </div>
                          </div>
                          <div className="tab-pane fade" id="portfolio-02" role="tabpanel" aria-labelledby="portfolio-02-tab">
                            <div className="apexchart-wrapper">
                              <div id="analytics6" className="chart-fit mb-minus" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card card-statistics">
                    <div className="card-header">
                      <div className="card-heading">
                        <h4 className="card-title">Event Calendar</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-3">
                          <div id="external-events">
                            <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#eventModal">
                              Add New Event
                            </button>
                            <p className="mt-3">Drag and drop your event or click in the calendar.</p>
                            <div className="fc-event fc-event-primary" data-color="fc-event-primary">
                              <span /> Family Vacation
                            </div>
                            <div className="fc-event fc-event-warning" data-color="fc-event-warning">
                              <span /> Meeting In Office
                            </div>
                            <div className="fc-event fc-event-danger" data-color="fc-event-danger">
                              <span /> Client Call
                            </div>
                            <div className="fc-event fc-event-success" data-color="fc-event-success">
                              <span /> Interview
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                              <label className="form-check-label" htmlFor="defaultCheck1">
                                Remove After Drop
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="event-calendar">
                            <div id="event-calendar" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
              {/* event Modal */}
              <div className="modal fade" id="eventModal" tabIndex={-1} role="dialog" aria-labelledby="verticalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="verticalCenterTitle">
                        Add New Event
                      </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="modelemail">Event Name</label>
                          <input type="email" className="form-control" id="modelemail" />
                        </div>
                        <div className="form-group">
                          <label>Choose Event Color</label>
                          <select className="form-control">
                            <option>Primary</option>
                            <option>Warning</option>
                            <option>Success</option>
                            <option>Danger</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">
                        Close
                      </button>
                      <button type="button" className="btn btn-success">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end container-fluid */}
          </div>
          {/* end app-main */}
        </div>
        {/* end app-container */}
        {/* begin footer */}

        {/* end footer */}
      </div>
      {/* end app-wrap */}
    </div>
  );
};

export default About;
