import React, { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button } from '../button';
import { toast } from 'react-toastify';
import Tooltip from '@mui/material/Tooltip';
import { IMaskInput } from 'react-imask';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import './styles.scss';

export const Modal = ({ id, setOpenModal }) => {
  const [isModal, setIsModal] = useState(true);
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const note = id;
  const handleCloseModal = () => {
    setIsModal(false);
    setOpenModal(false);
  };

  const handleSubmit = () => {
    const validar = validarFormulario();

    if (validar) {
      addDoc(collection(db, 'inscricao'), {
        id: note,
        name: name,
        telefone: telefone,
      })
        .then(() => {
          if (!toast.success('Inscrição feita com Sucesso!'));
        })
        .catch((error) => {
          toast.error(error.message);
        });
      setName('');
      setTelefone('');
      setIsModal(false);
      setOpenModal(false);
    } else {
      toast.error('Preencha os Campos Obrigatórios!');
    }
  };

  return (
    isModal && (
      <div className='opus-modal-body'>
        <div className='opus-modal'>
          <button
            type='button'
            className='opus-modal-icon'
            onClick={handleCloseModal}>
            <HighlightOffIcon className='opus-modal-icon-close' />
          </button>

          <form id='formularioContato'>
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
              telefone
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <IMaskInput
              className='sub-title-box'
              type='tel'
              placeholder='Ex.:(00)0000-00000'
              mask='(00)0000-00000'
              value={telefone}
              required
              onChange={(e) => setTelefone(e.target.value)}
            />
          </form>
          <div className='button-wrapper'>
            <Button onClick={handleSubmit}> inscrever</Button>
          </div>
        </div>
      </div>
    )
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
