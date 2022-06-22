import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist()
export const listOfVendorAtom = atom({
    key: "listOfVendorAtom",
    default: [],
    effects_UNSTABLE: [persistAtom],
})