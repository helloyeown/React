import ZcartItem from "./ZCartItem";

const ZCart = ({ arr, changeQty }) => {

    return (

        <div>
            <ul>
                {arr.map((cartItem, idx) => 
                <li key={idx}>
                    <ZcartItem {...cartItem} changeQty={changeQty}></ZcartItem>
                    {/* {cartItem.pname} - {cartItem.qty}  */}
                </li>
                )}
            </ul>
        </div>

    );
}


export default ZCart;