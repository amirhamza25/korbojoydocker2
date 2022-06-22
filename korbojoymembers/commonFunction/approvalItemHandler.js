import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ApproveItemUpdateInfo from "./approveItemSystem";

const ApproveItem = async (id, currentAtom, currentAtomStore, setCurrentAtom, updateNextAtom, tableNames, columnNames, idColumnNames, updateValues) => {
    const MySwal = withReactContent(Swal);
    ApproveItemUpdateInfo(id, currentAtom, currentAtomStore, setCurrentAtom, updateNextAtom);
    const formData = { tableName: tableNames, columnName: columnNames, idColumnName: idColumnNames, idValue: id, updateValue: updateValues };
    console.log(formData)
    const response = await axios
        .put("https://baybridgebd.com/Update", formData)
        .then((item) => {
            MySwal.fire("Good job!", "updated successfully", "success", item);
        })
        .catch((error) => {
            MySwal.fire("updated not successfully !", "Something Error Found.", "warning");
        });
};

export default ApproveItem;