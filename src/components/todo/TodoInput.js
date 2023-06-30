import { useState } from "react";

const initState = {title:'', content:''}

let tno = 1


const TodoInput = ({addTodo}) => {

const [obj, setObj] = useState({...initState})

  const handleChange = (e) => {
    obj[e.target.name] = e.target.value 
    setObj({...obj})
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
        onChange={ handleChange }/>
      </div>
      <div>
        <label>내용</label>
        <input 
        className="border-8" 
        type='text'
        name='content' 
        value={obj.content}
        onChange={ handleChange}/>
      </div>
      <div>
        <button onClick={handleAdd}>ADD</button>
        <button onClick={handleClear}>CLEAR</button>
      </div>
      
    </>
  );
}
 
export default TodoInput;