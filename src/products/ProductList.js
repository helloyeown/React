import ProductDetail from "./ProductDetail";

const ProductList = () => {

    const products = [
        {pno:1, pname:'상품1', price: 3000, image:'c01.jpg'},
		{pno:2, pname:'상품2', price: 5000, image:'c02.jpg'},
		{pno:3, pname:'상품3', price: 7000, image:'c03.jpg'},
		{pno:4, pname:'상품4', price: 9000, image:'c04.jpg'},
		{pno:5, pname:'상품5', price: 10000, image:'c05.jpg'}
    ]

    return ( 
        <ul className="productList">{
            products.map(p =>
                <ProductDetail key={p.pno} product={p}/>)
        }</ul>
     );
}
 
export default ProductList;