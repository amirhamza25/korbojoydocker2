import { selector } from "recoil";
import { addToCartProductInfo, cartState } from "../atom/addTocartAtom";
export const totalsState = selector({
    key: "totalsState",
    get: ({ get }) => {
        const cart = get(cartState);
        const productInfo = get(addToCartProductInfo);
        const subtotal = Object.entries(cart).reduce((acc, [id, quantity]) =>
            acc + productInfo[id][2] * quantity, 0
        );
        return {
            subtotal,
            total: subtotal
        };
    },
});

// export const Totals = () => {
//     const totals = useRecoilValue(totalsState);

//     return (
//         <div>
//             <h2>Totals</h2>
//             <p>Subtotal: ${totals.subtotal.toFixed(2)}</p>
//             <p>
//                 <strong>Total: ${totals.total.toFixed(2)}</strong>
//             </p>
//         </div>
//     );
// }