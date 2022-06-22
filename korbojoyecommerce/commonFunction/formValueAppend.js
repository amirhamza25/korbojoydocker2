const formValueAppend = (formDataObject, fromDataObject) => {
    Object.entries(fromDataObject).map(([key, value]) => {
        formDataObject.append(key, value);
    });

    // for (var pair of formDataObject.entries()) {
    //     console.log(pair[0] + ", " + pair[1]);
    // }
}
export default formValueAppend