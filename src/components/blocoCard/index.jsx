import React, { useContext } from 'react';
import { BlocoContext } from '../../context/blocoContext';
import { Button } from '../button';
import './styles.scss';

export const BlocoCard = ({ note }) => {
  const { DeleteNote } = useContext(BlocoContext);
  return (
    <div className='note'>
      <div className='div_note'>
        <h1 className='note_title'>{note.title}</h1>
        <p className='note_description'>{note.description}</p>
      </div>
      <div className='div_button'>
        <Button className='delete_button' onClick={() => DeleteNote(note.id)}>
          inscreva-se
        </Button>
      </div>
    </div>
  );
};
