import React, {useEffect, useState} from 'react';
import * as S from './styled'
import { useHistory} from 'react-router-dom'

function Repositories () {

    const [repositories, setrepositories] = useState([])
    let history = useHistory()

    useEffect( ()=> {
        let repositoriesName = localStorage.getItem('repositoriesName');

        if(repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName)
            setrepositories(repositoriesName)
            localStorage.clear()
        }else{
            history.push('/')
        }
        
    },[history])
  

    return (
        <S.Container>
        <S.Title>Lista de Respositórios</S.Title>        
        <S.List>    
           {repositories.map( repository =>{
               return (
                 <S.ListItem> Repositorio: {repository} </S.ListItem>  
               )
           })}     
        </S.List>
        <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
    )
}





export default Repositories