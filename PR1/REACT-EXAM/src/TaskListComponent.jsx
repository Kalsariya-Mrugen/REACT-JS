import React from 'react';

const TaskListComponent = ({ tasks, deleteTask }) => {
 

  return (
    <ul className="todo-list">
       if (tasks.length === 0) {
          <p className="error-message">No tasks found</p>
      }
      else{tasks.map((task, index) => (
        <li key={index}>
          {task.task}
          <button className="delete-button" onClick={() => deleteTask(index)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskListComponent;