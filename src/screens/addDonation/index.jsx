import React, { useState } from 'react';
import { db, storage } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { toast } from 'react-toastify';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import './styles.scss';

export const AddDonation = () => {
  const [donationImage, setDonationImage] = useState('');
  const [products, setProducts] = useState('');
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');

  const [imageError, setImageError] = useState('');
  const [sucessMsg] = useState('');
  const [uploadError] = useState('');
  const navigate = useNavigate();

  const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG'];

  const handleImage = (e) => {
    e.preventDefault();
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setDonationImage(selectedFile);
        setImageError('');
      } else {
        setDonationImage(null);
        toast.dark('por favor selecionar uma imagem válida tipo(png ou jpg)');
      }
    } else {
      setDonationImage(null);
      toast.error('por favor selecionar um arquivo');
    }
  };

  const handleAddDonation = (e) => {
    e.preventDefault();

    const validar = validarDonation();

    if (validar) {
      const storageRef = ref(storage, `donation-images/${Date.now()}`);

      uploadBytes(storageRef, donationImage)
        .then(() => {
          getDownloadURL(storageRef).then((url) => {
            addDoc(collection(db, `donation`), {
              products,
              donationImage: url,
              nome,
              cidade,
              telefone,
            });
          });
          setTimeout(() => {
            navigate('/');
          }, 1000);
        })
        .then(() => {
          if (!toast.success('Necessidade Adicionada com Sucesso!'));
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      toast.error('Preencha Todos os Campos Obrigatórios!');
    }
  };
  return (
    <form id='addDonation'>
      <div className='opus-donation-body'>
        <div className='opus-donation'>
          <h1 className='opus-donation-title'> adicionar necessidades</h1>
          <h5 className='opus-donation-sub-title'>
            Nome
            <Tooltip title='campo obrigatório'>
              <span>*</span>
            </Tooltip>
          </h5>
          <input
            className='sub-title-box'
            type='text'
            required
            onChange={(e) => {
              setNome(e.target.value);
            }}
            placeholder='nome'
          />

          <h5 className='opus-donation-sub-title'>
            Cidade
            <Tooltip title='campo obrigatório'>
              <span>*</span>
            </Tooltip>
          </h5>
          <input
            className='sub-title-box'
            type='text'
            required
            onChange={(e) => {
              setCidade(e.target.value);
            }}
            placeholder='cidade'
          />

          <h5 className='opus-donation-sub-title'>
            Telefone
            <Tooltip title='campo obrigatório'>
              <span>*</span>
            </Tooltip>
          </h5>
          <input
            className='sub-title-box'
            type='tel'
            required
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
            placeholder='telefone'
          />

          {sucessMsg && <div>{sucessMsg}</div>}
          {uploadError && <div>{uploadError}</div>}
          <h5 className='opus-donation-sub-title'>
            Necessidades
            <Tooltip title='campo obrigatório'>
              <span>*</span>
            </Tooltip>
          </h5>
          <input
            className='sub-title-box'
            type='text'
            required
            onChange={(e) => {
              setProducts(e.target.value);
            }}
            placeholder='produtos'
          />

          <h5 className='opus-donation-sub-title'> Imagens </h5>
          <input className='sub-title-box' type='file' onChange={handleImage} />
          {imageError && (
            <>
              <div>{imageError}</div>
            </>
          )}
          <div className='button-wrapper'>
            <Button onClick={handleAddDonation}>enviar</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

function validarDonation() {
  var donation = document.getElementById('addDonation');
  if (donation.checkValidity()) {
    return true;
  } else {
    return false;
  }
}
