import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { storeAllSuccessListOfProduct } from "../../atom/listOfAllPending";
import useScript from "../../commonFunction/ReloadJs";
const AllSuccessProductOrder = (props) => {
  useScript("/assets/js/app.js");

  const getCancelProductList = props.data;
  console.log(getCancelProductList);
  const [cancelOrder, updateCancelOrder] = useRecoilState(storeAllSuccessListOfProduct);

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
  const cancelOrders = useRecoilValue(storeAllSuccessListOfProduct);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of all success product order</h1>
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
                    List of all pending product order
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
                      <th>Outlet/Agent id</th>
                      <th>Outlet/Agent information</th>
                      <th>User name</th>
                      <th>Invoice</th>
                      <th>Number</th>
                      {/* <th>Email</th> */}
                      <th>Address</th>
                      <th>Delivery Type</th>
                      <th>Delivery Ad dress</th>
                      <th>Total product</th>
                      <th>Total qty</th>
                      <th>Total price</th>
                      <th>Status</th>
                      {/* <th>Delete</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {cancelOrders.map((item, index) => {
                      const streetaddress = JSON.parse(item.deliveryDetails);
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          {/* <td>
                          <img src={process.env.API_URL + "/upload/" + JSON.parse(item.img)} width={150} height={150} />
                        </td> */}

                          <td>{item.userId}</td>
                          <td>
                            <a href="javascript:void(0);" className="btn btn-block btn-outline-info" data-toggle="modal" data-target={`#loginModal${index}`}>
                              Information
                            </a>
                            <div className="modal fade" id={`loginModal${index}`} tabIndex="{-1}" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title">Agent Details</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <div className="datatable-wrapper table-responsive">
                                      <table id="datatable" className="display compact table table-striped table-bordered">
                                        <tbody>
                                          <tr>
                                            <th>Agent Name</th>
                                            <td>{streetaddress.name}</td>
                                          </tr>
                                          <tr>
                                            <th>Agent Phone Number</th>
                                            <td>{streetaddress.number}</td>
                                          </tr>
                                          <tr>
                                            <th>Agent Email</th>
                                            <td>{streetaddress.email}</td>
                                          </tr>
                                          <tr>
                                            <th>Agent Address</th>
                                            <td>{streetaddress.streetaddress}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{streetaddress.name}</td>
                          <Link href={`/ecommerce/userInvoice/${item.invoiceNumber}`}>
                            <td>
                              <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                                {item.invoiceNumber}
                              </a>
                            </td>
                          </Link>
                          <td>{streetaddress.number}</td>
                          {/* <td>{item.memberDetails}</td> */}
                          <td>Dhaka</td>
                          <td>Cash on delivery</td>
                          <td>dhaka</td>
                          <td>{item.totalProduct}</td>
                          <td>{item.totalQty}</td>
                          <td>{item.totalPrice}</td>
                          <td>
                            <label className="badge mb-0 badge-warning-inverse">{item.status}</label>
                          </td>
                          {/* <td>
                            <a href="javascript:void(0)" onClick={() => deleteItem(item.id)} className="btn btn-sm btn-outline-danger ml-2">
                              <i className="fa fa-trash"></i>
                            </a>
                          </td> */}
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
  const { data } = await axios.get(process.env.API_URL + "/GetAllSuccessOrderList");
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

export default AllSuccessProductOrder;
