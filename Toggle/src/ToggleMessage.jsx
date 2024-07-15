import React, { useState } from 'react';

function ToggleMessage() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <p>{isToggled ? "Message is visible" : "Message is hidden"}</p>
      <button onClick={() => setIsToggled(!isToggled)}>
        Toggle Message
      </button>
    </div>
  );
}

export default ToggleMessage;
