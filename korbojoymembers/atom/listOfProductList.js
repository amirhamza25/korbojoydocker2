import {
    atom
} from 'recoil';

export const storeListOfProduct = atom({
    key: "storeListOfProduct",
    default: [],
});
export const storeListOfOfferProduct = atom({
    key: "storeListOfOfferProduct",
    default: [],
});
export const storeListOfFlashSales = atom({
    key: "storeListOfFlashSales",
    default: [],
});
export const storeListOfCashBack = atom({
    key: "storeListOfCashBack",
    default: [],
});
export const storeListOfDiscount = atom({
    key: "storeListOfDiscount",
    default: [],
});
export const storeListOfProductPackage = atom({
    key: "storeListOfProductPackage",
    default: [],
});