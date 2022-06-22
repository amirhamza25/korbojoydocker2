import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const ActiveInactive = async (id, kds, table) => {
  const MySwal = withReactContent(Swal);
  console.log(id, kds);

  const formData = { tableName: table, columnName: "chk", idColumnName: "id", idValue: id, updateValue: kds };
  console.log(formData);
  const response = await axios
    .put(process.env.API_URL + "/Update", formData)
    .then((item) => {
      MySwal.fire("Good job!", "successfully update", "success");
    })
    .catch((error) => {
      MySwal.fire("information not delete !", "Something Error Found.", "warning");
    });
};
export default ActiveInactive;
