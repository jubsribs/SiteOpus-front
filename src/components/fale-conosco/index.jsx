import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import './styles.scss';
import TextField from '@mui/material/TextField';
import { Button } from '../button';

export const FaleConosco = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const sendMessage = collection(db, 'mensagens');

  const handleSubmit = () => {
    addDoc(sendMessage, {
      name: name,
      email: email,
      message: text,
    })
      .then(() => {
        if (!alert('Mensagem enviada com Sucesso!'));
      })
      .catch((error) => {
        alert(error.message);
      });
    setName('');
    setEmail('');
    setText('');
  };

  return (
    <div className='opus-fale-conosco-body'>
      <div className='opus-fale-conosco'>
        <h1 className='title'>fale conosco</h1>
        <div className='sub-title-body'>
          <h4 className='sub-title'> nome</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h4 className='sub-title'> email</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h4 className='sub-title'> dúvidas/reclamações/feedback</h4>
          <TextField
            className='text-box'
            sx={{ width: '600px' }}
            multiline
            rows={10}
            defaultValue=''
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='button-wrapper'>
          <Button onClick={handleSubmit}> enviar</Button>
        </div>
      </div>
    </div>
  );
};
