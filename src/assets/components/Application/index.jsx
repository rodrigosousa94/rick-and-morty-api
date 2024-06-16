import { useEffect, useState } from "react"
import { ContainerApp, HeaderApp, ContentCharacters, Loader } from "./styles"
import CardCharacter from "../CardCharacter"
import IconLoader from '../../loader.gif'

import axios from "axios"


function Application(){

    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [countPages, setCountPages] = useState('')
    const [qtdCharacters, setQtdCharacters] = useState('')
    const [isLoader, setIsLoader] = useState(true)

    useEffect(() => {   

        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response => {
            const array = [...characters, ...response.data.results]
            setCharacters(array)
            setCountPages(response.data.info.pages)
            setQtdCharacters(response.data.info.count)
            setIsLoader(false)
        })

    },[page])


    return (
  
       <>
            {
                isLoader && (
                    <Loader>
                        <img src={IconLoader}/>
                    </Loader>
                )
            }

            <ContainerApp>
                <HeaderApp>
                    <h1>Rick and Morty</h1>
                    <span>Nº de Personagens: {qtdCharacters}</span>
                </HeaderApp>
                <ContentCharacters>
                    <div>

                        {
                            characters && characters.map(({ image, name, species, gender }) => {
                                return (
                                <CardCharacter image={image} name={name} genre={gender} specie={species} />
                            )
                        }) 
                 
                     }
                     </div>
                    {
                        (!(page === countPages)) && <button onClick={() => setPage(page + 1)}>Carregar mais</button>
                    }
                
                 </ContentCharacters>
            </ContainerApp>
       </>
        
    )
}

export default Application
