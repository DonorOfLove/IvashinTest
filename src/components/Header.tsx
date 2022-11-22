import React, {useState} from 'react';
import {Todo} from "../types/Todo";

interface IProps{
    todos:Todo[],
    setTodos:(todos:Todo[])=>void,

}

const Header:React.FC<IProps> = ({todos, setTodos}) => {
    const [val, setVal] = useState<string>('')

    const submitHandler = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (val.trim()) {
            setTodos(todos.concat([{id:Date.now(),title:val,done:false}]))
            setVal('')
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={val} onChange={e => setVal(e.target.value)}/>
                <button type='submit'>+</button>
            </form>
        </div>
    );
};

export default Header;
