import axios from "axios";
import Link from "next/link";
import React from "react";
import useScript from "../../commonFunction/ReloadJs";

const AgentReturnOrderFromUser = (props) => {
  useScript("/assets/js/app.js");

  const dailyOrder = props.data;
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of daily order from user</h1>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <nav>
                <ol className="breadcrumb p-0 m-b-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="ti ti-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">Tables</li>
                  <li className="breadcrumb-item active text-primary" aria-current="page">
                    List of daily order from user
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="datatable-wrapper table-responsive">
                <table id="datatable" className="display compact table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Agent Type</th>
                      <th>Name</th>

                      <th>Email</th>
                      <th>Office Address</th>
                      <th>Order Type</th>
                      <th>Total qty</th>
                      <th>Total amount</th>

                      <th>Agent Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dailyOrder.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>

                          <td>{item.agenrType}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.officeAddress}</td>

                          <td>{item.productTotal}</td>
                          <td>{item.qtyTotal}</td>
                          <td>{item.priceTotal}</td>
                          <Link href={`/agent/UserDetails/returnOrder/${item.id}`}>
                            <td>
                              <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                                Information
                              </a>
                            </td>
                          </Link>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data } = await axios.get(process.env.API_URL + "/AdminAgent/v1/userReturnOrderListToAgent");
  // console.log(data)
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
export default AgentReturnOrderFromUser;
