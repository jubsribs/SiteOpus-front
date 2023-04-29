/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../config/firebase';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  addDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { Button } from '../button';
import './styles.scss';

export const addDonation = () => {
  const [donationImage, setDonationImage] = useState('');
  const [products, setProducts] = useState('');

  const [imageError, setImageError] = useState('');
  const [sucessMsg, setSucessMsg] = useState('');
  const [uploadError, setUploadError] = useState('');

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
        });
      });
    });
  };
  return (
    <form>
      <div className='opus-donation-body'>
        <div className='opus-donation'></div>
        <h4> Adicionar necessidades</h4>
        {sucessMsg && <div className='sucess-msg'>{sucessMsg}</div>}
        {uploadError && <div className='error-msg'>{uploadError}</div>}

        <h5> Produtos que Necessita</h5>
        <input
          type='text'
          onChange={(e) => {
            setProducts(e.target.value);
          }}
          placeholder='produtos'
        />

        <h5> Imagens</h5>
        <input type='file' onChange={handleImage} />
        {imageError && (
          <>
            <div className='error-msg'>{imageError}</div>
          </>
        )}

        <Button onClick={handleAddDonation}> enviar</Button>
      </div>
    </form>
  );
};
