import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import formValueAppend from "../../commonFunction/formValueAppend";
import fromValueUpdate from "../../commonFunction/onChangeHandle";
import useScript from "../../commonFunction/ReloadJs";

const AddBlog = (props) => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);

  const [post, updatePost] = useState("");

  const [file, setFile] = useState("");
  const fileRead = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(file);

  // brand handle change
  const PostHandleChange = (e) => {
    fromValueUpdate(e, updatePost);
  };

  const blogHandleSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("img", file);
    formValueAppend(formData, post);

    const response = await axios
      .post(process.env.API_URL + "/BlogPostUpload", formData)
      .then((item) => {
        MySwal.fire("Good job!", "Blog post added successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Blog post not saved!", "Something Error Found.", "warning");
      });
  };
  // End brand

  return (
    <div>
      <div className="row">
        <div className="col-md-6 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add Blog</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={blogHandleSubmit} className="form-horizontal" encType="multipart/form-data">
                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Title
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="tittle" placeholder="Category name" onChange={PostHandleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Short discription
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="shortDis" onChange={PostHandleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Full discription
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="fullDis" onChange={PostHandleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Post Image
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" name="img" onChange={fileRead} multiple />
                  </div>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary" value="Submit">
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

export default AddBlog;
