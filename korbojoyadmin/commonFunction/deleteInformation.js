const deleteInformation = (id, itemInfo, getProductList, updateListOfInfo) => {
    const new_products = itemInfo.filter((getProductList) => getProductList.id != id);
    updateListOfInfo(new_products);
};

export default deleteInformation;