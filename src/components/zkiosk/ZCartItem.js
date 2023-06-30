const ZcartItem = ({pno, pname, price, qty, changeQty}) => {
    return ( 

        <div>
            <div>{pno}</div>
            <div>{pname} - {price}</div>
            <div className="flex">

                <button onClick={ () => changeQty(pno,1)}>+</button>
                <div>{qty}</div>
                <button onClick={ () => changeQty(pno,-1)}>-</button>

            </div>
        </div>

     );
}
 
export default ZcartItem;