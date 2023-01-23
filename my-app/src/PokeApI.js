import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PokeAPI(){
const [notapi,api] = useState(null)
const [pokemonName,pokemonNameFunc] = useState("")
// useEffect(()=>{
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then(res=>{console.log(res.data);
//     api(res.data)})
    
//     }, []);
function handleClick(e){
    e.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res=>{console.log(res.data);
    api(res.data)})
    }
return (<div>
    <form onSubmit={handleClick}>
        <input type="text" value={pokemonName} onChange={(e)=>pokemonNameFunc(e.target.value)}></input>
        <input type="submit"></input>
    </form>
    {notapi && <><p>{notapi.name}</p>
    <img src={notapi.sprites.front_shiny}></img>
    <h1>{notapi.abilities[0].ability.name}</h1><h1>{notapi.abilities[1].ability.name}</h1></>
    }
    </div>);
}

