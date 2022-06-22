import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import formValueAppend from "../../commonFunction/formValueAppend";
import fromValueUpdate from "../../commonFunction/onChangeHandle";
import useScript from "../../commonFunction/ReloadJs";
const AddNotice = () => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);

  const [slider, updateSlider] = useState();
  const changeStateUpdateHandler = (e) => {
    fromValueUpdate(e, updateSlider);
  };
  const [file, setFile] = useState("");
  const fileRead = (e) => {
    setFile(e.target.files[0]);
  };

  const sliderHandleSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("imgs", file);
    formValueAppend(formData, slider);

    const response = await axios
      .post(process.env.API_URL + "/AddSliderAndAds", formData)
      .then((response) => {
        MySwal.fire("Good job!", "Slider added successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Slider not saved!", "Something Error Found.", "warning");
      });
  };

  return (
    <div className="row">
      <div className="col-md-12 m-b-30">
        <div className="card card-statistics">
          <div className="card-header">
            <div className="card-heading">
              <h4 className="card-title">Add Notice</h4>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={sliderHandleSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="title">
                      Title
                    </label>
                    <div className="mb-2">
                      <input type="text" className="form-control" name="title" onChange={changeStateUpdateHandler} placeholder="Title" />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="fname">
                      Short discription
                    </label>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        name="shortDiscriptions"
                        onChange={changeStateUpdateHandler}
                        placeholder="Short discription"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="control-label" htmlFor="lname">
                      Picture
                    </label>
                    <div className="mb-2">
                      <input multiple type="file" className="form-control" name="imgs" onChange={fileRead} />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="inputState">Date</label>
                    <div className="mb-2">
                      <input type="text" className="form-control" name="shortDiscriptions" onChange={changeStateUpdateHandler} placeholder="date" />
                    </div>
                  </div>
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
  );
};

export default AddNotice;
