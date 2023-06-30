const ZProductList = ({buyProduct, viewProduct}) => {
  
  const products = [
    {pno: 1, pname: 'Ice Americano', price: 4500},
    {pno: 2, pname: 'Ice Dolce Latte', price: 5900},
    {pno: 3, pname: 'Ice White Chocolate Mocha', price: 5900},
    {pno: 4, pname: 'Java Chip Frappuccino', price: 6300}
  ]
  
  
  return ( 
    <div className="w-full bg-green-700 text-3xl m-12 p-10">
      <ul>
        {products.map( (p) => 
          <li key={p.pno}>
            {p.pname}
              <button 
              className="bg-yellow-200"
              onClick={() => buyProduct({...p})}
              >BUY
              </button>
          </li>)}
      </ul>
    </div>
   );
}
 
export default ZProductList;