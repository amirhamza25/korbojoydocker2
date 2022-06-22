import axios from "axios";
import { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ApproveItem from "../commonFunction/approvalItemHandler";
import useScript from "../commonFunction/ReloadJs";

const sdjfklsfkls = atom({
  key: "sdjfklsfkls",
  default: [],
});

const sdjfklsfklssdf = atom({
  key: "sdjfklsfklssdf",
  default: [],
});

const AddProduct = (props) => {
  useScript("/assets/js/app.js");

  const [currentAtom, setCurrentAtom] = useRecoilState(sdjfklsfkls);

  useEffect(() => {
    const sjdklf = axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setCurrentAtom(res.data);
    });
  }, [setCurrentAtom]);
  const updateNextAtom = useSetRecoilState(sdjfklsfklssdf);

  const dfhsjkdhfjk = useRecoilValue(sdjfklsfkls);
  const dfhsjkdhfjkss = useRecoilValue(sdjfklsfklssdf);
  console.log(dfhsjkdhfjkss);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="datatable-wrapper table-responsive">
                <table id="datatable" className="display compact table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width: "40px" }}>S/L</th>
                      <th>Category name</th>
                      <th>Desktop Icon</th>
                      <th style={{ width: "40px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dfhsjkdhfjk.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td>
                          <a
                            href="javascript:void(0)"
                            onClick={() =>
                              ApproveItem(item.id, currentAtom, sdjfklsfkls, setCurrentAtom, updateNextAtom, "orderdetails", "status", "id", "process")
                            }
                            className="btn btn-sm btn-outline-danger ml-2"
                          >
                            Pending
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

export default AddProduct;
