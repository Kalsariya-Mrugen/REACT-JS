import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>Text Input</h1>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />
      <p>Typed Text: {text}</p>
    </div>
  );
};

export default TextInput;
