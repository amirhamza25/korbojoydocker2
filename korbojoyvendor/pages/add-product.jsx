import axios from "axios";
import { getCookie } from "cookies-next";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import formValueAppend from "../commonFunction/formValueAppend";
import fromValueUpdate from "../commonFunction/onChangeHandle";
import useScript from "../commonFunction/ReloadJs";

const AddProduct = (props) => {
  useScript("/assets/js/app.js");
  const MySwal = withReactContent(Swal);
  const [product, upadateProductState] = useState("");

  const categoryHandleChange = (e) => {
    fromValueUpdate(e, upadateProductState);
  };

  console.log(product);

  const [file, setFile] = useState("");
  const fileRead = (e) => {
    setFile(e.target.files[0]);

    console.log(setFile);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const getCookies = getCookie("token");
    let decodedToken = jwtDecode(getCookies);
    console.log(decodedToken);

    var formData = new FormData();
    formData.append("userId", decodedToken["userId"]); // Need to enter admin identy
    formData.append("imgs", file);
    formData.append("productOwner", "Vendor"); // Need to enter product owner

    console.log(process.env.API_URL);
    // you need to append when you send extra value and any file
    formValueAppend(formData, product);
    const response = await axios
      .post(process.env.API_URL + "/vendorPanel/v1/AddProduct", formData)
      .then((response) => {
        MySwal.fire("Good job!", "Product added successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Product not saved!", "Something Error Found.", "warning");
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-1 m-b-30"></div>

        <div className="col-md-10 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add product</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                <div className="form-row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select category</label>
                      <select id="inputState" name="catId" onChange={categoryHandleChange} className="form-control">
                        <option selected>Select category</option>
                        {props.getCatagory.data.map((row) => (
                          <option key={row.id} value={row.id}>
                            {row.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select sub category</label>
                      <select id="inputState" name="subCatId" onChange={categoryHandleChange} className="form-control">
                        <option selected>Select sub category</option>
                        {props.getSubCatagory.data.map((row) => (
                          <option key={row.id} value={row.id}>
                            {row.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select brand</label>
                      <select id="inputState" name="brand" onChange={categoryHandleChange} className="form-control">
                        <option selected>Select brand</option>
                        {props.getBrand.data.map((row) => (
                          <option key={row.id} value={row.id}>
                            {row.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product name
                      </label>
                      <div className="mb-2">
                        <input type="text" name="productName" onChange={categoryHandleChange} className="form-control" id="fname" placeholder="Product name" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product code
                      </label>
                      <div className="mb-2">
                        <input type="text" name="productCode" onChange={categoryHandleChange} className="form-control" id="fname" placeholder="Product code" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Product qty
                  </label>
                  <div className="mb-2">
                    <input type="text" name="productQty" onChange={categoryHandleChange} className="form-control" id="fname" placeholder="Product qty" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product tp price
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="productTpPrice"
                          onChange={categoryHandleChange}
                          className="form-control"
                          id="fname"
                          placeholder="Product tp price"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product buy price
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="productBuyPrice"
                          onChange={categoryHandleChange}
                          className="form-control"
                          id="fname"
                          placeholder="Product buy price"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product cash back
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="productCashBack"
                          onChange={categoryHandleChange}
                          className="form-control"
                          id="fname"
                          placeholder="Product cash back"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product discount
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="discountAmount"
                          onChange={categoryHandleChange}
                          className="form-control"
                          id="fname"
                          placeholder="Product discount"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Product delivery charge
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          onChange={categoryHandleChange}
                          name="productDeliveryCharge"
                          placeholder="Product delivery charge"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Picture
                  </label>
                  <div className="mb-2">
                    <input type="file" name="img" className="form-control" id="lname" onChange={fileRead} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputState">Select product sales type</label>
                  <select id="inputState" name="status" onChange={categoryHandleChange} className="form-control">
                    <option selected>Select product sales type</option>
                    <option value="Reguler">Regular</option>
                    <option value="Offer">Offer</option>
                    <option value="FlashSales">Flash Sales</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="inputState">Select product type</label>
                  <select id="inputState" name="productType" onChange={categoryHandleChange} className="form-control">
                    <option selected>Select product sales type</option>
                    <option value="Reguler">Regular</option>
                    <option value="Package">Package</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Short Discription
                  </label>
                  <div className="mb-2">
                    <textarea rows="5" className="form-control" name="shortDis" onChange={categoryHandleChange} id=""></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Full Discription
                  </label>
                  <div className="mb-2">
                    <textarea rows="5" className="form-control" name="fullDis" onChange={categoryHandleChange} id=""></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary" name="signup" value="Submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");
  const { data: getSubCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/categorySub&chk=1");
  const { data: getBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk='1'");

  return {
    props: { getCatagory, getSubCatagory, getBrand },
  };
}

export default AddProduct;
