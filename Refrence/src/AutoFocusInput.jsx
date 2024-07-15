import React, { useRef, useEffect } from 'react';

const AutoFocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className='inputDiv'>
            <input type="text" ref={inputRef} placeholder="Focus will be here" />
        </div>
    );
};

export default AutoFocusInput;