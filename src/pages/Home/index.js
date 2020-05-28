import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled'
import {useHistory} from 'react-router-dom'

function Home() {
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false)

  const urlBase = `https://api.github.com/users/${usuario}/repos`

  let history = useHistory();

  function handlePesquisa (){
    axios.get(urlBase)
    .then(response => {
      let repositories = response.data
      let repositoriesName = []
      repositories.map(repository => {
        repositoriesName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories')
      setErro(false)
    })
    .catch(err =>{
      setErro(true)
    })
  }

  return (
    <S.HomeContainer>
      <S.Title>Search Repository Name</S.Title>
    <S.Content>
      <S.Input placeholder='Usuário' value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button onClick={handlePesquisa} >Pesquisar</S.Button>
    </S.Content>
    { erro ? <S.ErrorMessage>Ocorreu um erro. Tente novamente</S.ErrorMessage> : ''}
     </S.HomeContainer>
  );
}

export default Home;