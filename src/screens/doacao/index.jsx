import React from 'react';
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
          cadastrar-se no site.
        </h6>
        <h6 className='opus-doacao-paragraph'>
          Ir até o seu perfil e selecionar a aba "pesquisar famílias".
        </h6>

        <h5 className='opus-doacao-title-paragraph'> Donatários :</h5>
        <h6 className='opus-doacao-paragraph'>
          Para receber doações é necessário cadastrar-se no site.
        </h6>
        <h6 className='opus-doacao-paragraph'>
          Ir até o seu perfil e selecionar a aba "Inserir Necessidades".
        </h6>

        <h3 className='opus-doacao-subtitle'> Como possar doar?</h3>
        <h6 className='opus-doacao-paragraph'>
          Caso opte por não se cadastrar no site, você pode ajudar o projeto
          doando de forma rápida e segura através da chave pix ou com o
          PagSeguro.
        </h6>
        <h6 className='opus-doacao-paragraph'>
          Sua doação será destinada para as famílias cadastradas no nosso Banco
          de Dados.
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
      </div>
    </div>
  );
};
