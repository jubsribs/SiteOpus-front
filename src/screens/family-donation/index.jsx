import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { ProductContainer } from '../../components';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const FamilyDonation = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  useEffect(() => {
    const getProducts = () => {
      const productsArray = [];
      const path = `donation`;

      getDocs(collection(db, path))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            productsArray.push({ ...doc.data(), id: doc.id });
          });

          setProducts(productsArray);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getProducts();
  }, []);

  return (
    <div className='opus-family-donation'>
      <div>
        Todas as famílias
        <p> resultados</p>
      </div>
      {products.map((product) => (
        <ProductContainer key={product.id} product={product} />
      ))}
      <Button onClick={handleClick}> voltar</Button>
    </div>
  );
};
