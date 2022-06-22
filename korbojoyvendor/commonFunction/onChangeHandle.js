const fromValueUpdate = (event, stateUpdate) => {
    const { name, value } = event.target;
    stateUpdate((pre) => {
        return {
            ...pre,
            [name]: value,
        };
    });
};

export default fromValueUpdate