import { useState } from "react";
import ZtodoInput from "./ZTodoInput";
import ZtodoList from "./ZTodoList";

let tno = 1

const Ztodo = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {

        newTodo = {...newTodo, tno: tno++}
        setTodos([...todos, newTodo])

        console.log(todos)
    }

    const removeTodo = (tno) => {

        setTodos(todos.filter((todo) => todo.tno !== tno))

    }


    return (

        <div>
            <ZtodoInput addTodo={addTodo}></ZtodoInput>
            <ZtodoList todos={todos} removeTodo={removeTodo}></ZtodoList>
        </div>

    );
}

export default Ztodo;

