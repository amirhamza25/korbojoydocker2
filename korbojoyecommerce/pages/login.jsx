import axios from "axios";
import { setCookies } from "cookies-next";
import Link from "next/link";
import { useState } from "react";
import fromValueUpdate from "../commonFunction/onChangeHandle";
import useScript from "../commonFunction/ReloadJs";
function login(props) {
  useScript("/assets/js/main.min.js");

  const [login, updateLoginFrom] = useState("");

  const categoryHandleChange = (e) => {
    fromValueUpdate(e, updateLoginFrom);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = process.env.API_MAIN;
    console.log(url);
    const response = await axios
      .post(process.env.API_URL + "/api/ev1/UserLogin", login)
      .then((response) => {
        setCookies("token", response.data);
        window.location.href = url;
      })
      .catch((error) => {
        // console.log("do not login");
      });
  };

  return (
    <div>
      {/* Start of Main */}
      <main className="main login-page">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">My Account</h1>
          </div>
        </div>
        {/* End of Page Header */}
        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>My account</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}
        <div className="page-content">
          <div className="container">
            <div className="login-popup">
              <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                <ul className="nav nav-tabs text-uppercase" role="tablist">
                  <li className="nav-item">
                    <a href="#sign-in" className="nav-link active">
                      Sign In
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                    <div className="form-group">
                      <label>Username or email address *</label>
                      <input type="text" className="form-control" name="username" id="username" required onChange={categoryHandleChange} />
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
                </div>
                <Link href="/signUp">
                  <a>New User ! Please Sign up first</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End of Main */}
    </div>
  );
}

export default login;
