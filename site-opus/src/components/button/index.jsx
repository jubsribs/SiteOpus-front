import React from 'react';
import './styles.scss';

export const Button = (props, onClick) => {
  return (
    <button className='opus-button' onClick={onClick}>
      <span> {props.children}</span>
    </button>
  );
};
