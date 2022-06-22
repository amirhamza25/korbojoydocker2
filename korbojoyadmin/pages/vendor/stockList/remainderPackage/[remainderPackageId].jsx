import axios from "axios";
import useScript from "../../../../commonFunction/ReloadJs";

const VendorRemainderPackageStockQty = (props) => {
  useScript("/assets/js/app.js");

  const getProductStockQty = props.data;

  return (
    <div>
      <div className="row">
        <div className="col-md-12 m-b-30">
          <div className="d-block d-sm-flex flex-nowrap align-items-center">
            <div className="page-title mb-2 mb-sm-0">
              <h1>List of vendor product package remainder stock qty</h1>
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
                    List of vendor product package remainder stock qty
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

                      <th>Brand Code</th>

                      <th>Total qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getProductStockQty.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={process.env.API_URL + "/upload/" + item.products[0].img} width={150} height={150} />
                        </td>
                        <td>{item.products[0].name}</td>

                        <td>{item.products[0].brandCode}</td>

                        <td>{item.qty}</td>
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
  const id = context.params.remainderPackageId;
  const { data } = await axios.get(process.env.API_URL + "/vendorPanel/v1/GetListOfProductRemainderPackageStock/" + id);
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

export default VendorRemainderPackageStockQty;
