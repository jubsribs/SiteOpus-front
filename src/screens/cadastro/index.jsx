import React, { useState } from 'react';
import './styles.scss';
import { Button } from '../../components/button';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

export const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSignOut = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        const initalcartvalue = 0;
        addDoc(collection(db, 'users'), {
          username: nome,
          email: email,
          telefone: telefone,
          sexo: genero,
          cpf: cpf,
          dataDeNascimento: dataNascimento,
          cep: cep,
          logradouro: logradouro,
          complemento: complemento,
          numeroDaCasa: numero,
          bairro: bairro,
          cidade: cidade,
          estado: estado,
          password: senha,
          cart: initalcartvalue,
          uid: user.uid,
          type: type,
        })
          .then(() => {
            setSuccessMsg(
              'cadastro realizado com sucesso, você será redirecionado para página de login automaticamente!',
            );
            setNome('');
            setGenero('');
            setCpf('');
            setTelefone('');
            setDataNascimento('');
            setCep('');
            setLogradouro('');
            setComplemento('');
            setNumero('');
            setBairro('');
            setCidade('');
            setEstado('');
            setEmail('');
            setSenha('');
            setType('');
            setErrorMsg('');
            setTimeout(() => {
              setSuccessMsg('');
              navigate('/login');
            }, 2000);
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      })
      .catch((error) => {
        if (error.message === 'Firebase:Error(auth/invalid-email).') {
          setErrorMsg('Por favor, preencha todos os campos obrigatórios');
        }
        if (error.message === 'Firebase:Error(auth/email-already-in-use).') {
          setErrorMsg('Usuario já existente');
        }
      });
  };

  return (
    <form>
      <div className='opus-cadastro-body'>
        <div className='opus-cadastro'>
          <h1 className='opus-cadastro-title'>cadastro</h1>
          {successMsg && (
            <>
              <div className='sucess-msg'>{successMsg}</div>
            </>
          )}
          {errorMsg && (
            <>
              <div className='error-msg'>{errorMsg}</div>
            </>
          )}
          <div className='sub-title-body'>
            <h4 className='sub-title'> nome completo</h4>
            <input
              className='sub-title-box'
              value={nome}
              type='text'
              onChange={(e) => setNome(e.target.value)}
            />

            <h4 className='sub-title'> data de nascimento</h4>
            <input
              className='sub-title-box'
              type='date'
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />

            <h4 className='sub-title'> cpf</h4>
            <input
              className='sub-title-box'
              type='text'
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />

            <h4 className='sub-title'> telefone</h4>
            <input
              className='sub-title-box'
              type='tel'
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <h4 className='sub-title'> genêro</h4>
            <select
              className='sub-title-box'
              type='text'
              value={genero}
              onChange={(e) => setGenero(e.target.value)}>
              <option className='sub-title'> masculino</option>
              <option className='sub-title'> feminino</option>
              <option className='sub-title'> outro</option>
            </select>
            <h4 className='sub-title'> cidade</h4>
            <input
              className='sub-title-box'
              type='text'
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <h4 className='sub-title'> estado</h4>
            <input
              className='sub-title-box'
              type='text'
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />

            <h4 className='sub-title'> cep</h4>
            <input
              className='sub-title-box'
              type='text'
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />

            <h4 className='sub-title'> logradouro</h4>
            <input
              className='sub-title-box'
              type='text'
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
            />

            <h4 className='sub-title'> complemento</h4>
            <input
              className='sub-title-box'
              type='text'
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
            <h4 className='sub-title'> numero</h4>
            <input
              className='sub-title-box'
              type='text'
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />

            <h4 className='sub-title'> bairro</h4>
            <input
              className='sub-title-box'
              type='text'
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />

            <h4 className='sub-title'> selecione uma categoria:</h4>
            <select
              className='sub-title-box'
              type='checkbox'
              value={type}
              onChange={(e) => setType(e.target.value)}>
              <option className='sub-title'> doador</option>
              <option className='sub-title'> donatário</option>
            </select>

            <h4 className='sub-title'> email</h4>
            <input
              className='sub-title-box'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className='sub-title'> senha</h4>
            <input
              className='sub-title-box'
              type='password'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className='button-wrapper'>
            <Button onClick={handleSignOut}>cadastrar</Button>
          </div>
        </div>
      </div>
    </form>
  );
};
