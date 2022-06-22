import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { storeCancelListOfProduct } from "../../atom/listOfPendingOrder";
import useScript from "../../commonFunction/ReloadJs";
const AgentReturnOrderCancel = (props) => {
  useScript("/assets/js/app.js");

  const getCancelProductList = props.data;
  console.log(getCancelProductList);
  const [cancelOrder, updateCancelOrder] = useRecoilState(storeCancelListOfProduct);

  useEffect(() => {
    updateCancelOrder(getCancelProductList);
  }, [updateCancelOrder]);
  // const deleteItem = async (id) => {
  //   const formData = { tableName: "product", idColumnName: "id", idValue: id };
  //   const response = await axios
  //     .post(process.env.API_URL + "/Delete", formData)
  //     .then((item) => {
  //       MySwal.fire("Good job!", "Delete information successfully", "success");
  //       deleteInformation(id, product, getPendingProductList, updateProductInfo);
  //     })
  //     .catch((error) => {
  //       MySwal.fire("Brand not saved!", "Something Error Found.", "warning");
  //     });
  // };
  const cancelOrders = useRecoilValue(storeCancelListOfProduct);
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of agent return cancel order</h1>
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
                    List of daily cancel product order
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
                      <th>Name</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Information</th>
                      <th>Date</th>
                      <th>Total product</th>
                      <th>Total qty</th>
                      <th>Total amount</th>
                      <th>Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cancelOrders.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.agents[0].name}</td>
                          <td>{item.agents[0].number}</td>
                          <td>{item.agents[0].email}</td>
                          <td>
                            <a href="javascript:void(0);" className="btn btn-block btn-outline-info" data-toggle="modal" data-target={`#loginModal${index}`}>
                              Information
                            </a>
                            <div className="modal fade" id={`loginModal${index}`} tabIndex="{-1}" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">Vendor Details</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="datatable-wrapper table-responsive">
                                      <table id="datatable" className="display compact table table-striped table-bordered">
                                        <tbody>
                                          <tr>
                                            <th>Present Address</th>
                                            <td>{item.agents[0].presentAddress}</td>
                                          </tr>
                                          <tr>
                                            <th>Permanent Address</th>
                                            <td>{item.agents[0].permanentAddress}</td>
                                          </tr>
                                          <tr>
                                            <th>Division</th>
                                            <td>{item.agents[0].division}</td>
                                          </tr>
                                          <tr>
                                            <th>District</th>
                                            <td>{item.agents[0].district}</td>
                                          </tr>
                                          <tr>
                                            <th>Upazila</th>
                                            <td>{item.agents[0].upazila}</td>
                                          </tr>
                                          <tr>
                                            <th>CompanyName</th>
                                            <td>{item.agents[0].companyName}</td>
                                          </tr>
                                          <tr>
                                            <th>Office Address</th>
                                            <td>{item.agents[0].officeAddress}</td>
                                          </tr>
                                          <tr>
                                            <th>commission</th>
                                            <td>{item.agents[0].commission}</td>
                                          </tr>
                                          <tr>
                                            <th>NID Number</th>
                                            <td>{item.agents[0].nidNumber}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{item.date}</td>
                          <td>{item.totalProduct}</td>
                          <td>{item.totalQty}</td>
                          <td>{item.totalPrice}</td>
                          <Link href={`/agent/agentInvoice/${item.id}/${item.invoiceNumber}`}>
                            <td>
                              <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                                {item.invoiceNumber}
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
  const { data } = await axios.get(process.env.API_URL + "/AdminAgent/v1/getPurchaseReturnCancelToCompany");
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
export default AgentReturnOrderCancel;
