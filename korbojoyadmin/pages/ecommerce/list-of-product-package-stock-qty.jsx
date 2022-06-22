import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useScript from "../../commonFunction/ReloadJs";

const ListOfProductPackageStockQty = (props) => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);
  const getProductList = props.data;
  console.log(getProductList);
  const [product, updateProductInfo] = useState(getProductList);

  useEffect(() => {
    updateProductInfo(getProductList);
  }, [getProductList]);
  // const deleteItem = async (id) => {
  //   const formData = { tableName: "product", idColumnName: "id", idValue: id };
  //   const response = await axios
  //     .post(process.env.API_URL + "/Delete", formData)
  //     .then((item) => {
  //       MySwal.fire("Good job!", "Delete information successfully", "success");
  //       deleteInformation(id, product, getProductList, updateProductInfo);
  //     })
  //     .catch((error) => {
  //       MySwal.fire("Brand not saved!", "Something Error Found.", "warning");
  //     });
  // };
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of product package stock qty</h1>
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
                    List of product package stock qty
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
                      <th>serial</th>

                      <th>Product name</th>
                      <th>Qty</th>
                      <th>Tp price</th>
                      <th>Buy price</th>
                      <th>Product type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {/* <td>{item.categories ? item.categories[0]["title"] : null}</td>
                        <td>{item.categorySubs ? item.categorySubs[0]["title"] : null}</td>
                        <td>{item.categoryBrands ? item.categoryBrands[0]["title"] : null}</td> */}
                        <td>{item.products[0]["name"]}</td>
                        <td>{item.qty}</td>
                        <td>{item.products[0]["realPrice"]}</td>
                        <td>{item.products[0]["buyPrice"]}</td>
                        <td>{item.products[0]["productType"]}</td>
                        <td>{item.products[0]["status"]}</td>
                      </tr>
                    ))}
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
  const { data } = await axios.get(process.env.API_URL + "/PackageProductStockQtyList");
  console.log(data);
  return {
    props: { data },
  };
}

export default ListOfProductPackageStockQty;
