import {
    atom
} from 'recoil';

export const storeAgentAgentPendingListOfProduct = atom({
    key: "storeAgentPendingListOfProduct",
    default: [],
});
export const storeAgentProcessListOfProduct = atom({
    key: "storeAgentProcessListOfProduct",
    default: [],
});
export const storeAgentSuccessListOfProduct = atom({
    key: "storeAgentSuccessListOfProduct",
    default: [],
});
export const storeAgentCancelListOfProduct = atom({
    key: "storeAgentCancelListOfProduct",
    default: [],
});



export const storeAgentReturnPendingListOfProduct = atom({
    key: "storeAgentReturnPendingListOfProduct",
    default: [],
});
export const storeAgentReturnProcessListOfProduct = atom({
    key: "storeAgentReturnProcessListOfProduct",
    default: [],
});
export const storeAgentReturnSuccessListOfProduct = atom({
    key: "storeAgentReturnSuccessListOfProduct",
    default: [],
});
export const storeAgentReturnCancelListOfProduct = atom({
    key: "storeAgentReturnCancelListOfProduct",
    default: [],
});