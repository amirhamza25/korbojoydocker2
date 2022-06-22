import axios from "axios";
import React from "react";
const notice = ({ data }) => {
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
        <div className="app container">
          <div className="row widget-social">
            {data.map((pd, index) => {
              return (
                <div className="col-xl-4 col-sm-4" key={index}>
                  <div className="card card-statistics widget-social-box15">
                    <div className="card-body bg-info">
                      <div className="d-flex justify-content-between align-items-center">
                        <h4 className="text-white">Latest Tweet</h4>
                        <div className="img-icon bg-white">
                          <i className="fa fa-twitter" />
                        </div>
                      </div>
                      <p className="text-white my-3 ">{pd.shortDiscriptions}</p>

                      <div className="d-flex justify-content-between">
                        <ul className="list-inline float-right mb-0">
                          <li className="list-inline-item text-white">
                            <a href="javascript:void(0)">
                              <i className="fa fa-thumbs-o-up" /> 895
                            </a>
                          </li>
                          <li className="list-inline-item text-white">
                            <a href="javascript:void(0)">
                              <i className="fa fa-share" /> 1000
                            </a>
                          </li>
                        </ul>
                        <small className="text-white">{pd.date} via web</small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* end app-wrap */}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(process.env.API_URL + "/ListOfNotice");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default notice;
