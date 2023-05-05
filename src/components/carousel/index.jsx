import * as React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  nacci,
  nacci2,
  acaoRua,
  atividadeNacci,
  comida,
  hemoba,
  criancaNacci,
  voluntaria,
} from '../../assets/photos/photos-banner';
import './styles.scss';

export const Banner = () => {
  return (
    <div className='opus-banner-body'>
      <Carousel className='carousel-body'>
        <Carousel.Item className='carousel-item-body'>
          <img className='opus-carousel-image' src={nacci} alt='first slide' />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={nacci2}
            alt='second slide'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={acaoRua}
            alt='Third slide'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={atividadeNacci}
            alt='Third slide'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img className='opus-carousel-image' src={comida} alt='Third slide' />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img className='opus-carousel-image' src={hemoba} alt='Third slide' />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={criancaNacci}
            alt='Third slide'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={voluntaria}
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
