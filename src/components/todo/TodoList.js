const TodoList = ({arr, removeFn}) => {
    return ( 
        <div>
            <ul>
                {arr.map(todo => 
                <li key={todo.tno} className="m-3 text-3xl p-3">
                    {todo.tno} - {todo.title}
                    <button 
                    className="bg-red-400"
                    onClick={() => removeFn(todo.tno)}
                    >DEL</button>
                </li>)}
            </ul>
        </div>
     );
}
 
export default TodoList;