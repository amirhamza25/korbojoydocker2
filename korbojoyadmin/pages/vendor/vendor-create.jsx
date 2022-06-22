import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import formValueAppend from "../../commonFunction/formValueAppend";
import fromValueUpdate from "../../commonFunction/onChangeHandle";
import useScript from "../../commonFunction/ReloadJs";
const CreateVendor = () => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);
  const [agent, updateAgent] = useState("");

  const categoryHandleChange = (e) => {
    fromValueUpdate(e, updateAgent);
  };

  const [file, setFile] = useState("");
  const fileRead = (e) => {
    setFile(e.target.files[0]);
  };

  const agentHandleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("sponsor", "Admin"); // Need to enter admin identy
    formData.append("img", file);
    formValueAppend(formData, agent);
    const response = await axios
      .post(process.env.API_URL + "/vendor/v1/CreateVendor", formData)
      .then((response) => {
        console.log(response);
        MySwal.fire("Good job!", "Agent added successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Agent not saved!", "Something Error Found.", "warning");
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
                <h4 className="card-title">Create vendor and sub vendor</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={agentHandleSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Name
                      </label>
                      <div className="mb-2">
                        <input type="text" className="form-control" id="fname" name="name" onChange={categoryHandleChange} placeholder="Enter agent name" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Number
                      </label>
                      <div className="mb-2">
                        <input
                          type="number"
                          className="form-control"
                          id="fname"
                          name="number"
                          onChange={categoryHandleChange}
                          placeholder="Enter agent number"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Email
                  </label>
                  <div className="mb-2">
                    <input type="email" className="form-control" id="fname" name="email" onChange={categoryHandleChange} placeholder="Enter agent Email" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Present address
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="presentAddress"
                          onChange={categoryHandleChange}
                          placeholder="Enter present address"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Permanent address
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="permanentAddress"
                          onChange={categoryHandleChange}
                          placeholder="Permanent address"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select division</label>
                      <select id="inputState" name="division" className="form-control" onChange={categoryHandleChange}>
                        <option>Dhaka</option>
                        <option>Bogura</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select district</label>
                      <select id="inputState" className="form-control" name="district" onChange={categoryHandleChange}>
                        <option>Dhaka</option>
                        <option>Bogura</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="inputState">Select upazila</label>
                      <select id="inputState" name="upazila" className="form-control" onChange={categoryHandleChange}>
                        <option>Dhaka</option>
                        <option>Bogura</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Company name
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="companyName"
                          onChange={categoryHandleChange}
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Office address
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="officeAddress"
                          onChange={categoryHandleChange}
                          placeholder="Enter office address"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Nid number
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="nidNumber"
                          onChange={categoryHandleChange}
                          placeholder="Enter nid number"
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
                    <input type="file" className="form-control" id="lname" name="img" onChange={fileRead} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="control-label" htmlFor="fname">
                        Set regular Commission (%)
                      </label>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="commission"
                          onChange={categoryHandleChange}
                          placeholder="Enter regular Commission"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary" name="signUp" value="Submit">
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

export default CreateVendor;
