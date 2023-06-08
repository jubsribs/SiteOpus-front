import React from 'react';
import { NavLink } from 'react-router-dom';
import { qrCode } from '../../assets/photos/pagamento';
import './styles.scss';

export const Doacao = () => {
  return (
    <div className='opus-doacao-body'>
      <div className='opus-doacao'>
        <h1 className='opus-doacao-title'> Doação</h1>

        <h3 className='opus-doacao-subtitle'> Como funciona o site?</h3>

        <h5 className='opus-doacao-title-paragraph'> Doadores :</h5>
        <h6 className='opus-doacao-paragraph'>
          Caso opte por encontrar as famílias e entrar em contato, é necessário
          <NavLink className='nav-link' to='/cadastro'>
            cadastre-se
          </NavLink>
          no site.
        </h6>
        <h6 className='opus-doacao-paragraph'>
          Ir até o seu perfil e selecionar a aba "pesquisar famílias".
        </h6>

        <h5 className='opus-doacao-title-paragraph'> Donatários :</h5>
        <h6 className='opus-doacao-paragraph'>
          Para receber doações é necessário
          <NavLink className='nav-link' to='/cadastro'>
            cadastre-se
          </NavLink>
          no site.
        </h6>
        <h6 className='opus-doacao-paragraph'>
          Ir até o seu perfil e selecionar a aba "inserir necessidades".
        </h6>

        <h3 className='opus-doacao-subtitle'> Como possar doar?</h3>
        <h6 className='opus-doacao-paragraph'>
          Caso opte por não cadastrar-se no site, você pode ajudar o projeto
          doando de forma rápida e segura através da chave pix ou com o
          PagSeguro.
        </h6>
        <h6 className='opus-doacao-paragraph'>
          Sua doação será destinada para as famílias cadastradas no nosso site.
        </h6>
        <h3 className='opus-doacao-subtitle'> Pagamento Com Pix :</h3>
        <h6 className='opus-doacao-paragraph'>
          Acesse seu banco na área pix, selecione QRCode e aponte a camêra do
          seu celular.
        </h6>
        <img className='opus-doacao-pix' src={qrCode} alt='doacao-pix' />

        <h6 className='opus-doacao-paragraph'>Banco: NUBANK</h6>
        <h6 className='opus-doacao-paragraph'>Nome: Grupo Opus</h6>
        <h6 className='opus-doacao-paragraph'>
          Chave Pix: opusservicoeobras@gmail.com
        </h6>

        <span> ou </span>

        <a
          href='https://pag.ae/7Ztia7Zzp/button'
          target='_blank'
          title='Pagar com PagSeguro'>
          <img
            src='//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar-azul.gif'
            alt='Pague com PagSeguro - é rápido, grátis e seguro!'
          />
        </a>
      </div>
    </div>
  );
};
