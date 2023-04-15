import React, { useState } from 'react';
// import firebase from 'firebase/app';
import { firebase, db } from '../../config/firebase';
// import 'firebase/app';
import 'firebase/firestore';
import './styles.scss';
import TextField from '@mui/material/TextField';
import { Button } from '../button';

export const FaleConosco = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');

  const sendMessage = async (e) => {
    console.log('estou-aqui');
    e.preventDefault();
    try {
      await db.collection('mensagens').add({
        name,
        email,
        text,
      });
      alert('Mensagem envianda com sucesso!');
      setName('');
      setEmail('');
      setText('');
    } catch (error) {
      alert('Ocorreu um erro ao enviar a mensagem' + error.message);
    }
  };

  return (
    <div className='opus-fale-conosco'>
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
          <Button onClick={sendMessage}> enviar</Button>
        </div>
      </div>
    </div>
  );
};
