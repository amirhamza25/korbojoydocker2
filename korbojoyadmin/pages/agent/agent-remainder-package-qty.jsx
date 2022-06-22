import axios from "axios";
import Link from "next/link";
import useScript from "../../commonFunction/ReloadJs";
const AgentRemainderPackageQty = (props) => {
  useScript("/assets/js/app.js");

  const agents = props.data.data;
  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of agent remainder package stock</h1>
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
                    List of daily cancel product order
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
                      <th>Outlet/Agent id</th>
                      <th>User name</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Stock Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agents.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>

                        <td>{item.id}</td>

                        <td>{item.name}</td>

                        <td>{item.number}</td>
                        <td>{item.email}</td>
                        <td>{item.presentAddress}</td>

                        <Link href={`/agent/AgentRemainderPackageQty/${item.id}`}>
                          <td>
                            <a href="javascript:void(0);" className="btn btn-block btn-outline-info">
                              Information
                            </a>
                          </td>
                        </Link>
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
  // const { data } = await axios.get(process.env.API_URL + "/DailyCancelOrderList");
  const { data } = await axios.get(process.env.API_URL + "/GetInformationSingle/agent&chk=1");
  // console.log(data)
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
export default AgentRemainderPackageQty;
