import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredProducts, productFilteredState } from "../atom/FilterProducts";

const Sidebar = () => {
  const [filter, setFilter] = useRecoilState(productFilteredState);
  const products = useRecoilValue(filteredProducts);

  const obj = [...new Map(products.map((item) => [JSON.stringify(item.name), item])).values()];
  return (
    <>
      <div className="columns is-multiline">
        <div className="widget widget-collapsible">
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="btn btn-round btn-outline-secondary" style={{ width: "100%" }}>
            <option value="" className="widget-body filter-items item-check mt-1 h6">
              show all
            </option>
            {obj.map((product) => (
              <option value={product.name}>{product.name}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
