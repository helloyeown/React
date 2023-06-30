import { useState } from "react";
import ZCountDisplay from "./ZCountDisplay";
import ZCountPanel from "./ZCountPanel";

const ZCounter = () => {

  const target = {
    p1:'A',
    p2:'B',
    p3:'C',
    p4:'D'
  }
  
  // 상태 데이터
  const [obj, setObj] = useState({num:10})

  const changeObj = (amount) => {
    obj.num += amount
    setObj({...obj})
  }

  // // 상위 컴포넌트의 상태가 바뀌면 하위 컴포넌트의 상태가 바뀜
  // setInterval(() => {
  //   changeObj(1)
  // }, 3000)
  
  
  return ( 

    <div>
      <ZCountDisplay value={obj.num}/>
      <ZCountPanel fn={changeObj}/> 
      {/* ↑ 함수의 실행 결과이기 때문에 () <- X */}
    </div>
   );
}
 
export default ZCounter;