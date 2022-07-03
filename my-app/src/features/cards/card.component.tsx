import {FC} from "react";
import {Character} from "../../types/character.types";

export type CardProps = {
    character: Character
}

const Card:FC<CardProps> = ({character}: CardProps) => {
   return (

    <div>
        <p>{character.name}</p>
        <img src={character.image ? character.image : undefined} alt={character.image ? character.name : "Doesn't have alt"}  />
        <p>{character.followers > 0 ? `${character.followers} followers` : "No followers yet"}</p>
    </div>)
}

export default Card;