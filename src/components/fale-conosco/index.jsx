import React, { useState } from 'react';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import './styles.scss';
import { toast } from 'react-toastify';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '../button';

export const FaleConosco = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const sendMessage = collection(db, 'mensagens');

  const handleSubmit = () => {
    const validar = validarFormulario();

    if (validar) {
      addDoc(sendMessage, {
        name: name,
        email: email,
        message: text,
      })
        .then(() => {
          if (!toast.success('Mensagem enviada com Sucesso!'));
        })
        .catch((error) => {
          toast.error(error.message);
        });
      setName('');
      setEmail('');
      setText('');
    }
  };

  return (
    <form id='formularioContato'>
      <div className='opus-fale-conosco-body'>
        <div className='opus-fale-conosco'>
          <h1 className='title'>fale conosco</h1>
          <div className='sub-title-body'>
            <h4 className='sub-title'>
              nome
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>

            <input
              className='sub-title-box'
              value={name}
              type='name'
              required
              onChange={(e) => setName(e.target.value)}
            />

            <h4 className='sub-title'>
              email
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>

            <input
              className='sub-title-box'
              value={email}
              type='email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className='sub-title'>
              dúvidas/reclamações/feedback
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='text-box'
              value={text}
              type='text'
              required
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className='button-wrapper'>
            <Button onClick={handleSubmit}> enviar</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

function validarFormulario() {
  var formulario = document.getElementById('formularioContato');
  if (formulario.checkValidity()) {
    return true;
  } else {
    return false;
  }
}
