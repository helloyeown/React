import { useState } from "react";

//객체 스타일
//
const Counter2 = () => {
  
  const [obj, setObj] = useState({num:10})
  
  return ( 
    <div>
      {obj.num}
      <button onClick={ () => {
        obj.num += 1
        console.log(obj.num)

        // {}: 새 객체, 메모리 구조를 새로 만든다는 의미
        setObj({...obj})
      }}>
        INC
      </button>
    </div>
   );
}
 
export default Counter2;