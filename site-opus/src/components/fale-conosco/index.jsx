import React from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';
import { Button } from '../button';

export const FaleConosco = () => {
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
          />

          <h4 className='sub-title'> email</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
          />

          <h4 className='sub-title'> dúvidas/reclamações/feedback</h4>
          <TextField
            className='text-box'
            sx={{ width: '600px' }}
            multiline
            rows={10}
            defaultValue=''
          />
        </div>
        <div className='button-wrapper'>
          <Button> enviar</Button>
        </div>
      </div>
    </div>
  );
};
