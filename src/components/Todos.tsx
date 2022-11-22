import React from 'react';
import ToDoItem from "./ToDoItem";
import {Todo} from "../types/Todo";

interface ITodosProps{
    todos:Todo[]
}

const Todos:React.FC<ITodosProps> = ({todos}) => {
    return (
        <div>
            {todos.map((todo)=>{
                return <ToDoItem todo={todo}/>
            })}
        </div>
    );
};

export default Todos;
