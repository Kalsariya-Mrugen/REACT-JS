import React from 'react'

const TodoItem = ({todoList, setTodoList}) => {
    let updatedTodoList =[...todoList]
    const deleteTodo = (index) => {
      console.log(index);
        setTodoList(updatedTodoList.filter((ele, i) => i!==index))
        console.log(todoList)
    }
    
    const handle = (index) => {
      let updatedDataList = todoList.map((ele, i) =>{
        if(i===index){
          console.log(ele);
          return {...ele, completed:!ele.completed}
        }
        return ele;
      })

      setTodoList(updatedDataList)
    }
  return (
    <div className='todo'>
        {todoList.map((todo, index) => (
          <div key={index} className='todoItems'>
            <h3  className='py-2' style={{textDecoration : todo.completed ? "line-through" : ""}}>{todo.text}</h3>
            <button  onClick={()=>deleteTodo(index)}>Delete</button>
            <button  onClick={()=>handle(index)}>{ todo.completed ? "UnComplete" : "Completed"}</button>
          </div>
        ))}
      </div>
   
  )
}

export default TodoItem