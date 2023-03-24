import React from 'react';
import './styles.scss';

export const Button = (props) => {
  return (
    <button className='opus-button'>
      <span> {props.children}</span>
    </button>
  );
};
