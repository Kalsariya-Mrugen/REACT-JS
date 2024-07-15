import React from 'react'
import { useState } from 'react'
import TodoItems from './ToDoItem'

const ToDoList = () => {
    const [todos, setTodos] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleAdd = () => {
      let newTodo ={
        id: todoList.length + 1,
        text: todos,
        completed: false
      }
        if(todos){
            setTodoList([...todoList, newTodo ])
            console.log(todoList)
            console.log(todos);
            setTodos("")
     }
    }
    

  return (
    <div>
        <div>
          <input type="text"  value={todos}   onChange={(e)=>setTodos(e.target.value)} />
          <button className='mt-3 ms-2 p-2' onClick={handleAdd}>Add ToDo</button>
        </div>
    
    < TodoItems todoList={todoList} setTodoList={setTodoList}/>
    </div>
  )
}

export default ToDoList