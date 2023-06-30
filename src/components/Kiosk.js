import { useState } from "react"

const products = [
  {pno: 1, pname: 'Ice Americano', price: 4500},
  {pno: 2, pname: 'Ice Dolce Latte', price: 5900},
  {pno: 3, pname: 'Ice White Chocolate Mocha', price: 5900},
  {pno: 4, pname: 'Java Chip Frappuccino', price: 6300}
]

// 총액
const getTotal = (arr) => {
  if(!arr || arr.length === 0) {
    return 0
  }

  let sum = 0

  //reduce
  for(const ele of arr) {
    sum += (ele.price * ele.qty)
  }

  return sum
}

const Kiosk = () => {
  
    // useState: 배열을 반환
    // 첫 번째 요소는 현재 상태, 두 번째 요소는 Setter 함수(상태 업데이트)
    const [items, setItems] = useState([])

    // 함수 클릭 시 호출되는 함수
    // 클릭된 제품 정보를 인자로 전달받음
    const handleClickBuy = (product) => {
      console.log({...product, qty:1})

    // 필터의 결과는 배열
    // 처음 버튼을 누르면 빈 배열(pno가 없기 때문), 다음 클릭부터 누적
    const result = items.filter( ele => ele.pno === product.pno)

    console.log("result", result)

    if(result.length === 0) { // 빈 배열이면
      setItems([...items, {...product, qty:1}]) // 기존 배열에 새로운 상품
      return
    }

    const cartItem = result[0]
    cartItem.qty += 1
    setItems([...items])
  }

  const handleClickQty = (pno, amount) => {
    console.log("pno", pno, "amount", amount)

    const target = items.filter(item => item.pno === pno)[0]

    console.log(target)

    //수량 증가식
    if(amount === 1) {
      target.qty += 1
      setItems([...items])
    } else {
        
        if(target.qty === 1) {
          setItems( items.filter(ele => ele.pno != pno))
        } else {
          target.qty -= 1
          setItems([...items])
        }

    }

  }




  
  return ( 
    <div className="w-full h-[100vh] bg-[#1e3932] flex">
      <div className="w-2/3 bg-[#00704a] p-8">
        <h1 className="mb-5"><img src="/image/starbucks_logo.png"/></h1>
        <div className="text-4xl font-extrabold m-2 text-white">Products</div>

        {/* map 함수를 사용하여 products 배열을 순회하면서 각 제품들을 표시
            p는 현재 순회 중인 제품의 객체 */}
        <ul>
          {products.map( p => 
          <li
          className="text-xl m-2 p-1 bg-[#00704a] border-white text-white border-b-2" 
          key = {p.pno}
          onClick={() => {handleClickBuy(p)}}>
           <img src={require(`../../public/image/c0${p.pno}.jpg`)} width={100}/> {p.pname} {p.price}
            <button className="border-2 m-2 p-2 rounded-lg bg-[#2C2A29] text-white">BUY</button>
          </li>)}
        </ul>
      </div>
      {/* 위에서 BUY 버튼을 클릭한 객체가 담기는 Cart */}
      <div className="w-1/3">
        <div className="text-4xl font-extrabold text-white m-2">Cart</div>

        <ul>
          {items.map( (item, idx) => 
          <li key={idx} className="m-2 pb-2 border-b-2 border-white">
            <div className="lex text-3xl text-white m-4 p-4 justify-between">
              <div>{item.pname}</div>
              <div>{item.price}</div>
            </div>
            <div className="flex justify-center text-2xl">
              <button className="m-1 rounded-lg bg-yellow-50 p-4"
              onClick={() => handleClickQty(item.pno, 1)}>
                +
              </button>

              <p className="m-2 text-[#f6f5ef] p-2">{item.qty}</p>
              
              <button className="m-1 rounded-lg bg-yellow-50 p-4"
              onClick={() => handleClickQty(item.pno, -1)}>
                -
              </button>
            </div>
          </li>)}
        </ul>
        <div className="bg-white text-5xl text-[#2C2A29] mt-10 p-5">
          TOTAL {getTotal(items)}
        </div>
      </div>
    </div>

   );
}
 
export default Kiosk;