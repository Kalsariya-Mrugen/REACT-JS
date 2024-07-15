import React, { useState } from 'react';

const InputComponent = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName === '') {
      setError('Please enter a task name');
      return;
    }
    addTask({ task: taskName, isComplete: false });
    setTaskName('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="input"
        placeholder="Enter task name"
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit" className="button">
        Add Task
      </button>
    </form>
  );
};

export default InputComponent;