import React, {useState} from 'react';

const DEFAULT_TODO={
    name:'',
    id:''
}
const Header:React.FC = () => {
    const onChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value } = event.target
        setTodo({...todo,[name]:value})
    }
    const [todo,setTodo]=useState(DEFAULT_TODO)
    console.log(todo)
    return (
        <div>
            <input type="text" id='name' name='name' onChange={onChange}/><button>+</button>
            </div>
    );
};

export default Header;
