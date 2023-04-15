import React, { useState } from 'react';
import './styles.scss';
import TextField from '@mui/material/TextField';
import { Button } from '../../components/button';
import { firebase, auth } from '../../config/firebase';
// import 'firebase/app';
// import 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const Cadastro = () => {
  const [nome, setNome] = useState();
  const [genero, setGenero] = useState();
  const [cpf, setCpf] = useState();
  const [telefone, setTelefone] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [complemento, setComplemento] = useState();
  const [numero, setNumero] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const navigate = useNavigate();

  async function cadastrar() {
    console.log('estou-em-cadastrar');

    const handleRegister = (event) => {
      event.preventDefault();
      auth
        .createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
          // User registered successfully
          console.log(userCredential);
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
        });
    };
  }

  // const handleChange = (e) => {
  //   handleRegister(e);
  //   navigate('/login');
  // };
  return (
    <div className='opus-cadastro-body'>
      <div className='opus-cadastro'>
        <h1 className='opus-cadastro-title'>cadastro</h1>
        <div className='sub-title-body'>
          <h4 className='sub-title'> nome completo</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <h4 className='sub-title'> data de nascimento</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />

          <h4 className='sub-title'> cpf</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <h4 className='sub-title'> telefone</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <h4 className='sub-title'> genêro</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />

          <h4 className='sub-title'> cidade</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <h4 className='sub-title'> estado</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />

          <h4 className='sub-title'> cep</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />

          <h4 className='sub-title'> logradouro</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
          />

          <h4 className='sub-title'> complemento</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
          <h4 className='sub-title'> numero</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />

          <h4 className='sub-title'> bairro</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
          <h4 className='sub-title'> email</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4 className='sub-title'> senha</h4>
          <TextField
            className='sub-title-box'
            multiline
            rows={1}
            defaultValue=''
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className='button-wrapper'>
          <Button>enviar</Button>
        </div>
      </div>
    </div>
  );
};
