import { useState } from "react";

const Counter2 = () => {
    
    const [obj, setObj] = useState({num:10})
    
    return ( 

        <div>
            {obj.num}
            <button onClick = {() => {
                obj.num += 1
                console.log(obj.num)

                // rerendering 조건 => 새로운 객체여야만 한다.
                // setObj({num : obj.num})
                setObj({...obj})

            }} >INC</button>
        </div>

     );
}
 
export default Counter2;