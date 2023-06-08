import React from 'react';
import './styles.scss';

export const ProductContainer = ({ product }) => {
  return (
    <div className='opus-product-body'>
      <div className='opus-product-details'>
        <h4 className='opus-product-donation-title'> nome: {product.nome}</h4>
        <h4 className='opus-product-donation-title'>
          cidade: {product.cidade}
        </h4>
        <h4 className='opus-product-donation-title'>
          telefone: {product.telefone}
        </h4>
        <h4 className='opus-product-donation-title'>
          Necessidades: {product.products}
        </h4>

        <div className='mini-img-container'>
          <img src={product.donationImage} alt='imagens-doacao' />
        </div>
      </div>
    </div>
  );
};
