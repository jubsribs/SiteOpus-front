import React, { useState } from 'react';
import { Button } from '../button';
import { Modal } from '../modalSubscription';
import './styles.scss';

export const BlocoCard = ({ note }) => {
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = () => {
    setIsModal(true);
  };

  return (
    <>
      {isModal && <Modal id={note.id} setOpenModal={setIsModal} />}

      <div className='note'>
        <div className='div_note'>
          <h1 className='note_title'>{note.title}</h1>
          <p className='note_description'>{note.description}</p>
        </div>
        <div className='div_button'>
          <Button
            className='delete_button'
            onClick={() => {
              handleOpenModal();
            }}>
            inscreva-se
          </Button>
        </div>
      </div>
    </>
  );
};
