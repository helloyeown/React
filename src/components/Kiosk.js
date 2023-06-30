import { useState } from "react"

// rerendering 할 필요가 없어서 외부에 선언
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

const getTotal = (arr) => {

    if (!arr || arr.length === 0) {
        return 0
    }
    let sum = 0
    //reduce
    for (const ele of arr) {
        sum += (ele.price * ele.qty)
    }
    return sum

}


const Kiosk = () => {

    //Hooks 제약조건 반드시 Component 내에서 선언되어야한다.
    // items => Cart영역
    const [items, setItems] = useState([])


    const handleClickBuy = (product) => {

        console.log({ ...product, qty: 1 })

        const result = items.filter((ele) => ele.pno === product.pno)

        console.log("result", result)

        // 기존의 담은 상품이 없으면
        if (result.length === 0) {
            setItems([...items, { ...product, qty: 1 }])
            return
        }

        // const cartItem = result[0]
        // cartItem.qty += 1
        // setItems([...items])

    }

    const handleClickQty = (pno, amount) => {

        console.log("pno", pno, "amount", amount)

        const target = items.filter(item => item.pno === pno)[0]

        console.log(target)

        //increse
        if (amount === 1) {
            target.qty += 1
            setItems([...items])
        } else {

            if (target.qty === 1) {
                setItems(items.filter(ele => ele.pno !== pno))
            } else {
                target.qty -= 1
                setItems([...items])
            }

        }
    }

    return (

        <div>
            <div className="flex">
                <div className="w-2/3 bg-teal-900" ><img className=" ml-10" src={require(`../img/Startbucks.png`)} width={200} /></div>
                <div className="w-1/3 bg-teal-900"></div>
            </div>

            <div className=" w-full h-[100vh] bg-yellow-900 flex">

                <div className="w-3/4 bg-amber-50">

                    <div className="text-4xl font-extrabold m-5 p-2"></div>

                    <ul className=" flex justify-center">
                        {/* Map으로 상품데이터를 뿌려줌 */}
                        {products.map(p =>
                            <li
                                key={p.pno}
                                className="text-2xl m-3 p-3 bg-stone-200"
                                onClick={() => { handleClickBuy(p) }}>
                                <div className=" shadow-2xl">
                                    <img src={require(`../img/${p.img}`)} />
                                </div>
                                <div className=" text-center">
                                    {p.pname} - {p.price}원
                                </div>

                            </li>
                        )}
                    </ul>

                </div>
                <div className="w-1/4">
                    <div className="text-4xl font-extrabold m-5 p-2 text-white">Cart</div>

                    <ul>
                        {items.map((item, idx) =>
                            <li key={idx} className="border-2">
                                <div className="flex text-3xl text-white m-4 p-4">
                                    {/* <div>{item.pno}</div> */}
                                    {item.pname} - {item.price}원
                                </div>
                                <div className="flex justify-center text-2xl">
                                    <button
                                        className="rounded-lg bg-orange-200 p-4 m-3"
                                        onClick={() => handleClickQty(item.pno, 1)}
                                    >
                                        +
                                    </button>

                                    <p className="m-2 text-white p-2">{item.qty}</p>

                                    <button className="rounded-lg bg-orange-200 p-4 m-3"
                                        onClick={() => handleClickQty(item.pno, -1)}
                                    >
                                        -
                                    </button>
                                </div>
                            </li>
                        )}
                    </ul>

                    <div className="bg-yellow-900 text-5xl text-white ">
                        TOTAL {getTotal(items)}원
                    </div>

                </div>

            </div>
        </div>


    );
}

export default Kiosk;