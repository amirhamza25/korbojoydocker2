import React from "react";
import { useRecoilValue } from "recoil";
import { filteredProducts } from "../atom/FilterProducts";
import ProductItem from "./ProductItem";

const Products = () => {
  const products = useRecoilValue(filteredProducts);
  console.log(products);

  return (
    <>
      <div className="row no-gutters">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
