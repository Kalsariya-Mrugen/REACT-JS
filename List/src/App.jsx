import './App.css'
import React from 'react';
import ListDisplay from './ListDisplay';

const App = () => {
  const itemList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div className="App">
      <h1>List of Items</h1>
      <ListDisplay items={itemList} />
    </div>
  );
};

export default App;
