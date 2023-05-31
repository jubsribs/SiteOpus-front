import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { ProductContainer } from '../../components';
import { Button } from '../../components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='opus-family-donation-body'>
      <div className='opus-family-donation-title'>
        <h1> Famílias</h1>
      </div>
      <Carousel responsive={responsive} className='opus-family-donation'>
        {products.map((product) => (
          <ProductContainer key={product.id} product={product} />
        ))}
      </Carousel>
      <div className='button'>
        <Button onClick={handleClick}> voltar</Button>
      </div>
    </div>
  );
};
