import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { categoryList, storeListOfSubCategory } from "../../atom/categoryAtom";
import formValueAppend from "../../commonFunction/formValueAppend";
import fromValueUpdate from "../../commonFunction/onChangeHandle";
import addNewInformation from "../../commonFunction/recoil";
import useScript from "../../commonFunction/ReloadJs";

const AddCategory = (props) => {
  useScript("/assets/js/app.js");

  const MySwal = withReactContent(Swal);

  const [category, setCategory] = useState("");

  // subcategory useState
  const [subcategory, setSubcategory] = useState("");

  // brand useState
  const [brand, setBrand] = useState("");

  // category handle change
  const categoryHandleChange = (e) => {
    fromValueUpdate(e, setCategory);
  };

  const [file, setFile] = useState("");
  const fileRead = (e) => {
    setFile(e.target.files[0]);
  };

  // subcategory handle change
  const subcategoryHandleChange = (e) => {
    fromValueUpdate(e, setSubcategory);
  };
  const [files, setFiles] = useState("");
  const fileReads = (e) => {
    setFiles(e.target.files[0]);
  };
  console.log(files);
  // brand handle change
  const brandHandleChange = (e) => {
    fromValueUpdate(e, setBrand);
  };

  const [files1, setFiles1] = useState("");
  const fileReads1 = (e) => {
    setFiles1(e.target.files[0]);
  };
  console.log(files1);

  const brandHandleSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("desktopicon", files1);
    formData.append("mobileicon", files1);
    formData.append("brandicon", files1);
    formValueAppend(formData, brand);

    const response = await axios
      .post(process.env.API_URL + "/AddCategoryBrand", formData)
      .then((item) => {
        MySwal.fire("Good job!", "Brand added successfully", "success");
      })
      .catch((error) => {
        MySwal.fire("Brand not saved!", "Something Error Found.", "warning");
      });
  };
  // End brand

  // Fetch category data and update to atom
  const getListOfCategory = props.getCatagory.data;
  const getListOfSubCategory = props.getSubCatagory.data;
  const listOfCategory = useSetRecoilState(categoryList);
  const listOfSubCategory = useSetRecoilState(storeListOfSubCategory);
  useEffect(() => {
    listOfCategory(getListOfCategory);
    listOfSubCategory(getListOfSubCategory);
  }, [getListOfCategory, getListOfSubCategory]);

  // Category data submit
  const categoryHandleSubmit = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("desktopicon", file);
    formData.append("mobileicon", file);
    formData.append("brandicon", file);
    formValueAppend(formData, category);

    const response = await axios
      .post(process.env.API_URL + "/AddCategory", formData)
      .then((item) => {
        MySwal.fire("Good job!", item.data["success"]["0"]["result"], "success");
        // create object category information
        const info = {
          id: item.data["success"]["0"]["msg"]["id"],
          title: item.data["success"]["0"]["msg"]["title"],
          desktopicon: item.data["success"]["0"]["msg"]["desktopicon"],
          mobileicon: item.data["success"]["0"]["msg"]["mobileicon"],
          chk: item.data["success"]["0"]["msg"]["chk"],
        };
        // update category information
        addNewInformation(listOfCategory, info);
      })
      .catch((error) => {
        MySwal.fire("Category do not save !!", "Something Error Found.", "warning");
      });
  };

  const subcategoryHandleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("desktopicon", files);
    formData.append("mobileicon", files);
    formData.append("brandicon", files);
    formValueAppend(formData, subcategory);

    const response = await axios
      .post(process.env.API_URL + "/AddSubCategory", formData)
      .then((item) => {
        MySwal.fire("Good job!", "Subcategory added successfully", "success");
        // create object sub category information
        const info = {
          id: item.data["success"]["0"]["msg"]["id"],
          id: item.data["success"]["0"]["msg"]["categoryId"],
          title: item.data["success"]["0"]["msg"]["title"],
          desktopicon: item.data["success"]["0"]["msg"]["desktopicon"],
          mobileicon: item.data["success"]["0"]["msg"]["mobileicon"],
          chk: item.data["success"]["0"]["msg"]["chk"],
        };
        // update sub category information
        addNewInformation(listOfSubCategory, info);
      })
      .catch((error) => {
        MySwal.fire("Subcategory not saved!", "Something Error Found.", "warning");
      });
  };
  // End subcategory

  // Show list of category
  const showCategoryData = useRecoilValue(categoryList);
  const showSubCategoryData = useRecoilValue(storeListOfSubCategory);
  return (
    <div>
      <div className="row">
        <div className="col-md-6 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add category</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={categoryHandleSubmit} className="form-horizontal" encType="multipart/form-data">
                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Category name
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="title" placeholder="Category name" onChange={categoryHandleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Category Image
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" name="desktopicon" onChange={fileRead} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Category icon
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" name="mobileicon" onChange={fileRead} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Brand Image
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" name="brandicon" onChange={fileRead} />
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

        <div className="col-md-6 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add sub category</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={subcategoryHandleSubmit} className="form-horizontal" encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="inputState">Select category</label>
                  <select id="inputState" name="categoryId" className="form-control" onChange={subcategoryHandleChange}>
                    <option selected>Select category</option>
                    {showCategoryData.map((row) => (
                      <option key={row.id} value={row.id}>
                        {row.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="subcategory">
                    Subcategory name
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" onChange={subcategoryHandleChange} name="title" placeholder="Sub category name" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Category Image
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" onChange={fileReads} name="desktopicon" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Category icon
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" onChange={fileReads} name="mobileicon" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Brand Image
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" onChange={fileReads} name="brandicon" />
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-2 m-b-30"></div>

        <div className="col-md-8 m-b-30">
          <div className="card card-statistics">
            <div className="card-header">
              <div className="card-heading">
                <h4 className="card-title">Add brand</h4>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={brandHandleSubmit} className="form-horizontal" encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="inputState">Select category</label>
                  <select onChange={brandHandleChange} name="categoryId" className="form-control">
                    <option selected>Select category</option>
                    {showCategoryData.map((row) => (
                      <option key={row.id} value={row.id}>
                        {row.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="inputState">Select sub category</label>
                  <select onChange={brandHandleChange} name="subId" className="form-control">
                    <option selected>Select sub category</option>
                    {showSubCategoryData.map((row) => (
                      <option key={row.id} value={row.id}>
                        {row.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="fname">
                    Brand name
                  </label>
                  <div className="mb-2">
                    <input type="text" className="form-control" name="title" onChange={brandHandleChange} placeholder="Brand name" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Desktop icon
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" onChange={fileReads1} name="desktopicon" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Mobile icon
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" onChange={fileReads1} name="mobileicon" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="lname">
                    Brand icon
                  </label>
                  <div className="mb-2">
                    <input type="file" className="form-control" onChange={fileReads1} name="barndicon" />
                  </div>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
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

export async function getServerSideProps(context) {
  const { data: getCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/category&chk=1");
  const { data: getSubCatagory } = await axios.get(process.env.API_URL + "/GetInformationSingle/categorySub&chk=1");

  return {
    props: { getCatagory, getSubCatagory },
  };
}

export default AddCategory;
