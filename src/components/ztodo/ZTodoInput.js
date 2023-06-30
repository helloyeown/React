import { useState } from "react";

const init = { title: '', content: '' }

const ZtodoInput = ({addTodo}) => {

    const [prop, setProp] = useState(init)

    const changeInput = (e) => {

        prop[e.target.name] = e.target.value

        setProp({ ...prop })
    }

    const add = () => {

        console.log(prop)
        addTodo({...prop})

    }

    return (

        <div>
            <input className="border-8" type='text' name='title' onChange={changeInput}></input>
            <input className="border-8" type='text' name='content' onChange={changeInput}></input>
            <button onClick={add}>ADD</button>
        </div>

    );
}

export default ZtodoInput;