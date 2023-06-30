import { useState } from "react"

const Counter = () => {

    // useState() 안에 값은 객체
    const[num, setNum] = useState(1)


    const handleClick = (amount) => {

        // React에게 상태가 변한 것을 dispatch
        setNum(num + amount)
        
        console.log("click", num)
    }
    
    return ( 
        <div className =" w-full h-1/2 bg-amber-100">
            <div className = "text-5xl text-black">
                {num}
            </div>

            <button className=" bg-green-500 text-white font-bold"
            onClick={() => {handleClick(1)}}>
                INC
            </button>

            <button className=" ml-7 bg-green-500 text-white font-bold"
            onClick={() => {handleClick(-1)}}>
                DEC
            </button>

        </div>
     );
}
 
export default Counter;