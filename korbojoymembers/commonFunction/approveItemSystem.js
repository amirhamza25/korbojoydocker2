import addNewInformation from "./recoil";

const ApproveItemUpdateInfo = (id, itemInfo, getProductList, updateListOfInfo, updateNextAtom) => {
    const singleItem = itemInfo.filter((getProductList) => getProductList.id == id);
    addNewInformation(updateNextAtom, singleItem[0]);
    if (singleItem.length > 0) {
        const new_products = itemInfo.filter((getProductList) => getProductList.id != id);
        updateListOfInfo(new_products);
    }

};


export default ApproveItemUpdateInfo;


