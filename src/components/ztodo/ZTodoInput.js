import { useState } from "react";


// 초기화를 위한 변수
const initState = {title:'', content:''}

// 게시물 번호(tno)
let tno = 1


const ZTodoInput = ({addTodo}) => {

  const [obj, setObj] = useState({...initState})

  // input 값이 변경될 때마다 호출되는 이벤트 함수
  const handleChange = (e) => {
    obj[e.target.name] = e.target.value
    setObj({...obj})
  }

  const handleAdd = (e) => {
    
    addTodo({...obj, tno:tno++})

    setObj({...initState})
  }




  return ( 
    <>
    <div>
      <label>Title</label>
      <input
      className="border-4"
      type="text"
      name="title"
      value={obj.title}
      onChange={ handleChange }
      />
    </div>
    <div>
      <label>Content</label>
      <input
      className="border-4"
      type="text"
      name="content"
      value={obj.content}
      onChange={ handleChange }
      />
    </div>
    <div>
      <button onClick={ handleAdd }>ADD</button>
      <button>CLEAR</button>
    </div>
    </>
   );
}
 
export default ZTodoInput;