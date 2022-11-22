import React, {useState} from 'react';
import './styles.sass'
import Header from "./components/Header";
import Tags from "./components/Tags";
import Todos from "./components/Todos";
import {Todo} from "./types/Todo";

const DEF_TODOS = [{id: 1, title: '1', done: false}, {id: 2, title: '2', done: false}]
const DEF_TAGS = ['#shop', '#sport', '#food', '#cars']

const App: React.FC = () => {
    const [tags, setTags] = useState<string[]>(DEF_TAGS)
    const [curTag, setCurTag] = useState<string>('#test')
    const [todos, setTodos] = useState<Todo[]>(DEF_TODOS)

    return (
        <div className="App">
            <Tags curTag={curTag} setCurTag={setCurTag} tags={tags} setTags={setTags}/>
            <Header todos={todos} setTodos={setTodos}/>
            <Todos todos={todos} tags={tags} setTags={setTags} curTag={curTag} setTodos={setTodos}/>
        </div>
    );
}

export default App;
