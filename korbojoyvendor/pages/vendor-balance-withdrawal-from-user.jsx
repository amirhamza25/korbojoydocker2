import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import formValueAppend from "../commonFunction/formValueAppend";
import fromValueUpdate from "../commonFunction/onChangeHandle";
import useScript from "../commonFunction/ReloadJs";

const VendorBalanceWithdrawalFromUser = (props) => {
  const { children, value, index, ...other } = props;

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
    // formData.append("imgs", file);
    formData.append("productOwner", "Vendor"); // Need to enter product owner

    console.log(process.env.API_URL);
    // you need to append when you send extra value and any file
    formValueAppend(formData, product);
    const response = await axios
      .post("http://192.168.1.7:4000/vendorPanel/v1/AddProduct", formData)
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
                <h4 className="card-title">Balance Withdraw</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Current Balance
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="currentBalance"
                          onChange={categoryHandleChange}
                          className="form-control"
                          id="fname"
                          placeholder="Current Balance"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inputState">Select Payment Method</label>
                  <select id="inputState" name="status" onChange={categoryHandleChange} className="form-control">
                    <option selected>Select product sales type</option>
                    <option value="BKash">BKash</option>
                    <option value="Rocket">Rocket</option>
                    <option value="Bank">Bank </option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Bank Name
                      </label>
                      <div className="mb-2">
                        <input type="text" name="bankName" onChange={categoryHandleChange} className="form-control" id="fname" placeholder="Bank Name" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Branch Name
                      </label>
                      <div className="mb-2">
                        <input type="text" name="branchName" onChange={categoryHandleChange} className="form-control" id="fname" placeholder="Branch Name" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Account No
                      </label>
                      <div className="mb-2">
                        <input type="text" name="accountNo" onChange={categoryHandleChange} className="form-control" id="fname" placeholder="Account No" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Holder Name
                      </label>
                      <div className="mb-2">
                        <input type="text" name="holderName" onChange={categoryHandleChange} className="form-control" id="fname" placeholder="Holder Name" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Amount
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" onChange={categoryHandleChange} name="amount" placeholder="Amount" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Password
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" onChange={categoryHandleChange} name="password" placeholder="Password" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary" name="signup" value="Submit">
                    Submit
                  </button>
                  <Button variant="contained" color="primary"></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");
//   const { data: getSubCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/categorySub&chk=1");
//   const { data: getBrand } = await axios.get(process.env.API_URL + "/GetInformationSingle/categoryBrand&chk='1'");

//   return {
//     props: { getCatagory, getSubCatagory, getBrand },
//   };
// }

export default VendorBalanceWithdrawalFromUser;
