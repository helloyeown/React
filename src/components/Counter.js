import { useState } from "react"

const Counter = () => {

  console.log("render.....................")
  
  // 파라미터에 전달하기
  // let num = 1
   
  //hooks
  // user라는 단어가 나오면 hook이라고 생각해야 함
  // 첫 번째 배열 => read용 / 두 번째 배열 => write(함수)
  const [num, setNum] = useState(1)


  // 데이터 핸들링 하기 위한 함수
  
  const handleClick = (amount) => {
    // 파라미터가 필요 없는 경우 -> onClick={handleClick}
    // 파라미터에 전달하기(amount)
    
    // num += amount

    // 연산자는 항상 새로운 값을 만들어 냄 
    // -> 새로운 객체를 만들어 냄
    setNum(num + amount)

    // console.log("click", num)
  }
  
  // 이벤트 명시 함수
  
  // 독립적으로 사용할 수 있는 이유는 closure

  return ( 
    <div className="w-full bg-lime-500 h-1/2">
      <div className="text-5xl">
        {num}
      </div>
      <button 
        className="w-10 bg-orange-400 text-white font-bold"
        onClick={() => { handleClick(1) }}
      >
        INC
      </button>
      <button 
        className="w-10 bg-orange-400 text-white font-bold ml-10"
        onClick={() => { handleClick(-1) }}
      >
        DEC
      </button>
    </div>
   );
}
 
export default Counter;