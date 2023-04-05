import React from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';
import { Button } from '../button';
import axios from 'axios';

export const FaleConosco = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const addFeedback = async () => {
    await axios({
      method: 'post',
      url: '',
      data: { nome: name, email: email, content: text },
    });
    console.log('estou-aqui');
    setName('');
    setEmail('');
    setText('');
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
            onChange={handleNameChange}
          />

          <h4 className='sub-title'> email</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={email}
            onChange={handleEmailChange}
          />

          <h4 className='sub-title'> dúvidas/reclamações/feedback</h4>
          <TextField
            className='text-box'
            sx={{ width: '600px' }}
            multiline
            rows={10}
            defaultValue=''
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className='button-wrapper'>
          <Button onClick={addFeedback}> enviar</Button>
        </div>
      </div>
    </div>
  );
};
