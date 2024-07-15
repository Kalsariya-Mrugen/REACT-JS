
import React, { useRef, useState} from 'react';

const InputValueDisplay = () => {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = () => {
        setInputValue(inputRef.current.value);
    };

    return (
        <div>
            <input type="text" ref={inputRef} onChange={handleInputChange}/>
            <h3>Input Value: {inputValue}</h3>
        </div>
    );
};

export default InputValueDisplay;