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
          <img
            className='opus-carousel-image'
            src={nacci}
            alt='atividades com criança nacci'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={nacci2}
            alt='pintura no rosto'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={acaoRua}
            alt='ações de distribuição de sopa na rua'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={atividadeNacci}
            alt='pintura corporal com crianças nacci'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={comida}
            alt='distribuição de lanches'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={hemoba}
            alt='doação de sangue'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={criancaNacci}
            alt='atividade recreativa'
          />
        </Carousel.Item>

        <Carousel.Item className='carousel-item-body'>
          <img
            className='opus-carousel-image'
            src={voluntaria}
            alt='ação voluntaria no shopping'
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
