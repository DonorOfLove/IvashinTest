import React, {useState, useEffect} from 'react';
import './styles.sass'
import Header from "./components/Header";
import Tags from "./components/Tags";
import Todos from "./components/Todos";
import {Todo} from "./types/Todo";

const DEF_TODOS = [{id: 1, title: 'go to shop', done: false}, {id: 2, title: 'wash de car', done: false}, {
    id: 2,
    title: 'make some noise',
    done: false
}]
const DEF_TAGS = ['#shop', '#sport', '#food', '#car']

const App: React.FC = () => {

    useEffect(() => {
        if (localStorage.getItem('todos') !== null) {
            setTodos(JSON.parse(localStorage.getItem('todos') as string))
        }

        if (localStorage.getItem('tags') !== null) {
            setTags(JSON.parse(localStorage.getItem('tags') as string))
        }
    }, [])

    useEffect(() => {
        window.addEventListener("unload", function () {
            localStorage.setItem('todos', JSON.stringify(todos))
            localStorage.setItem('tags', JSON.stringify(tags))
        });
    })

    const [tags, setTags] = useState<string[]>(DEF_TAGS)
    const [curTag, setCurTag] = useState<string>('')
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
