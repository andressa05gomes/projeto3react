import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../Header/Header'
import image from '../../assets/foto01.svg'
import axios from 'axios'
import projeto01 from '../Portfolio/projeto01.png'
import projeto02 from '../Portfolio/projeto02.png'
import projeto03 from '../Portfolio/projeto03.png'
import projeto04 from '../Portfolio/projeto04.png'

import './Portfolio.css'

const list = [
  {
    id: 1,
    nome: 'Projeto Malala',
    descricao: 'Um site com a história e informações sobre Malala',
    conteudo: 'Feito com html e css',
    imagem: projeto01,
    link: 'https://projeto1-andressa.netlify.app'
  },
  {
    id: 2,
    nome: 'TODO list',
    descricao: 'Uma aplicação em react para fazer um todo list ',
    conteudo: 'React hooks e testar os componente com testing library.',
    imagem: projeto02,
    link: 'https://thirsty-noyce-28045f.netlify.app/'
  },
  {
    id: 3,
    nome: 'Rick And Morty',
    descricao: 'Um site em react para demonstrar e buscar personagens de Ricky and Morty',
    conteudo: 'React: fundamentos, components, hooks, eventos e consumos de API.',
    imagem: projeto03,
    link: 'https://rickandmortytiktok.netlify.app/'
  },
  {
    id: 4,
    nome: 'Meu Portfolio',
    descricao: 'Um site em react para demonstrar meu portfolio',
    conteudo: 'React: fundamentos, components, rotas, hooks, eventos e consumos de API.',
    imagem: projeto04,
    link: 'https://portfolio-aula-react.netlify.app/'
  }
]

function Portfolio() {
  const [repos, setRepos] = useState([])
  const baseURL = 'https://api.github.com/users/andressa05gomes/repos'

  useEffect(()=> {
    axios
      .get(baseURL)
      .then((response) => setRepos(response.data))
  }, [])

  return(
   <>
    <Header 
      image={image} 
      description="ilustracao mulher com site"
    >
      Meus Projetos
    </Header>

    <div className="cartao-container">
      {
        list.map(projeto => {
          return(
            <div className="cartao" key={projeto.id}>
              <h1>{projeto.nome}</h1>
              <img src={projeto.imagem} alt={"gif do projeto "+ projeto.nome}/>
              <p>{projeto.descricao}</p>
              <a href={projeto.link} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#111"/>
              </a>
            </div>
          )
        })
      }
    </div>
    <h2 className="titulo">Outros Projetos no meu Github</h2>  
    <div className="card-container">
      {
        repos.map(repo => {
          return(
            <div className="card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#fff"/>
              </a>
            </div>
          )
        })
      }
    </div>
   </>
  )
 }
 
 export default Portfolio