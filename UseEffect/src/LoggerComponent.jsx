import React, { useEffect } from 'react';

const LoggerComponent = ({ logMessage }) => {
  useEffect(() => {
    console.log("Component mounted.");
  }, []);

  useEffect(() => {
    console.log(`Prop changed to ${logMessage}`);
  }, [logMessage]);

  return (
    <div>
      <p>LOg</p>
    </div>
  );
};

export default LoggerComponent;
