import React from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';

export const FaleConosco = () => {
  return (
    <div className='opus-fale-conosco'>
      <div className='opus-fale-conosco'>
        <h1 className='title'>fale conosco</h1>
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
        <TextField
          className='text-box'
          sx={{ width: '700px' }}
          label='dúvidas/reclamações/feedback'
          multiline
          rows={10}
          defaultValue=''
        />
        <button className='button-conosco'>
          <h5>enviar</h5>
        </button>
      </div>
    </div>
  );
};
