const TodoList = ({arr, removeFn}) => {
  return ( 
    <div>
    TodoList
    <ul>
      {arr.map(todo => 
      <li className="m-3 text-xl p-3" 
        key={todo.tno}>
        {todo.tno}. {todo.title} 
        <button 
          onClick={() => removeFn(todo.tno)}
          className="bg-yellow-200">
            DEL
        </button>
      </li>)}
    </ul>
    </div>
   );
}
 
export default TodoList;