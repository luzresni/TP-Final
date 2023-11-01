import { useState } from "react";

export function useCharacter(){
        const[allCharacter,setAllCharacter] = useState([]);
    const getAllCharacter = () =>{
        return fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())
        .then((data) => setAllCharacter(data.results));

    };    

    return{
        getAllCharacter,
        allCharacter,
    };
}




