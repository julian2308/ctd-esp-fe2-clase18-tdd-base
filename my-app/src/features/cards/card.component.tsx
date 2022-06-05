import {FC} from "react";
import {Character} from "../../types/character.types";

export type CardProps = {
    character: Character
}

const Card:FC<CardProps> = ({character}: CardProps) => {
   return <div>
        <h3>{character.name}</h3>
       { character.image && <img src={character.name} alt={character.name}/>}
       { character.followers > 0 && <div>{character.followers} followers</div>}
       { character.followers === 0 && <div>No followers yet</div>}
    </div>
}

export default Card;