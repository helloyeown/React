
const products = [
    {
        pno: 1,
        pname: 'Americano',
        price: 7000,
        img: 'Americano.jpg'
    },

    {
        pno: 2,
        pname: 'Latte',
        price: 8500,
        img: 'Latte.jpg'
    },

    {
        pno: 3,
        pname: 'Milk Tea',
        price: 6000,
        img: 'MilkTea.jpg'
    },

    {
        pno: 4,
        pname: 'Green Tea',
        price: 9000,
        img: 'GreenTea.jpg'
    },
    {
        pno: 5,
        pname: 'Dolce Latte',
        price: 10000,
        img: 'DolceLatte.jpg'
    }

]

const ZProductList = ({buyProduct, viewProduct}) => {
    return ( 

        <div className ="w-full bg-indigo-500 text-3xl m-12 p-10">
            
            <ul>
                {products.map(p => 
                <li key={p.pno}>
                    {p.pname}
                    <button className=" bg-red-400"
                    onClick={() => buyProduct({...p})} // 파라미터가 있으면 람다식을 이용한다. / 안전하게 하려면 복사본 Spread로 전달
                    >BUY</button>
                </li>)}
            </ul>
        
        </div>

     );
}
 
export default ZProductList;