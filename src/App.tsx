import React, {useState} from 'react';
import './styles.sass'
import Header from "./components/Header";
import Tags from "./components/Tags";
import Todos from "./components/Todos";



const App:React.FC = ()=> {
    // const [tags,setTags]=useState<string[]>([])
    const [todos,setTodos]=useState<object[]>([])
  // @ts-ignore
    console.log(todos)
    return (
    <div className="App">
        <Tags/>
     <Header/>
      <Todos/>
    </div>
  );
}

export default App;
