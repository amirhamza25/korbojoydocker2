import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer" style={{ position: "fixed", bottom: 0 }}>
        <div className="row">
          <div className="col-12 col-sm-6 text-center text-sm-left">
            <p>© Copyright 2021. All rights reserved.</p>
          </div>
          <div className="col  col-sm-6 ml-sm-auto text-center text-sm-right">
            <p>
              <a target="_blank" href="#">
                Member Panel
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
