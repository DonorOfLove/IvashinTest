import React from 'react';
import {Todo} from "../types/Todo";

interface ITodoProps {
    todo:Todo
}
const ToDoItem:React.FC<ITodoProps> = ({todo}) => {
    return (
        <div>
            {todo.title}
        </div>
    );
};

export default ToDoItem;
