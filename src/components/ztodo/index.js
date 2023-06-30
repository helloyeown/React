import { useState } from "react";
import ZTodoInput from "./ZTodoInput";
import ZTodoList from "./ZTodoList";


const ZTodo = () => {

  const [todoArr, setTodoArr] = useState([])

  const addTodo = (newTodo) => {
    
    console.log("add Todo", newTodo)
    setTodoArr([...todoArr, newTodo])
  }



  return ( 
    <>
    <ZTodoInput addTodo={addTodo}></ZTodoInput>
    <ZTodoList></ZTodoList>
    </>
   );
}
 
export default ZTodo;