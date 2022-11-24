import React, {useEffect, useState} from 'react';
import {Todo} from "../types/Todo";
import {log} from "util";

interface ITodoProps {
    setTodos: (todos: Todo[]) => void,
    todos: Todo[],
    todo: Todo,
    curTag: string,
    tags: string[],
    setTags: (tags: string[]) => void
}

const ToDoItem: React.FC<ITodoProps> = ({todo, tags, setTags, setTodos, todos}) => {

    const [val, setVal] = useState<string>(todo.title)

    const [isChangeMod, setIsChangeMod] = useState<boolean>(false)

    const changeToDo = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setIsChangeMod(!isChangeMod)
    }

    const saveChanges = (e: React.ChangeEvent<HTMLDivElement>): void => {
        e.preventDefault()
        let arr = e.target.innerText.split(' ')
        let newVal = []
        console.log(arr)
        for (let word of arr) {
            if (word.trim()[0] === '#') {
                setTags(tags.concat(word))
                newVal.push(word.trim().substring(1))
            } else {
                newVal.push(word.trim())
            }
        }
        console.log(todos)
        todo.title = newVal.join(' ')
        setIsChangeMod(!isChangeMod)
    }

    const toggle = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newTodos = [...todos];
        newTodos[todos.indexOf(todo)] = {
            ...newTodos[todos.indexOf(todo)],
            done: !todo.done
        }
        setTodos(newTodos)
    }

    const removeTodo = (todo:Todo):void => {
        setTodos(todos.filter((cTodo: Todo) => cTodo.id !== todo.id))

    }

    return (
        <div className='item'>
            {!isChangeMod ? (<>
                <input type='checkbox' checked={todo.done} onChange={toggle}/>
                <span className={todo.done ? ('done') : ('')}  onClick={changeToDo}>
                    {todo.title}
               </span>
                <div className='tag'>
                    <button onClick={()=>removeTodo(todo)}>x</button>
                </div>
            </>) : (
                <>
                        <div contentEditable={true} onBlur={saveChanges} className="edit_field">{todo.title.split(' ').map((word)=>{
                            return tags.includes('#'+word)?(<span className='taged_word' contentEditable={false}>{word} </span>):(<span>{word} </span>)
                        })}</div>
                </>)}
        </div>
    );
};

export default ToDoItem;
