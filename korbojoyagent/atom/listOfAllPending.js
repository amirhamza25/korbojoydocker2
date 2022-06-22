import {
    atom
} from 'recoil';

export const storeAllPendingListOfProduct = atom({
    key: "storeAllPendingListOfProduct",
    default: [],
});
export const storeAllProcessListOfProduct = atom({
    key: "storeAllProcessListOfProduct",
    default: [],
});
export const storeAllSuccessListOfProduct = atom({
    key: "storeAllSuccessListOfProduct",
    default: [],
});
export const storeAllCancelListOfProduct = atom({
    key: "storeAllCancelListOfProduct",
    default: [],
});



export const storeAllReturnPendingListOfProduct = atom({
    key: "storeAllReturnPendingListOfProduct",
    default: [],
});
export const storeAllReturnProcessListOfProduct = atom({
    key: "storeAllReturnProcessListOfProduct",
    default: [],
});
export const storeAllReturnSuccessListOfProduct = atom({
    key: "storeAllReturnSuccessListOfProduct",
    default: [],
});
export const storeAllReturnCancelListOfProduct = atom({
    key: "storeAllReturnCancelListOfProduct",
    default: [],
});