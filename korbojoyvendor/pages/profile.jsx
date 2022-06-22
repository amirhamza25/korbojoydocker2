import React from "react";

function profile() {
  return (
    <div>
      <div>
        <title>Mentor - Bootstrap 4 Admin Dashboard Template</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Admin template that can be used to build dashboards for CRM, CMS, etc." />
        <meta name="author" content="Potenza Global Solutions" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* app favicon */}
        <link rel="shortcut icon" href="assets/img/favicon.ico" />
        {/* google fonts */}
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
        {/* plugin stylesheets */}
        <link rel="stylesheet" type="text/css" href="assets/css/vendors.css" />
        {/* app style */}
        <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
        {/* begin app */}
        <div className="">
          <div className="">
            {/* begin app-nabar */}

            {/* end app-navbar */}
            {/* begin app-main */}

            {/* begin container-fluid */}
            <div className="">
              {/* begin row */}
              <div className="row">
                <div className="col-md-12 m-b-30">
                  {/* begin page title */}
                  <div className="d-block d-sm-flex flex-nowrap align-items-center">
                    <div className="page-title mb-2 mb-sm-0">
                      <h1>Account Settings</h1>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                      <nav>
                        <ol className="breadcrumb p-0 m-b-0">
                          <li className="breadcrumb-item">
                            <a href="index.html">
                              <i className="ti ti-home" />
                            </a>
                          </li>
                          <li className="breadcrumb-item">Pages</li>
                          <li className="breadcrumb-item active text-primary" aria-current="page">
                            Account Settings
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                  {/* end page title */}
                </div>
              </div>
              {/* end row */}
              {/*mail-Compose-contant-start*/}
              <div className="row account-contant">
                <div className="col-12">
                  <div className="card card-statistics">
                    <div className="card-body p-0">
                      <div className="row no-gutters">
                        <div className="col-xl-3 pb-xl-0 pb-5 border-right">
                          <div className="page-account-profil pt-5">
                            <div className="profile-img text-center rounded-circle">
                              <div className="pt-5">
                                <div className="bg-img m-auto">
                                  <img src="assets/img/avtar/01.jpg" className="img-fluid" alt="users-avatar" />
                                </div>
                                <div className="profile pt-4">
                                  <h4 className="mb-1">Alice Williams</h4>
                                  <p>Enthusiast</p>
                                </div>
                              </div>
                            </div>
                            <div className="py-5 profile-counter">
                              <ul className="nav justify-content-center text-center">
                                <li className="nav-item border-right px-3">
                                  <div>
                                    <h4 className="mb-0">90</h4>
                                    <p>Post</p>
                                  </div>
                                </li>
                                <li className="nav-item border-right px-3">
                                  <div>
                                    <h4 className="mb-0">1.5K</h4>
                                    <p>Messages</p>
                                  </div>
                                </li>
                                <li className="nav-item px-3">
                                  <div>
                                    <h4 className="mb-0">4.4K</h4>
                                    <p>Members</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="profile-btn text-center">
                              <div>
                                <button className="btn btn-light text-primary mb-2">Upload New Avatar</button>
                              </div>
                              <div>
                                <button className="btn btn-danger">Delete</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-6 col-12 border-t border-right">
                          <div className="page-account-form">
                            <div className="form-titel border-bottom p-3">
                              <h5 className="mb-0 py-2">Edit Your Personal Settings</h5>
                            </div>
                            <div className="p-4">
                              <form>
                                <div className="form-row">
                                  <div className="form-group col-md-12">
                                    <label htmlFor="name1">Full Name</label>
                                    <input type="text" className="form-control" id="name1" defaultValue="Alice Williams" />
                                  </div>
                                  <div className="form-group col-md-12">
                                    <label htmlFor="title1">Title</label>
                                    <input type="text" className="form-control" id="title1" defaultValue="Marketing expert" />
                                  </div>
                                  <div className="form-group col-md-12">
                                    <label htmlFor="phone1">Phone Number</label>
                                    <input type="text" className="form-control" id="phone1" defaultValue="(01) 97 563 15613" />
                                  </div>
                                  <div className="form-group col-md-12">
                                    <label htmlFor="email1">Email</label>
                                    <input type="email" className="form-control" id="email1" defaultValue="alicewilliams@gmail.com" />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="add1">Address</label>
                                  <input type="text" className="form-control" id="add1" defaultValue="17504 Carlton Cuevas Rd, Gulfport, MS, 39503" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="add2">Address 2</label>
                                  <input type="text" className="form-control" id="add2" defaultValue="1234 North Avenue Luke Lane, South Bend, IN 360001" />
                                </div>
                                <div className="form-row">
                                  <div className="col-12">
                                    <label className="mb-1">Birthday</label>
                                  </div>
                                  <div className="form-group col-md-4">
                                    <select id="inputState" className="form-control">
                                      <option>Date</option>
                                      <option>01</option>
                                      <option>02</option>
                                      <option>03</option>
                                      <option>04</option>
                                      <option>05</option>
                                      <option>06</option>
                                      <option>07</option>
                                      <option>08</option>
                                      <option>09</option>
                                      <option>10</option>
                                      <option selected>11</option>
                                      <option>12</option>
                                      <option>13</option>
                                      <option>14</option>
                                      <option>15</option>
                                      <option>16</option>
                                      <option>17</option>
                                      <option>18</option>
                                      <option>19</option>
                                      <option>20</option>
                                      <option>21</option>
                                      <option>22</option>
                                      <option>23</option>
                                      <option>24</option>
                                      <option>25</option>
                                      <option>26</option>
                                      <option>27</option>
                                      <option>28</option>
                                      <option>29</option>
                                      <option>30</option>
                                      <option>31</option>
                                    </select>
                                  </div>
                                  <div className="form-group col-md-4">
                                    <select id="inputState1" className="form-control">
                                      <option>Month</option>
                                      <option>January</option>
                                      <option>February</option>
                                      <option>March</option>
                                      <option>April</option>
                                      <option selected>May</option>
                                      <option>June</option>
                                      <option>July</option>
                                      <option>August</option>
                                      <option>September</option>
                                      <option>October</option>
                                      <option>November</option>
                                      <option>December</option>
                                    </select>
                                  </div>
                                  <div className="form-group col-md-4">
                                    <select id="inputState2" className="form-control">
                                      <option>Year</option>
                                      <option>1984</option>
                                      <option>1985</option>
                                      <option>1986</option>
                                      <option>1987</option>
                                      <option>1988</option>
                                      <option>1989</option>
                                      <option>1990</option>
                                      <option>1991</option>
                                      <option>1992</option>
                                      <option>1993</option>
                                      <option selected>1994</option>
                                      <option>1995</option>
                                      <option>1996</option>
                                      <option>1997</option>
                                      <option>1998</option>
                                      <option>1999</option>
                                      <option>2000</option>
                                      <option>2001</option>
                                      <option>2002</option>
                                      <option>2003</option>
                                      <option>2004</option>
                                      <option>2005</option>
                                      <option>2006</option>
                                      <option>2007</option>
                                      <option>2008</option>
                                      <option>2009</option>
                                      <option>2010</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-row">
                                  <div className="form-group col-md-4">
                                    <label htmlFor="inputState3">City</label>
                                    <select id="inputState3" className="form-control">
                                      <option>Choose...</option>
                                      <option selected>London</option>
                                      <option>Montreal</option>
                                      <option>Delhi</option>
                                      <option>Tokyo</option>
                                    </select>
                                  </div>
                                  <div className="form-group col-md-4">
                                    <label htmlFor="inputState4">State</label>
                                    <select id="inputState4" className="form-control">
                                      <option>Choose...</option>
                                      <option selected>England</option>
                                      <option>California </option>
                                      <option>Texas</option>
                                      <option>Scotland </option>
                                    </select>
                                  </div>
                                  <div className="form-group col-md-4">
                                    <label htmlFor="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" defaultValue="EC1A 1BB" />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                      I agree to receive email notification.
                                    </label>
                                  </div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                  Update Information
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 col-md-6 border-t col-12">
                          <div className="page-account-form">
                            <div className="form-titel border-bottom p-3">
                              <h5 className="mb-0 py-2">Your External Link</h5>
                            </div>
                            <div className="p-4">
                              <form>
                                <div className="form-group">
                                  <label htmlFor="fb">Facebook URL:</label>
                                  <input type="text" className="form-control" id="fb" defaultValue="https://www.facebook.com/" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="tr">Twitter URL:</label>
                                  <input type="text" className="form-control" id="tr" defaultValue="https://twitter.com/" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="br">Blogger URL:</label>
                                  <input type="text" className="form-control" id="br" defaultValue="https://www.blogger.com/" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="go">Google+ URL:</label>
                                  <input type="text" className="form-control" id="go" defaultValue="https://plus.google.com/discover" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="li">LinkedIn URL:</label>
                                  <input type="text" className="form-control" id="li" defaultValue="https://in.linkedin.com/" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="we">Website URL:</label>
                                  <input type="text" className="form-control" id="we" defaultValue="https://yourwebsite.com/" />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                  Save &amp; Update
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*mail-Compose-contant-end*/}
            </div>
            {/* end container-fluid */}
          </div>
          {/* end app-main */}
        </div>
        {/* end app-container */}
        {/* begin footer */}
        <footer className="footer">
          <div className="row">
            <div className="col-12 col-sm-6 text-center text-sm-left">
              <p>© Copyright 2019. All rights reserved.</p>
            </div>
            <div className="col  col-sm-6 ml-sm-auto text-center text-sm-right">
              <p>
                <a>Templates Hub</a>
              </p>
            </div>
          </div>
        </footer>
        {/* end footer */}
      </div>
      {/* end app-wrap */}

      {/* end app */}
      {/* plugins */}
      {/* custom app */}
    </div>
  );
}

export default profile;
