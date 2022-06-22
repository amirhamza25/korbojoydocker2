import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import formValueAppend from "../../commonFunction/formValueAppend";
import fromValueUpdate from "../../commonFunction/onChangeHandle";
import useScript from "../../commonFunction/ReloadJs";

const UpdateProductStockQty = () => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);
  const [product, upadateProductState] = useState("");

  const categoryHandleChange = (e) => {
    fromValueUpdate(e, upadateProductState);
  };

  console.log(product);
  // const [file, setFile] = useState("");
  // const fileRead = (e) => {
  //   setFile(e.target.files[0]);
  //   console.log(setFile);
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("userId", "11"); // Need to enter admin identy
    formData.append("productOwner", "Admin"); // Need to enter product owner

    // you need to append when you send extra value and any file
    formValueAppend(formData, product);
    const response = await axios
      .post(process.env.API_URL + "/AddProduct", formData)
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
        <div className="col-md-2 m-b-30"></div>

        <div className="col-md-8 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Update product stock qty</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="inputState">Select product type</label>
                  <select id="inputState" className="form-control" onChange={categoryHandleChange} name="productType">
                    <option selected>Select product type</option>
                    <option>Regular product</option>
                    <option>Package product</option>
                  </select>
                </div>

                <div className="selects-contant select-wrapper">
                  <div className="card card-statistics">
                    <label htmlFor="inputState">Select product</label>
                    <div className="card-body">
                      <div className="form-group mb-0">
                        <select className="js-basic-single form-control" name="state" id="inputState" onChange={categoryHandleChange}>
                          <optgroup label="Central Time Zone">
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="IL">Illinois</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="OK">Oklahoma</option>
                            <option value="SD">South Dakota</option>
                            <option value="TX">Texas</option>
                            <option value="TN">Tennessee</option>
                            <option value="WI">Wisconsin</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Product qty
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" id="fname" name="productname" onChange={categoryHandleChange} placeholder="Product name" />
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

export default UpdateProductStockQty;
