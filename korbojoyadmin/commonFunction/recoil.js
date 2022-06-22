const addNewInformation = (nameOfState, info) => {
    nameOfState((prev) => [...prev, info]);
};

export default addNewInformation; 