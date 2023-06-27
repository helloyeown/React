const HelloWorld = ({product}) => {

    const {pno, pname, price} = product || {pno:-1, pname:'', price:0};

    return ( 
        <div>
            <div>{pno}</div>
            <div>{pname}</div>
            <div>{price}</div>
            {price > 5000 ? <div>비쌈</div> : <div>쌈</div>}
        </div>
     );
}
 
export default HelloWorld;