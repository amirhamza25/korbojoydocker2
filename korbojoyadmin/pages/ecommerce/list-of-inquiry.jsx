import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ActiveInactive from "../../commonFunction/activeInactiveHandler";
import deleteInformation from "../../commonFunction/deleteInformation";
import useScript from "../../commonFunction/ReloadJs";
const ListOfInquiry = (props) => {
  useScript("/assets/js/app.js");

  const [post, updatePost] = useState("");

  const [file, setFile] = useState("");
  const fileRead = (e) => {
    setFile(e.target.files[0]);
  };

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

  const MySwal = withReactContent(Swal);
  const getSliderList = props.data.data;
  const [slider, updateSliderInfo] = useState(getSliderList);

  useEffect(() => {
    updateSliderInfo(getSliderList);
  }, [getSliderList]);

  const deleteItem = async (id) => {
    const formData = { tableName: "addSliderAndAds", idColumnName: "id", idValue: id };
    const response = await axios
      .post(process.env.API_URL + "/Delete", formData)
      .then((item) => {
        MySwal.fire("Good job!", "Delete information successfully", "success");
        deleteInformation(id, slider, getSliderList, updateSliderInfo);
      })
      .catch((error) => {
        MySwal.fire("information not delete !", "Something Error Found.", "warning");
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of Inquiry</h1>
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
                    List of Inquiry
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
                      <th>S/N</th>
                      <th>User Name</th>
                      <th>Subject</th>
                      <th>Description</th>
                      <th>Picture</th>
                      <th>Reply</th>
                      <th>Action</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slider.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>Subject</td>
                        <td>{item.shortDiscription}</td>

                        <td>
                          <img src={process.env.API_URL + "/upload/" + item.img} width={150} height={150} />
                        </td>
                        <td>
                          <a href="javascript:void(0);" className="btn btn-block btn-outline-info" data-toggle="modal" data-target={`#loginModal${index}`}>
                            Reply Here
                          </a>
                          <div className="modal fade" id={`loginModal${index}`} tabIndex="{-1}" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">Reply Information</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="row">
                                    <div className="col-md-12 m-b-30">
                                      <div className="card card-statistics">
                                        <div className="card-header">
                                          <div className="card-heading">
                                            <h4 className="card-title">Reply Something</h4>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <form onSubmit={blogHandleSubmit} className="form-horizontal" encType="multipart/form-data">
                                            <div className="form-group"></div>

                                            <div className="form-group">
                                              <label className="control-label" htmlFor="lname">
                                                Description
                                              </label>
                                              <div className="mb-2">
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  name="fullDis"
                                                  onChange={PostHandleChange}
                                                  style={{ height: "200px" }}
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <label className="control-label" htmlFor="lname">
                                                Post Image
                                              </label>
                                              <div className="mb-2">
                                                <input type="file" className="form-control" name="img" onChange={fileRead} />
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
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <label className="radio-inline">
                            <input
                              type="radio"
                              className="gg"
                              name={`optradio0${item.id}`}
                              defaultChecked={item.chk == 1 ? true : false}
                              onClick={() => ActiveInactive(item.id, "1", "addSliderAndAds")}
                            />
                            On <br />
                            <input
                              type="radio"
                              className="gg"
                              name={`optradio0${item.id}`}
                              defaultChecked={item.chk == 0 ? true : false}
                              onClick={() => ActiveInactive(item.id, "0", "addSliderAndAds")}
                            />
                            Off
                          </label>
                        </td>
                        <td>
                          <a href="javascript:void(0)" onClick={() => deleteItem(item.id)} className="btn btn-sm btn-outline-danger ml-2">
                            <i className="fa fa-trash"></i>
                          </a>
                        </td>
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
  const { data } = await axios.get(process.env.API_URL + "/GetInformationSingle/addSliderAndAds&status='Offer'");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default ListOfInquiry;
