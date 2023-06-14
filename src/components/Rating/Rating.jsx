import React from "react";

export const Rating = ({ value, onChange }) => {
  const buttons = [];

  for (let index = 1; index <= 5; index++) {
    buttons.push(<button 
      disabled={index === value}
      onClick={ () => {onChange(index)}}
      key={index}>
      {index}
    </button>)
  }

  return (
    <div style={{ display: 'flex' }}>
      {buttons}
    </div>
  );
};
