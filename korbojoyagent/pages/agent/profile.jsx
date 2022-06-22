import axios from "axios";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useScript from "../../commonFunction/ReloadJs";

function Profile(props) {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);
  const userInfo = props.data[0];
  console.log(props);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = {};
    for (let entry of formData.entries()) {
      user[entry[0]] = entry[1];
    }
    const info = { jsdlk: userInfo["0"].userId, user: user };

    const response = await axios
      .post(process.env.API_URL + "/agentPanel/av1/updateAgentInformation/", info)
      .then((response) => {
        MySwal.fire("Good job!", "Your Profile update successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("update not saved!", "Something Error Found.", "warning");
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          {/* begin page title */}
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>Update profile</h1>
            </div>
            <div className="ml-auto d-flex align-items-center">
              <nav>
                <ol className="breadcrumb p-0 m-b-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="ti ti-home" />
                    </a>
                  </li>
                  <li className="breadcrumb-item">Pages</li>
                  <li className="breadcrumb-item active text-primary" aria-current="page">
                    Update profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* end page title */}
        </div>
      </div>
      {/* end row */}
      {/*mail-Compose-contant-start*/}
      <div className="row account-contant">
        {/* <div className="col-12">
          <div className="card card-statistics">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-xl-3 pb-xl-0 pb-5 border-right">
                  <div className="page-account-profil pt-5">
                    <div className="profile-img text-center rounded-circle">
                      <div className="pt-5">
                        <div className="bg-img m-auto">
                          <img src="assets/img/avtar/01.jpg" className="img-fluid" alt="users-avatar" />
                        </div>
                        <div className="profile pt-4">
                          <h4 className="mb-1">{userInfo["0"].name}</h4>
                  
                        </div>
                      </div>
                    </div>

                    <div className="profile-btn text-center">
                      <div>
                        <button className="btn btn-light text-primary mb-2">Upload New Avatar</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-6 col-12 border-t border-right">
                  <div className="page-account-form">
                    <div className="form-titel border-bottom p-3">
                      <h5 className="mb-0 py-2">Edit Your Profile</h5>
                    </div>
                    <div className="p-4">
                      <form onSubmit={onSubmit} method="post" className="form-horizontal" encType="multipart/form-data">
                        <div className="form-row">
                          <div className="form-group col-md-12">
                            <label htmlFor="name1">Full Name</label>
                            <input type="text" className="form-control" id="name1" name="name" defaultValue={userInfo["0"].name} />
                          </div>

                  

                          <div className="form-group col-md-12">
                            <label htmlFor="phone1">Password</label>
                            <input type="text" className="form-control" id="phone1" name="password" defaultValue={userInfo["0"].password} />
                          </div>

                          <div className="form-group col-md-12">
                            <label htmlFor="email1">Email</label>
                            <input type="email" className="form-control" id="email1" name="email" defaultValue={userInfo["0"].email} />
                          </div>

                          <div className="form-group col-md-12">
                            <label htmlFor="add2">Present Address</label>
                            <input type="text" className="form-control" id="add2" defaultValue={userInfo["0"].presentAddress} name="presentAddress" />
                          </div>
                          <div className="form-group col-md-12">
                            <label htmlFor="add2">Permanent Address</label>
                            <input type="text" className="form-control" id="add2" defaultValue={userInfo["0"].permanentAddress} name="permanentAddress" />
                          </div>

                          <div className="form-group col-md-12">
                            <label htmlFor="add2">Division</label>
                            <input type="text" className="form-control" id="add2" defaultValue={userInfo["0"].division} name="division" />
                          </div>

                          <div className="form-group col-md-12">
                            <label htmlFor="add2">Districts</label>
                            <input type="text" className="form-control" id="add2" defaultValue={userInfo["0"].districts} name="district" />
                          </div>
                          <div className="form-group col-md-12">
                            <label htmlFor="add2">Districts</label>
                            <input type="text" className="form-control" id="add2" defaultValue={userInfo["0"].districts} name="district" />
                          </div>
                          <div className="form-group col-md-12">
                            <label htmlFor="add2">Upazila</label>
                            <input type="text" className="form-control" id="add2" defaultValue={userInfo["0"].upazila} name="upazila" />
                          </div>

                          <div className="form-group col-md-12">
                            <label htmlFor="add2">Company Name </label>
                            <input type="text" className="form-control" id="add2" defaultValue={userInfo["0"].companyName} name="companyName" />
                          </div>
                          <div className="form-group col-md-12">
                            <label htmlFor="add2">Office Address </label>
                            <input type="text" className="form-control" id="add2" defaultValue={userInfo["0"].officeAddress} name="officeAddress" />
                          </div>
                          <div className="form-group col-md-12">
                            <label htmlFor="add2">Nid Number </label>
                            <input type="text" className="form-control" id="add2" defaultValue={userInfo["0"].nidNumber} name="nidNumber" />
                          </div>

                          <button type="submit" className="btn btn-primary">
                            Update Information
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const token = req.cookies.token;
  const decodedToken = jwtDecode(token);

  const data = await axios.get(process.env.API_URL + `/GetInformationSingle/agent&id=${decodedToken.userId}&chk=1`);
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default Profile;
