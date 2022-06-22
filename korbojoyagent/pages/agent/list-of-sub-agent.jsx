import axios from "axios";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import useScript from "../../commonFunction/ReloadJs";
const ListOfSubAgent = (props) => {
  useScript("/assets/js/app.js");
  const getSubAgentList = props.data;
  console.log(getSubAgentList);
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of sub agent</h1>
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
                    List of sub agent
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
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Details</th>
                      <th>Join date</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getSubAgentList.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={process.env.API_URL + "/upload/" + JSON.parse(item.img)} width={150} height={150} />
                        </td>

                        <td>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.email}</td>
                        <td>
                          <a href="javascript:void(0);" className="btn btn-block btn-outline-info" data-toggle="modal" data-target={`#loginModal${index}`}>
                            Information
                          </a>
                          <div className="modal fade" id={`loginModal${index}`} tabIndex="{-1}" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">Sub Agent Details</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <div className="datatable-wrapper table-responsive">
                                    <table id="datatable" className="display compact table table-striped table-bordered">
                                      <tbody>
                                        <tr>
                                          <th>Present Address</th>
                                          <td>{item.presentAddress}</td>
                                        </tr>
                                        <tr>
                                          <th>Permanent Address</th>
                                          <td>{item.permanentAddress}</td>
                                        </tr>
                                        <tr>
                                          <th>Division</th>
                                          <td>{item.division}</td>
                                        </tr>
                                        <tr>
                                          <th>District</th>
                                          <td>{item.district}</td>
                                        </tr>
                                        <tr>
                                          <th>Upazila</th>
                                          <td>{item.upazila}</td>
                                        </tr>
                                        <tr>
                                          <th>CompanyName</th>
                                          <td>{item.companyName}</td>
                                        </tr>
                                        <tr>
                                          <th>Office Address</th>
                                          <td>{item.officeAddress}</td>
                                        </tr>
                                        <tr>
                                          <th>commission</th>
                                          <td>{item.commission}</td>
                                        </tr>
                                        <tr>
                                          <th>NID Number</th>
                                          <td>{item.nidNumber}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{item.date}</td>
                        <td>
                          <Link href="/agent/edit" as={`/agent/edit/${item.id}`}>
                            <a className="btn btn-sm btn-outline-info">
                              <i className="fa fa-edit"></i>
                            </a>
                          </Link>
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

export async function getServerSideProps({ req }) {
  const token = req.cookies.token;
  const decodedToken = jwtDecode(token);
  const { data } = await axios.get(process.env.API_URL + "/agentPanel/av1/ListOfSubAgent/" + decodedToken.userId);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default ListOfSubAgent;
