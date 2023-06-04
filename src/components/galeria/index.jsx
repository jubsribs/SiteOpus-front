import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {
  nacci,
  nacci2,
  nacci3,
  nacci4,
  nacci5,
  sangue,
  oaf,
  oaf2,
  gabi,
  michael,
  arla,
  felicia,
  hebert,
  helen,
  meninas,
  saany,
  sueyde,
  shop,
  perolas,
  alimentacao,
  anastacia,
  lucas,
  rua,
  ednalva,
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
    img: gabi,
    title: 'gabi',
  },
  {
    img: felicia,
    title: 'felicia',
  },
  {
    img: saany,
    title: 'saany',
  },
  {
    img: nacci,
    title: 'nacci',
  },
  {
    img: nacci2,
    title: 'atividades-nacci',
  },
  {
    img: oaf,
    title: 'atividades-oaf',
  },
  {
    img: sangue,
    title: 'doacao-sangue',
  },
  {
    img: nacci3,
    title: 'voluntaria',
  },
  {
    img: nacci4,
    title: 'atividades-voluntarios',
  },
  {
    img: nacci5,
    title: 'criancas-nacci',
  },
  {
    img: oaf2,
    title: 'atividades-oaf',
  },
  {
    img: arla,
    title: 'arla',
  },
  {
    img: sueyde,
    title: 'sueyde',
  },
  {
    img: rua,
    title: 'acao-rua',
  },
  {
    img: perolas,
    title: 'perolas',
  },
  {
    img: hebert,
    title: 'hebert',
  },
  {
    img: helen,
    title: 'helen',
  },
  {
    img: meninas,
    title: 'meninas-rua',
  },
  {
    img: shop,
    title: 'voluntarios-shop',
  },
  {
    img: alimentacao,
    title: 'alimentacao',
  },
  {
    img: anastacia,
    title: 'anastacia',
  },
  {
    img: lucas,
    title: 'lucas',
  },
  {
    img: ednalva,
    title: 'ednalva',
  },
  {
    img: michael,
    title: 'michael',
  },
];
