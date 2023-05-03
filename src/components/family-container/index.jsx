import React from 'react';
import './styles.scss';

export const ProductContainer = ({ product }) => {
  return (
    <div className='opus-product-donation-body'>
      <div className='opus-product-donation'> Product Container</div>
      <h4 className='opus-product-donation-title'>{product.product.nome}</h4>
      <h4 className='opus-product-donation-title'>{product.product.cidade}</h4>
      <h4 className='opus-product-donation-title'>
        {product.product.telefone}
      </h4>
      <h4 className='opus-product-donation-title'>
        {product.product.products}
      </h4>
      <img
        className='opus-product-donation-image'
        src={product.product.donationImage}
      />
    </div>
  );
};
