import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



const App=()=> {

  const [input, setInput]=useState('');
  const [todos, setTodos]=useState([]);
  
  const handleInput=(e)=>{
    setInput(e.target.value);
  }
  
  const handleFormSubmit=(e)=>{
    e.preventDefault();
  
    if (input.trim()!==''){
      setTodos([...todos,{text:input, completed:false}]);
      setInput('');
    }
  }

  const handleDelete=(index)=>{
    const updatedTodos=todos.filter((_,i)=>i!==index);
    setTodos(updatedTodos);
  }

  const [done, setDone]=useState(false);

  const handleDone=(index)=>{
    const updatedTodos=todos.map((todo, i)=>{
      if (i===index){
        return {...todo, completed: !todo.completed};
      }
      return todo;
  });
    setTodos(updatedTodos);
  }


  
  return (
    <div className="container mx-auto max-w-md mt-8">
    <h1 className="text-2xl mb-4">My Todo List</h1>
      <form onSubmit={handleFormSubmit} className="flex">
      <input
      type='text'
      onChange={handleInput}
      placeholder='Enter a todo'
      value={input}
      className="flex-grow p-2 border border-gray-300 rounded-l"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r">
        Add
      </button>
      </form>

      <ul className="mt-4">
        {todos.map((todo, index)=>(
          <li className="flex items-center justify-between py-2"
            key={index}
            >
              <div
               className="flex items-center">
              <input
              type="checkbox"
              checked={todo.completed}
              onChange={()=>handleDone(index)}
              className="mr-2 cursor-pointer"
              />
              <span className={todo.completed?'line-through bg-gray-200':''}
              >
              {todo.text}
              </span>
              </div>
              <button
              onClick={()=>handleDelete(index)}
              className="px-2 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
