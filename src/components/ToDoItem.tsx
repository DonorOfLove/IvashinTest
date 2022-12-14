import React, {useState} from 'react';
import {Todo} from "../types/Todo";

interface ITodoProps {
    setTodos: (todos: Todo[]) => void,
    todos: Todo[],
    todo: Todo,
    curTag: string,
    tags: string[],
    setTags: (tags: string[]) => void
}

const ToDoItem: React.FC<ITodoProps> = ({todo, tags, setTags, setTodos, todos}) => {

    const [isChangeMod, setIsChangeMod] = useState<boolean>(false)

    const saveChanges = (e: React.ChangeEvent<HTMLDivElement>): void => {
        e.preventDefault()
        let arr = e.target.innerText.split(' ')
        let newVal = []
        for (let word of arr) {
            if (word.trim()[0] === '#') {
                setTags(tags.concat(word.trim()))
                newVal.push(word.trim().substring(1))
            } else {
                newVal.push(word.trim())
            }
        }
        console.log(todos)
        todo.title = newVal.join(' ')
        setIsChangeMod(!isChangeMod)
    }

    const toggle = (): void => {
        const newTodos = [...todos];
        newTodos[todos.indexOf(todo)] = {
            ...newTodos[todos.indexOf(todo)],
            done: !todo.done
        }
        setTodos(newTodos)
    }

    const removeTodo = (todo: Todo): void => {
        setTodos(todos.filter((cTodo: Todo) => cTodo.id !== todo.id))
    }

    return (
        <div className='item'>
            {!isChangeMod ? (<>
                <input type='checkbox' checked={todo.done} onChange={toggle}/>
                <span className={todo.done ? ('done') : ('')} onClick={() => setIsChangeMod(!isChangeMod)}>
                    {todo.title}
               </span>
                <div className='tag'>
                    <button onClick={() => removeTodo(todo)}>x</button>
                </div>
            </>) : (
                <>
                    <div contentEditable={true} onBlur={saveChanges}
                         className="edit_field">{todo.title.split(' ').map((word) => {
                        return tags.includes('#' + word) ? (
                            <span className='taged_word' contentEditable={false}>{word} </span>) : (
                            <span>{word} </span>)
                    })}</div>
                </>)}
        </div>
    );
};

export default ToDoItem;
