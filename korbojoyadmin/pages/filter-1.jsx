import axios from "axios";
import { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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

  const [text, setText] = useRecoilState(sdjfklsfkls);

  useEffect(() => {
    const sjdklf = axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setText(res.data);
    });
  }, [setText]);
  const eeeeeee = useSetRecoilState(sdjfklsfklssdf);

  const ApproveItemUpdateInfo = (id, itemInfo, getProductList, updateListOfInfo) => {
    const new_products = itemInfo.filter((getProductLists) => getProductLists.id != id);
    console.log(updateListOfInfo);
    updateListOfInfo(new_products);
  };

  const ApproveItem = async (id) => {
    const formData = { tableName: "orderdetails", columnName: "status", idColumnName: "id", idValue: id, updateValue: "process" };
    ApproveItemUpdateInfo(id, text, sdjfklsfkls, setText);
    const new_products = text.filter((sdjfklsfkls) => sdjfklsfkls.id != id);
    setText(new_products);
    const singleItem = text.filter((sdjfklsfkls) => sdjfklsfkls.id == id);
    addNewInformation(eeeeeee, singleItem[0]);
    const response = await axios
      .put("http://192.168.1.7:4000/Update", formData)
      .then((item) => {
        // MySwal.fire("Good job!", "Delete information successfully", "success");
        // ApproveItemUpdateInfo(id, text, sdjfklsfkls, setText);
        // const singleItem = itemInfo.filter((getProductList) => getProductList.id == id);
        // addNewInformation(eeeeeee, singleItem[0]);
      })
      .catch((error) => {
        // MySwal.fire("information not delete !", "Something Error Found.", "warning");
      });
  };
  const dfhsjkdhfjk = useRecoilValue(sdjfklsfkls);
  const dfhsjkdhfjkss = useRecoilValue(sdjfklsfklssdf);
  console.log(dfhsjkdhfjk);
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
                          <a href="javascript:void(0)" onClick={() => ApproveItem(item.id)} className="btn btn-sm btn-outline-danger ml-2">
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
