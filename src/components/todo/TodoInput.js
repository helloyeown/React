import { useState } from "react";

// 랜더링 안해주기 위해 바깥 영역에 선언
const initState = {title :'', content:''}

// 증가시키면서 
let tno = 1

const TodoInput = ({addTodo}) => {

    // 한 글자가 남음(initState)로 하면
    const [obj, setObj] = useState({...initState})

    const handleChange = (e) => {

        // const prop = e.target.name
        // const str = e.tartget.value

        // 이벤트 target에 name이 title 이면 useState obj의 title을 변경 content면 content변경
        obj[e.target.name] = e.target.value

        // obj[prop] = str

        setObj({ ...obj })
    }

    const handleAdd = () => {
        console.log(obj)

        addTodo({...obj, tno:tno++})
        setObj({...initState})
    }

    const handleClear = () => {

        setObj({...initState})

    }


    return (

        <>
            <div>
                <label>제목</label>
                <input
                    className="border-8"
                    type='text'
                    name='title'
                    value={obj.title}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>내용</label>
                <input
                    className="border-8"
                    type='text'
                    name='content'
                    value={obj.content}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={handleAdd}>ADD</button>
                <button onClick={handleClear}>CLEAR</button>
            </div>
        </>

    );
}

export default TodoInput;