import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ActiveInactive from "../../commonFunction/activeInactiveHandler";
import deleteInformation from "../../commonFunction/deleteInformation";
import useScript from "../../commonFunction/ReloadJs";
const ListOfBlogs = (props) => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);
  const getBlogList = props.data;
  console.log(getBlogList);

  const [blog, updateBlogInfo] = useState(getBlogList);

  useEffect(() => {
    updateBlogInfo(getBlogList);
  }, [getBlogList]);

  const deleteItem = async (id) => {
    const formData = { tableName: "blog", idColumnName: "id", idValue: id };
    const response = await axios
      .post(process.env.API_URL + "/Delete", formData)
      .then((item) => {
        MySwal.fire("Good job!", "Delete information successfully", "success");
        deleteInformation(id, blog, getBlogList, updateBlogInfo);
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
              <h1>List of Blogs</h1>
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
                    List of Blogs
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
                      <th>Title</th>
                      <th>Short discription</th>
                      <th>Full discription</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getBlogList.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={process.env.API_URL + "/upload/" + item.img} width={150} height={150} />
                        </td>
                        <td>{item.tittle}</td>
                        <td style={{ width: 100 }}>{item.shortDis}</td>
                        <td>{item.fullDis}</td>
                        <td>
                          <label className="radio-inline">
                            <input
                              type="radio"
                              className="gg"
                              name={`optradio0${item.id}`}
                              defaultChecked={item.chk == 1 ? true : false}
                              onClick={() => ActiveInactive(item.id, "1", "blog")}
                            />
                            On <br />
                            <input
                              type="radio"
                              className="gg"
                              name={`optradio0${item.id}`}
                              defaultChecked={item.chk == 0 ? true : false}
                              onClick={() => ActiveInactive(item.id, "0", "blog")}
                            />
                            Off
                          </label>
                        </td>
                        <td>
                          <Link href="/ecommerce/edit/slider/[sliderId]" as={`/ecommerce/edit/slider/${item.id}`}>
                            <a className="btn btn-sm btn-outline-info">
                              <i className="fa fa-edit"></i>
                            </a>
                          </Link>
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
  const { data } = await axios.get(process.env.API_URL + "/ListOfBlogPost");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default ListOfBlogs;
