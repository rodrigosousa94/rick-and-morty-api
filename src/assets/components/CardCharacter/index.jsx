import { ContainerCard } from "./styles"

function CardCharacter({ image, name, genre, specie }){
    return (
        <ContainerCard>
           <div className="image">
                <img src={image} />
           </div>
           <div className="info">
                <h3>{name}</h3>
                <ul>
                    <li>Gènero: {genre}</li>
                    <li>Espécie: {specie}</li>
                </ul>
           </div>
        </ContainerCard>
       
    )
}

export default CardCharacter