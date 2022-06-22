import { useRecoilValue } from "recoil";
import { addToCartProductInfo, cartState } from "../atom/addTocartAtom";
export function CartItems() {
    const cart = useRecoilValue(cartState);
    const product = useRecoilValue(addToCartProductInfo)
    if (Object.keys(cart).length === 0) return <p>No items.</p>;

    return (
        <>
            {Object.entries(cart).map(([key, value]) => (
                <div key={key} className="product product-cart">
                    <div className="product-detail">
                        <a href="product-default.html" className="product-name">
                            {product[key][1]}
                        </a>
                        <div className="price-box">
                            <span className="product-quantity">{value}</span>
                            <span className="product-price">{product[key][2] * value}</span>
                        </div>
                    </div>
                    <figure className="product-media">
                        <a href="product-default.html">
                            <img
                                src={`https://baybridgebd.com/upload/${product[key][3]}`}
                                alt="product"
                                height={84}
                                width={94}
                            />
                        </a>
                    </figure>
                </div>
            ))}
        </>
    );
}