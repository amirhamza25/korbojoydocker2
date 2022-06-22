import React from "react";
import { useRecoilState } from "recoil";
import { addToCartProductInfo, cartState } from "../atom/addTocartAtom";
// import { addToCartProductInfo, cartState } from "../../atom/addTocartAtom";

const ProductItem = (props) => {
  const { product } = props;
  const [cart, setCart] = useRecoilState(cartState);
  const [productCartInfo, updateProductCartInfo] = useRecoilState(addToCartProductInfo);

  const cartUpdate = async (item) => {
    setCart({ ...cart, [item.id]: (cart[item.id] || 0) + 1 });
    const dsfsd = JSON.parse(item.img);
    const img = dsfsd[0];
    updateProductCartInfo({ ...productCartInfo, [item.id]: [item.id, item.name, item.buyPrice, img] });
  };

  const cartRemove = async (item) => {
    const copy = { ...cart };
    if (copy[item.id] === 1) {
      delete copy[item.id];
      setCart(copy);
    } else {
      setCart({ ...copy, [item.id]: copy[item.id] - 1 });
    }
  };

  return (
    <>
      <div class="col-md-4">
        <div class="card-deck m-b-30">
          <div class="card">
            <figure className="brand">
              <img
                src={process.env.API_URL + "/upload/" + JSON.parse(product.img)}
                alt="Product"
                style={{ height: "200px", width: "100%", objectFit: "contain" }}
              />
            </figure>
            <div class="card-body">
              <h4 class="card-title">
                {" "}
                <a>{product.name}</a>{" "}
              </h4>
              <p class="card-text">
                One of the main areas that I work on with my clients is shedding these non-supportive beliefs and replacing them with beliefs that will help
                them to accomplish their desires.
              </p>
            </div>
            <div class="card-footer">
              <div className="product-hidden-details">
                <div className="product-action" style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <a href="#" className="btn btn-round btn-inverse-success" title="Add to Cart" onClick={() => cartUpdate(product)}>
                      <i className="w-icon-cart" />
                      <span>Add To Cart</span>
                    </a>
                  </div>
                  <div>
                    {cart[product.id] && (
                      <button
                        className="btn btn-round btn-inverse-danger"
                        onClick={() => {
                          cartRemove(product);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
