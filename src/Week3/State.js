import React from 'react'
import { useState } from 'react';

function State() {
    const [todoList,setTodoList] = useState([
      {name:"test",
      status:true}
    ])
    const [addTaskName,setAddTaskName]=useState("")
    const handleAddTask = () =>{
      if (addTaskName.trim()) {
        setTodoList([{ name: addTaskName, status: false },...todoList ]);
        setAddTaskName('');
      }
      else{
        alert("Please enter your task");
      }
    }
      const handleStatusTask = (index, todo) => {
    const newTodoList = [...todoList];
    newTodoList[index].status = !todo.status;
    setTodoList(newTodoList);
  };

  const handleDeleteTask = (index) => {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  };

  const handleClearTask = () => {
    const newTodoList = todoList.filter(todo => !todo.status);
    setTodoList(newTodoList);
  };

  const handleResetTask = () => {
    setTodoList([]);
  };
  return (
    <div class="w-full h-screen bg-gray-100 pt-8">
    <div class="bg-white p-3 max-w-md mx-auto">
        <div class="text-center">
            <h1 class="text-3xl font-bold">ToDo App</h1>
            <div class="mt-4 flex">
                <input
                    class="w-80 border-b-2 border-gray-500 text-black"
                    type="text" placeholder="Enter your task here" value={addTaskName} onChange={(e)=>{setAddTaskName(e.currentTarget.value)}}
                />
                <button
                    class="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                    onClick={handleAddTask}
                >   
                    <svg class="h-6 w-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
                    <span>Add</span>
                </button>
            </div>        
        </div>
        <div class="mt-8">
            <ul>
            {todoList.map((todo, index) => (
                    <li class="p-2 rounded-lg" >
                        <div class="flex align-middle flex-row justify-between">
                            <div class="p-2">     <input type="checkbox" class="h-6 w-6 "  checked={todo.status} onChange={() => handleStatusTask(index, todo)}/>
                           
                            </div>
                            <div class="p-2">
                               {todo.status ? <p class="text-lg line-through text-gray-400">{todo.name}</p> :<p class="text-lg text-black-400">{todo.name}</p>  } 
                            </div>
                            <button 
                                class="flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
                                onClick={() => handleDeleteTask(index)}
                                >
                                <svg class="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                <span>Remove</span>
                            </button>
                        </div>
                        <hr class="mt-2"/>
                    </li>
                  ))}
            </ul>
        </div>
        <div class="mt-8">
            <button 
                class="border-2 border-red-500 p-2 text-red-500"
                onClick={handleClearTask}
            >Clear Completed Task</button>
            <button 
                class="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
                onClick={handleResetTask}
            >Reset Todo List</button>
        </div>
    </div>    
</div>
  )
}

export default State
