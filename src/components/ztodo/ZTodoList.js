const ZtodoList = ({ todos, removeTodo }) => {
    return (
        <div>
            <ul>
                {todos.map( todo => 
                    <li key={todo.tno}>
                        {todo.title} - {todo.content}
                        <button onClick={() => removeTodo(todo.tno)}>delBtn</button>
                    </li>
                    
                )}
            </ul>

        </div>
    );
}

export default ZtodoList;