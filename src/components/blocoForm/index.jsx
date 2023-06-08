import React, { useContext, useState } from 'react';
import { BlocoContext } from '../../context/blocoContext';
import { Button } from '../button';
import './styles.scss';

export const BlocoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { keyId, setKeyId, CreateNote } = useContext(BlocoContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    CreateNote({
      id: setKeyId(keyId + 1),
      title,
      description,
    });
    setTitle('');
    setDescription('');
  };

  return (
    <div className='form-body'>
      <h1 className='form_title'>Avisos</h1>
      <form className='form' onSubmit={HandleSubmit}>
        <input
          className='form_input'
          placeholder='Escreva o Titulo '
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          className='form_textarea'
          placeholder='Texto '
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <Button className='form_button'>enviar</Button>
      </form>
    </div>
  );
};
