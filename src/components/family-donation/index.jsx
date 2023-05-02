import React, { useEffect, useState } from 'react';
import { collection, query, onSnapshot, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { ProductContainer } from './productcontainer';

export const FamilyDonation = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      const productsArray = [];
      const path = `products-donation`;

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
      <div className='allFamily'></div>
      {products.map((product) => {
        <ProductContainer key={product.id} product={product} />;
      })}
    </div>
  );
};
