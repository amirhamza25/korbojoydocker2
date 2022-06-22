import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredProducts, productFilteredState, searchTextState } from "../../atom/FilterProducts";

const Sidebar = () => {
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [filter, setFilter] = useRecoilState(productFilteredState);

  const products = useRecoilValue(filteredProducts);

  const obj = [...new Map(products.map((item) => [JSON.stringify(item.name), item])).values()];

  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <input
        type="text"
        className="form-control"
        id="search"
        placeholder="Search in..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        required
      />
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <span>Price</span>
        </h3>
        <div className="widget-body">
          <ul className="filter-items search-ul">
            <li>
              <a href="#">$0.00 - $100.00 </a>
            </li>
            <li>
              <a href="#">$100.00 - $200.00</a>
            </li>
            <li>
              <a href="#">$200.00 - $300.00</a>
            </li>
            <li>
              <a href="#">$300.00 - $500.00</a>
            </li>
            <li>
              <a href="#">$500.00+</a>
            </li>
          </ul>
          <form className="price-range">
            <input type="number" name="min_price" className="min_price text-center" placeholder="$min" />
            <span className="delimiter">-</span>
            <input type="number" name="max_price" className="max_price text-center" placeholder="$max" />
            <a href="#" className="btn btn-primary btn-rounded">
              Go
            </a>
          </form>
        </div>
      </div>
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <span>Size</span>
        </h3>
        <ul className="widget-body filter-items item-check mt-1">
          <li>
            <a href="#">Extra Large</a>
          </li>
          <li>
            <a href="#">Large</a>
          </li>
          <li>
            <a href="#">Medium</a>
          </li>
          <li>
            <a href="#">Small</a>
          </li>
        </ul>
      </div>

      {/* <input type="range" onChange={handleInput} min="0" max="20000" />
      <h1>Price: {price}</h1> */}
      {/* <div>
        {products
          .filter((hotel) => {
            return hotel.realPrice > parseInt(price, 10);
          })
          .map((hotel) => {
            return (
              <div>
                {" "}
                <p key={hotel.name}>
                  {hotel.name} | {hotel.realPrice} &euro;{" "}
                </p>
                <figure className="product-media">
                  <Link href={"/product-details/[productId]"} as={`/product-details/${hotel.id}`}>
                    <a>
                      {" "}
                      <img src={"https://baybridgebd.com/upload/" + JSON.parse(hotel.img)} alt="Product" width={300} height={338} />
                    </a>
                  </Link>
                  <div className="product-label-group">
                    <label className="product-label label-discount">-25%</label>
                  </div>
                  <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View" />
                  </div>
                </figure>
              </div>
            );
          })}
      </div> */}

      <div className="columns is-multiline">
        <div className="column is-12">
          {/* <h2 className="subtitle"> products</h2>
        <div className="field has-addons">
          <div className="control">
            <button className={`button ${view == "column" ? `is-dark` : null}`} onClick={() => setView("column")}>
              <i class="fas fa-th-large"></i>
            </button>
          </div>
          <div className="control">
            <button className={`button ${view == "row" ? `is-dark` : null}`} onClick={() => setView("row")}>
              <i class="fas fa-grip-horizontal"></i>
            </button>
          </div>
        </div>
        <h3 className="subtitle is-6 mb-2">Search Products</h3>
        <input class="input" type="text" placeholder="Search your product..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </div>
      <div className="column is-12">
        <h3 className="subtitle is-6 mb-2">Filter</h3>
        {/* <Checkbox checked={filter} onChange={setFilter} /> */}
          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <span>Brand</span>
            </h3>
            <ul className="">
              <li>
                <a onClick={() => setFilter("")}>All </a>
              </li>
              {obj.map((item) => (
                <li key={item.id}>
                  <a onClick={() => setFilter(`${item.name}`)}>{item.name} </a>
                </li>
              ))}
              {/* {products.map((item) => {
                return (
                  <div>
                    <FormControlLabel
                      label={item.name}
                      control={
                        <Checkbox
                          checked={checked[0] && checked[1]}
                          indeterminate={checked[0] !== checked[1]}
                          value="checked"
                          onChange={() => setFilter(`${item.name}`)}
                        />
                      }
                    />
                  </div>
                  // <div class="controls">
                  //   <div class="form-group form-check mb-0 py-2">
                  //     <input type="checkbox" class="form-check-input" value="checked" id="addBehaviorOnToastClick" readOnly={setFilter} />
                  //     <label class="form-check-label" for="addBehaviorOnToastClick">
                  //       {item.name}
                  //     </label>
                  //     <a onClick={() => setFilter(`${item.name}`)}>{item.name} </a>
                  //   </div>
                  // </div>
                  // <div>
                  //   <li>
                  //     <a onClick={() => setFilter(`${item.name}`)}>{item.name} </a>
                  //   </li>
                  // </div>
                );
              })} */}
            </ul>
            {/* <ul className="widget-body filter-items item-check mt-1">
              <li>
                <a href="#" onClick={() => setFilter("")}>
                  All{" "}
                </a>
              </li>

              <li>
                <a href="#" onClick={() => setFilter("Xiomi")}>
                  Xiomi
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setFilter("sssss")}>
                  sssss
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setFilter("Men Power")}>
                  Men Power
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setFilter("lksjjs")}>
                  lksjjs
                </a>
              </li>
            </ul> */}
          </div>
        </div>

        {/* {products.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
        </div>
      ))} */}

        <div className="">
          <div className="">
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="" style={{ width: "100%", backgroundColor: "none" }}>
              <option value="" className="">
                show all
              </option>
              {obj.map((product) => (
                <option value={product.name}>{product.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
