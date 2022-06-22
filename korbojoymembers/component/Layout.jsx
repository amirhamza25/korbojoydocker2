import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";
const Layout = ({ children }) => {
  return (
    <div>
      <div className="app">
        <div className="app-wrap">
          <TopHeader />
          <div className="app-container">
            <NavBar />
            <div className="app-main" id="main">
              <div className="container-fluid">
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
