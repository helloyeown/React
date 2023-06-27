import styled from "styled-components";

const BlueDiv = styled.div`
    background-color: pink
`

const Image = styled.img`
    width: 100px;
    height: 100px;
`

const ProductDetail = ({product}) => {

    const {pno, pname, price, image} = product

    return ( 
        <li>
            <BlueDiv>PNO {pno}</BlueDiv>
            <div>NAME {pname}</div>
            <div>PRICE {price}</div>
            <div><Image src={require(`../image/${image}`)}></Image></div>
            <button>BUY</button>
        </li>
     );
}
 
export default ProductDetail;