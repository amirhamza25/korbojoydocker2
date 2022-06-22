import React from "react";
import { useRecoilValue } from "recoil";
import { filteredProducts } from "../../atom/FilterProducts";
import ProductItem from "./productItem";

const Products = () => {
  const products = useRecoilValue(filteredProducts);

  return (
    <>
      <div className="row cols-xl- cols-lg-3 cols-2">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
