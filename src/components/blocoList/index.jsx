import React, { useContext } from 'react';
import { BlocoCard } from '../blocoCard';
import { BlocoContext } from '../../context/blocoContext';
import './styles.scss';

export const BlocoList = () => {
  const { notes } = useContext(BlocoContext);

  if (notes.length === 0) {
    return <h2 className='note_empty'>Nota Vazia</h2>;
  }

  return (
    <div className='note-section-body'>
      <h1 className='note-title'> Ações</h1>
      <div className='note_section'>
        {notes.map((note) => (
          <BlocoCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};
