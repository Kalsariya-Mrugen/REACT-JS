import React, { useState } from 'react';
import InputComponent from './InputComponent';
import TaskListComponent from './TaskListComponent';
import './style.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div>
      <InputComponent addTask={addTask} />
      <TaskListComponent tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;