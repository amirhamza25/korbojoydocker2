import axios from "axios";
import ApproveItemUpdateInfo from "./approveItemSystem";

const ApproveItem = async (id, currentAtom, currentAtomStore, setCurrentAtom, updateNextAtom, tableNames, columnNames, idColumnNames, updateValues) => {
    ApproveItemUpdateInfo(id, currentAtom, currentAtomStore, setCurrentAtom, updateNextAtom);
    const formData = { tableName: tableNames, columnName: columnNames, idColumnName: idColumnNames, idValue: id, updateValue: updateValues };
    const response = await axios
        .put("https://baybridgebd.com/Update", formData)
        .then((item) => {
            MySwal.fire("Good job!", "Delete information successfully", "success", item);
        })
        .catch((error) => {
            // MySwal.fire("information not delete !", "Something Error Found.", "warning");
        });
};

export default ApproveItem;