import React, {useState} from 'react';
import './styles.sass'
import Header from "./components/Header";
import Tags from "./components/Tags";
import Todos from "./components/Todos";
import {Todo} from "./types/Todo";

const DEF_TODOS=[{id:1,title:'1',done:false},{id:2,title:'2',done:false}]

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(DEF_TODOS)
    return (
        <div className="App">
            <Tags/>
            <Header/>
            <Todos todos={todos}/>
        </div>
    );
}

export default App;
