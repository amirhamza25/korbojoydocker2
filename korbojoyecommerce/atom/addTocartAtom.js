import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist()
export const cartState = atom({
    key: "cartState",
    default: {},
    effects_UNSTABLE: [persistAtom],
})

export const addToCartProductInfo = atom({
    key: "addToCartProductInfo ",
    default: [],
    effects_UNSTABLE: [persistAtom],
})

export const cartFilter = atom({
    key: "filteredProduct",
    default: [],
    effects_UNSTABLE: [persistAtom],
})
