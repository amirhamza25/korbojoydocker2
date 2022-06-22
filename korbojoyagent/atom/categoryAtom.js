import {
    atom
} from 'recoil';

export const categoryList = atom({
    key: "categoryList",
    default: [],
});

export const storeListOfSubCategory = atom({
    key: "listOfSubCategory",
    default: [],
});


export const storeListOfBrand = atom({
    key: "storeListOfBrand",
    default: [],
});

