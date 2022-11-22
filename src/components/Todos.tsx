import React from 'react';
import ToDoItem from "./ToDoItem";
import {Todo} from "../types/Todo";

interface ITodosProps{
    setTodos:(todos:Todo[])=>void,
    todos:Todo[],
    tags:string[],
    setTags:(tags:string[])=>void,
    curTag:string,

}
const Todos:React.FC<ITodosProps> = ({todos,tags,setTags,curTag,setTodos}) => {
    return (
        <div>
            {todos.map((todo)=>{
                return <ToDoItem curTag={curTag} todo={todo} tags={tags} setTags={setTags} setTodos={setTodos} todos={todos}/>
            })}
        </div>
    );
};

export default Todos;
