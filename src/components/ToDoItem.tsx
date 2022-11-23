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

const ToDoItem: React.FC<ITodoProps> = ({todo, curTag, tags, setTags, setTodos, todos}) => {
    const [val, setVal] = useState<string>(todo.title)

    const [isChangeMod, setIsChangeMod] = useState<boolean>(false)

    const changeToDo = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setIsChangeMod(!isChangeMod)
    }

    const saveChanges = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault()
        let arr = val.split(' ')
        let newVal = []
        for (let word of arr) {
            if (word[0] === '#') {
                setTags(tags.concat(word))
                newVal.push(word.substring(1))
            } else {
                newVal.push(word)
            }
        }
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
                <span className={todo.done ? ('done') : ('')} contentEditable={true}>
                    {todo.title}
               </span>
                <div className='tag'>
                    <button onClick={changeToDo}> edit</button>
                    <button onClick={()=>removeTodo(todo)}>x</button>
                </div>
            </>) : (
                <>
                    <form onSubmit={saveChanges}>

                        <div contentEditable={true}></div>
                        {/*<input type="text" value={val} onChange={e => setVal(e.target.value)}/>*/}
                    </form>
                </>)}
        </div>
    );
};

export default React.memo(ToDoItem);
