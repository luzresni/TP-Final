import { useEffect } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import "./character.css"
export function Character() {
 //llaves
//useEffect y useState Hoooks
    const {getAllCharacter, allCharacter} = useCharacter();
    useEffect(()=>{
       getAllCharacter();
  
},[]);

 return (
    //parentesis
    <>
        <ul className="grilla">

            {allCharacter.map((item, index) =>(
            <li key={index}>
            <img src= {item.image} alt="" />
            <h1>{item.name}</h1>
            <p>{item.status}</p>
            
            
        </li>
        ))}
        </ul>

    </>
 );
}