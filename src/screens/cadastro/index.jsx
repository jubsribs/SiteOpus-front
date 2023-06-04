import React, { useState } from 'react';
import './styles.scss';
import { Button } from '../../components/button';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

export const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('masculino');
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
  const [type, setType] = useState('doador');
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleCreateUser = (e) => {
    e.preventDefault();

    const validar = validarCadastro();
    if (validar) {
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          const initalcartvalue = 0;
          addDoc(collection(db, 'users'), {
            username: nome,
            email: email,
            telefone: telefone,
            sexo: genero,
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
              toast.success('cadastro realizado com sucesso!');
              setNome('');
              setGenero('masculino');
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
              setType('doador');
              setErrorMsg('');
              setTimeout(() => {
                setSuccessMsg('');
                navigate('/login');
              }, 1000);
            })
            .catch((error) => {
              toast.error(error.message);
            });
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.info('Email já existente');
          }
          if (error.code === 'auth/weak-password') {
            toast.info('A senha precisa ter pelo menos 6 caracteres');
          }
        });
    } else {
      toast.error('Preencha Todos os Campos Obrigatórios!');
    }
  };

  return (
    <form id='cadastro'>
      <div className='opus-cadastro-body'>
        <div className='opus-cadastro'>
          <h1 className='opus-cadastro-title'>cadastro</h1>
          {successMsg && (
            <>
              <div>{successMsg}</div>
            </>
          )}
          {errorMsg && (
            <>
              <div>{errorMsg}</div>
            </>
          )}
          <div className='sub-title-body'>
            <h4 className='sub-title'>
              nome completo
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              value={nome}
              type='text'
              required
              onChange={(e) => setNome(e.target.value)}
            />

            <h4 className='sub-title'>
              data de nascimento
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='date'
              value={dataNascimento}
              required
              onChange={(e) => setDataNascimento(e.target.value)}
            />

            <h4 className='sub-title'>
              telefone
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='tel'
              value={telefone}
              required
              onChange={(e) => setTelefone(e.target.value)}
            />
            <h4 className='sub-title'>
              genêro
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <select
              className='sub-title-box'
              type='text'
              value={genero}
              required
              onChange={(e) => setGenero(e.target.value)}>
              <option className='sub-title'> masculino</option>
              <option className='sub-title'> feminino</option>
              <option className='sub-title'> outro</option>
            </select>
            <h4 className='sub-title'>
              cidade
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='text'
              value={cidade}
              required
              onChange={(e) => setCidade(e.target.value)}
            />
            <h4 className='sub-title'>
              estado
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='text'
              value={estado}
              required
              onChange={(e) => setEstado(e.target.value)}
            />

            <h4 className='sub-title'>
              cep
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='text'
              value={cep}
              required
              onChange={(e) => setCep(e.target.value)}
            />

            <h4 className='sub-title'>
              logradouro
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='text'
              value={logradouro}
              required
              onChange={(e) => setLogradouro(e.target.value)}
            />

            <h4 className='sub-title'>
              complemento
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='text'
              value={complemento}
              required
              onChange={(e) => setComplemento(e.target.value)}
            />
            <h4 className='sub-title'>
              número
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='text'
              value={numero}
              required
              onChange={(e) => setNumero(e.target.value)}
            />

            <h4 className='sub-title'>
              bairro
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='text'
              value={bairro}
              required
              onChange={(e) => setBairro(e.target.value)}
            />

            <h4 className='sub-title'>
              selecione uma categoria:
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <select
              className='sub-title-box'
              type='checkbox'
              value={type}
              required
              onChange={(e) => setType(e.target.value)}>
              <option className='sub-title'> doador</option>
              <option className='sub-title'> donatário</option>
            </select>

            <h4 className='sub-title'>
              email
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className='sub-title'>
              senha
              <Tooltip title='campo obrigatório'>
                <span>*</span>
              </Tooltip>
            </h4>
            <input
              className='sub-title-box'
              type='password'
              value={senha}
              required
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className='button-wrapper'>
            <Button onClick={handleCreateUser}>cadastrar</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

function validarCadastro() {
  var formularioCadastro = document.getElementById('cadastro');

  if (formularioCadastro.checkValidity()) {
    return true;
  } else {
    return false;
  }
}
