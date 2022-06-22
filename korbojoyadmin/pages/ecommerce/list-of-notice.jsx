import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ActiveInactive from "../../commonFunction/activeInactiveHandler";
import deleteInformation from "../../commonFunction/deleteInformation";
import useScript from "../../commonFunction/ReloadJs";
const ListOfNotice = (props) => {
  useScript("/assets/js/app.js");

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
              <h1>List of Notice</h1>
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
                    List of offer
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
                      <th>Picture</th>
                      <th>Type</th>
                      <th>Short discription</th>

                      <th>Status</th>

                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slider.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={process.env.API_URL + "/upload/" + item.img} width={150} height={150} />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.shortDiscription}</td>

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
                          <Link href="/ecommerce/edit/product/[productId]" as={`/ecommerce/edit/product/`}>
                            <a className="btn btn-sm btn-outline-info">
                              <i className="fa fa-edit"></i>
                            </a>
                          </Link>
                        </td>
                        <td>
                          <a href="javascript:void(0);" onClick={() => deleteItem(item.id)} className="btn btn-block btn-square btn-outline-danger">
                            Delete
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

export default ListOfNotice;
