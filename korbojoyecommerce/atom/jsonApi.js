import { selector } from "recoil";

export const jsonApi = selector({
    key: "jsonApi",
    get: async () => {
        const response = await fetch(getMyRequestUrl());
        return response.json();
    }
})