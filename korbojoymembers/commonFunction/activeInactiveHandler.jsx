import axios from "axios";

const ActiveInactive = async (id, kds) => {
  const formData = { tableName: "product", columnName: "chk", idColumnName: "id", idValue: id, updateValue: kds };
  console.log(formData);
  const response = await axios
    .put("https://baybridgebd.com/Update", formData)
    .then((item) => {
      // MySwal.fire("Good job!", "Delete information successfully", "success");
    })
    .catch((error) => {
      // MySwal.fire("information not delete !", "Something Error Found.", "warning");
    });
};
export default ActiveInactive;
