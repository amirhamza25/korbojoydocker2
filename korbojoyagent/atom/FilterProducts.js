import { atom, selector } from "recoil";

export const productState = atom({
  key: "productState",
  default: [
  ],
});
console.log(productState)

export const viewState = atom({
  key: "viewState",
  default: "column",
});

export const searchTextState = atom({
  key: "searchTextState",
  default: "",
});

export const productFilteredState = atom({
  key: "productFilteredState",
  default: "",
});

export const filteredProducts = selector({
  key: "filteredProducts",
  get: ({ get }) => {
    const products = get(productState);
    const searchText = get(searchTextState);
    const filterItem = get(productFilteredState);
    let filteredProducts = [];
    filteredProducts = products
      .filter((product) => product.name.includes(searchText))
      .filter((product) =>
        filterItem === "" ? true : product.name === filterItem
      );

    return filteredProducts;
  },
});

export const filteredCounts = selector({
  key: "filteredCounts",
  get: ({ get }) => {
    let filtredProductsCount = get(filteredProducts);
    return filtredProductsCount.length;
  },
});
