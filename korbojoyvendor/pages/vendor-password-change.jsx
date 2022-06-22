import React from "react";

const VendorPasswordChange = () => {
  return (
    <div>
      <div>
        {/* auth-reset-password.html 21 Nov 2019 04:05:02 GMT */}
        <meta charset="UTF-8" />
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport" />
        <title>Otika - Admin Dashboard Template</title>
        {/* General CSS Files */}
        <link rel="stylesheet" href="assets/css/app.min.css" />
        {/* Template CSS */}
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/components.css" />
        {/* Custom style CSS */}
        <link rel="stylesheet" href="assets/css/custom.css" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <div id="app">
          <section className="section">
            <div className="container mt-5">
              <div className="row">
                <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h4>Reset Password</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">Enter Your New Password</p>
                      <form method="POST">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input id="email" type="email" className="form-control" name="email" tabIndex="{1}" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">New Password</label>
                          <input
                            id="password"
                            type="password"
                            className="form-control pwstrength"
                            data-indicator="pwindicator"
                            name="password"
                            tabIndex="{2}"
                            required
                          />
                          <div id="pwindicator" className="pwindicator">
                            <div className="bar" />
                            <div className="label" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="password-confirm">Confirm Password</label>
                          <input id="password-confirm" type="password" className="form-control" name="confirm-password" tabIndex="{2}" required />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="{4}">
                            Reset Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* General JS Scripts */} {/* JS Libraies */} {/* Page Specific JS File */} {/* Template JS File */} {/* Custom JS File */}{" "}
        {/* auth-reset-password.html 21
  Nov 2019 04:05:02 GMT */}
      </div>
      ;
    </div>
  );
};

export default VendorPasswordChange;
