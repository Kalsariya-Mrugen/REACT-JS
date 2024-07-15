import React from 'react';
import './StyledComponent.css';

const StyledComponent = ({ isStyled }) => {
  return (
    <div className={`styled-component ${isStyled ? 'styled' : ''}`}>
      <p>This component changes style based on the isStyled prop.</p>
    </div>
  );
};

export default StyledComponent;
