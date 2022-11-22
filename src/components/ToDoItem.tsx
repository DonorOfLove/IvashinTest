import React, {useState} from 'react';
import {Todo} from "../types/Todo";

interface ITodoProps {
    setTodos:(todos:Todo[])=>void,
    todos:Todo[],
    todo: Todo,
    curTag: string,
    tags:string[],
    setTags:(tags:string[])=>void
}

const ToDoItem: React.FC<ITodoProps> = ({todo, curTag,tags,setTags,setTodos,todos}) => {
    const [val, setVal] = useState<string>(todo.title)

    const [isChangeMod, setIsChangeMod] = useState<boolean>(false)


    const changeToDo = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setIsChangeMod(!isChangeMod)
    }

    const saveChanges = (e: React.ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault()
        let arr = val.split(' ')
        let newVal=[]
        for (let word of arr) {
            if (word[0]==='#'){
                setTags(tags.concat(word))
                newVal.push(word.substring(1))
            }else{
                newVal.push(word)
            }
        }
        todo.title = newVal.join(' ')
        setIsChangeMod(!isChangeMod)
    }

    return (
        <div className={todo.title.includes(curTag) ? ('taged') : ('')}>
            {!isChangeMod ? (<div>
                <input type='checkbox'></input>
                {todo.title}
                <button onClick={changeToDo}> edit</button>
            </div>) : (
                <div>
                    <form onSubmit={saveChanges}>
                        <input type="text" value={val} onChange={e => setVal(e.target.value)}/>
                    </form>
                </div>)}

        </div>
    );
};

export default React.memo(ToDoItem);
