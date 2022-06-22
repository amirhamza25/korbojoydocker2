import Link from "next/link";
import { useRecoilState } from "recoil";
import { addToCartProductInfo, cartState } from "../../atom/addTocartAtom";

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
    <div className="swiper-wrapper ">
      <div className="swiper-slide product-col">
        <div className="product-wrap product text-center">
          <div className="product product-slideup-content">
            <figure className="product-media">
              <Link href={"/product-details/[productId]"} as={`/product-details/${product.id}`}>
                <a>
                  <img
                    src={"https://baybridgebd.com/upload/" + JSON.parse(product.img)}
                    alt="Product"
                    width={300}
                    height={240}
                    style={{ height: "320px", objectFit: "fill" }}
                  />
                </a>
              </Link>
              <div className="product-label-group">
                <label className="product-label label-discount">-25%</label>
              </div>
              <div className="product-action-vertical">
                <a href="#" className="btn-product-icon btn-quickview w-icon-search" title="Quick View" />
              </div>
            </figure>
            <div className="product-details">
              {/* <div className="product-cat">
              <a href="shop-banner-sidebar.html">Electronics</a>
            </div> */}
              <h3 className="product-name">
                <Link href={"/product-details/[productId]"} as={`/product-details/${product.id}`}>
                  {product.name}
                </Link>
              </h3>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "100%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
              </div>
              <div className="product-price">
                <ins className="new-price">{product.realPrice}</ins>
                <del className="old-price">{product.buyPrice}</del>
              </div>
            </div>
            <div className="product-hidden-details">
              <div className="product-action">
                <a href="#" className="btn-product btn-cart" title="Add to Cart" onClick={() => cartUpdate(product)}>
                  <i className="w-icon-cart" />
                  <span>Add To Cart</span>
                </a>
                {cart[product.id] && (
                  <button
                    className="btn-product btn-cart"
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
  );
};

export default ProductItem;
