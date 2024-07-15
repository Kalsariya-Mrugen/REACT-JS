import React, { useState } from 'react';

function UserAuthentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <p>{isLoggedIn ? "Welcome, User!" : "Please log in."}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default UserAuthentication;
