import axios from "axios";
import { setCookies } from "cookies-next";
import { useState } from "react";
import fromValueUpdate from "../commonFunction/onChangeHandle";
function Index() {
  const [login, updateLoginFrom] = useState("");

  const categoryHandleChange = (e) => {
    fromValueUpdate(e, updateLoginFrom);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = process.env.DOMAIN_URL;
    const response = await axios
      .post(process.env.API_URL + "/vendorPanel/v1/VendorLogin", login)
      .then((response) => {
        setCookies("token", response.data);
        window.location.href = url;
      })
      .catch((error) => {
        console.log("do not login");
      });
  };
  return (
    <div>
      <div>
        <div className="app">
          <div className="app-contant">
            <div className="bg-white">
              <div className="container-fluid p-0">
                <div className="row no-gutters">
                  <div className="col-sm-6 col-lg-5 col-xxl-3  align-self-center order-2 order-sm-1">
                    <div className="">
                      <div className="login p-50">
                        <h1 className="mb-2">We Are Mentor</h1>
                        <p>Welcome back, please login to your account.</p>

                        <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                          <div className="form-group">
                            <label>Username or email address *</label>
                            <input type="text" className="form-control" name="userId" id="username" required onChange={categoryHandleChange} />
                          </div>
                          <div className="form-group mb-0">
                            <label>Password *</label>
                            <input type="text" className="form-control" name="password" id="password" required onChange={categoryHandleChange} />
                          </div>

                          <div className="form-group">
                            <button type="submit" className="btn btn-primary" name="signup" value="Submit">
                              Submit
                            </button>
                          </div>
                        </form>
                        {/* <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                            <div className="row">
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="control-label">User Name*</label>
                                  <input type="text" className="form-control" name="userId" id="username" required onChange={categoryHandleChange} />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="control-label">Password*</label>
                                  <input type="text" className="form-control" name="password" id="password" required onChange={categoryHandleChange} />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="d-block d-sm-flex  align-items-center">
                                  <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                      {" "}
                                      Remember Me{" "}
                                    </label>
                                  </div>
                                  <a href="javascript:void(0);" className="ml-auto">
                                    Forgot Password ?
                                  </a>
                                </div>
                              </div>

                              <div className="col-12 mt-3">
                                <div className="form-group">
                                  <button type="submit" className="btn btn-primary" name="signup" value="Submit">
                                    Submit
                                  </button>
                                </div>
                              </div>

                              <div className="col-12  mt-3">
                                <Link href="/agent-registration">
                                  <p>
                                    Don't have an account ?<a href="auth-register.html"> Sign Up</a>
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </form> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xxl-9 col-lg-7 bg-gradient o-hidden order-1 order-sm-2">
                    <div className="row align-items-center h-100">
                      <div className="col-7 mx-auto ">
                        <img className="img-fluid" src="assets/img/bg/login.svg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
