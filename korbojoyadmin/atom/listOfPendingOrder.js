import {
    atom
} from 'recoil';

export const storePendingListOfProduct = atom({
    key: "storePendingListOfProduct",
    default: [],
});
export const storeProcessListOfProduct = atom({
    key: "storeProcessListOfProduct",
    default: [],
});
export const storeSuccessListOfProduct = atom({
    key: "storeSuccessListOfProduct",
    default: [],
});
export const storeCancelListOfProduct = atom({
    key: "storeCancelListOfProduct",
    default: [],
});



export const storeReturnPendingListOfProduct = atom({
    key: "storeReturnPendingListOfProduct",
    default: [],
});
export const storeReturnProcessListOfProduct = atom({
    key: "storeReturnProcessListOfProduct",
    default: [],
});
export const storeReturnSuccessListOfProduct = atom({
    key: "storeReturnSuccessListOfProduct",
    default: [],
});
export const storeReturnCancelListOfProduct = atom({
    key: "storeReturnCancelListOfProduct",
    default: [],
});