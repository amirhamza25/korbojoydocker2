import {
    atom
} from 'recoil';

export const storeListOfVendorUserPending = atom({
    key: "storeListOfVendorUserPending",
    default: [],
});
export const storeListOfVendorUserSuccess = atom({
    key: "storeListOfVendorUserSuccess",
    default: [],
});
export const storeListOfVendorUserProcess = atom({
    key: "storeListOfVendorSalesProcess",
    default: [],
});
export const storeListOfVendorUserPicked = atom({
    key: "storeListOfVendorUserPicked",
    default: [],
});
export const storeListOfVendorUserDelivery = atom({
    key: "storeListOfVendorUserDelivery",
    default: [],
});
export const storeListOfVendorUserCancel = atom({
    key: "storeListOfVendorUserCancel",
    default: [],
});
export const storeListOfVendorUserReturn = atom({
    key: "storeListOfVendorUserReturn",
    default: [],
});