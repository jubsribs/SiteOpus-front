import React, { useState } from 'react';
import { db, storage } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import './styles.scss';

export const AddDonation = () => {
  const [donationImage, setDonationImage] = useState('');
  const [products, setProducts] = useState('');
  const [nome, setNome] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const type = 'donatario';

  const [imageError, setImageError] = useState('');
  const [sucessMsg, setSucessMsg] = useState('');
  const [uploadError, setUploadError] = useState('');
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
        setImageError(
          'por favor selecionar uma imagem válida tipo(png ou jpg)',
        );
      }
    } else {
      setDonationImage(null);
      setImageError('por favor selecionar um arquivo');
    }
  };

  const handleAddDonation = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `donation-images/${Date.now()}`);

    uploadBytes(storageRef, donationImage).then(() => {
      getDownloadURL(storageRef).then((url) => {
        addDoc(collection(db, `donation`), {
          products,
          donationImage: url,
          nome,
          cidade,
          telefone,
          type,
        });
      });
      setTimeout(() => {
        navigate('/');
      }, 1000);
    });
  };
  return (
    <form>
      <div className='opus-donation-body'>
        <div className='opus-donation'>
          <h1 className='opus-donation-title'> adicionar necessidades</h1>
          <h5 className='opus-donation-sub-title'> Nome</h5>
          <input
            className='sub-title-box'
            type='text'
            onChange={(e) => {
              setNome(e.target.value);
            }}
            placeholder='nome'
          />

          <h5 className='opus-donation-sub-title'> Cidade </h5>
          <input
            className='sub-title-box'
            type='text'
            onChange={(e) => {
              setCidade(e.target.value);
            }}
            placeholder='cidade'
          />

          <h5 className='opus-donation-sub-title'> Telefone</h5>
          <input
            className='sub-title-box'
            type='tel'
            onChange={(e) => {
              setTelefone(e.target.value);
            }}
            placeholder='telefone'
          />

          {sucessMsg && <div className='sucess-msg'>{sucessMsg}</div>}
          {uploadError && <div className='error-msg'>{uploadError}</div>}
          <h5 className='opus-donation-sub-title'> Produtos que Necessita</h5>
          <input
            className='sub-title-box'
            type='text'
            onChange={(e) => {
              setProducts(e.target.value);
            }}
            placeholder='produtos'
          />

          <h5 className='opus-donation-sub-title'> Imagens</h5>
          <input className='sub-title-box' type='file' onChange={handleImage} />
          {imageError && (
            <>
              <div className='error-msg'>{imageError}</div>
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
