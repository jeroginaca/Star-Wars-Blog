import React, { useEffect, useState} from "react";
import CardCharacter from "./CardCharacter";
import getCharacters from "../../services/getCharacters";

const CharacterList = () =>{
    const [characters, setCharacters ] = useState([])
    
    useEffect(() => {
        getCharacters().then((resp) => setCharacters(resp) )
    }, [])

    return(
        <div>
            {characters.map((character, index) => <CardCharacter people={character} key={index}/>)}
        </div>
    )
}