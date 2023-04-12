import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {
  grupo,
  grupo2,
  grupo3,
  nacci,
  nacci2,
  nacci3,
  nacci4,
  nacci5,
  sangue,
  oaf,
  oaf2,
  gacc,
} from '../../assets/photos';
import './styles.scss';

export const Galeria = () => {
  return (
    <div className='opus-galeria-body'>
      <h1 className='title'>galeria de fotos</h1>

      <ImageList cols={3} rowHeight={500}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              className='images'
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

const itemData = [
  {
    img: grupo,
    title: 'grupo todo',
  },
  {
    img: grupo2,
    title: 'Burger',
  },
  {
    img: grupo3,
    title: 'Camera',
  },
  {
    img: nacci,
    title: 'Coffee',
  },
  {
    img: nacci2,
    title: 'Hats',
  },
  {
    img: oaf,
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: sangue,
    title: 'Basketball',
  },
  {
    img: nacci3,
    title: 'Fern',
  },
  {
    img: nacci4,
    title: 'Mushrooms',
  },
  {
    img: nacci5,
    title: 'Tomato basil',
  },
  {
    img: oaf2,
    title: 'Sea star',
  },
  {
    img: gacc,
    title: 'Bike',
  },
];
