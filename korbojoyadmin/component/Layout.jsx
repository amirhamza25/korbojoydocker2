import { useRouter } from "next/router";
import React from "react";
import useScript from "../commonFunction/ReloadJs";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";
const Layout = ({ children }) => {
  useScript("/assets/js/app.js");
  const conditionalTopHeader = () => {
    const { asPath, pathname } = useRouter();

    if (asPath != "/") {
      return (
        <>
          <TopHeader />
        </>
      );
    }
  };
  const conditionalNavbar = () => {
    const { asPath, pathname } = useRouter();

    if (asPath != "/") {
      return (
        <>
          <NavBar />
        </>
      );
    }
  };

  const conditionalFooter = () => {
    const { asPath, pathname } = useRouter();

    if (asPath != "/") {
      return (
        <>
          <Footer />
        </>
      );
    }
  };

  return (
    <div>
      <div className="app">
        <div className="app-wrap">
          {conditionalTopHeader()}
          <div className="app-container">
            {conditionalNavbar()}
            <div className="app-main" id="main">
              <div className="container-fluid">
                <main>{children}</main>
                {conditionalFooter()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
