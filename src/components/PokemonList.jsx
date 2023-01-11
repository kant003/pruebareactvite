import { useEffect, useState } from "react"

function PokemonList({amount=6}){
    const [pokemons, setPokemons] = useState([])
    useEffect(
         ()=>{
            fetch('https://pokeapi.co/api/v2/pokemon?limit='+amount)
            .then((response) => response.json())
            .then((data) => setPokemons(data.results));
        },
        []
    )

    return <>
        <h1>Lista de pokemons:</h1>
        <ul>
            {
                pokemons.map( pokemon => {
                    return <li key={pokemon.name}>{pokemon.name}</li>
                })
            }
        </ul>
    </>
}
export default PokemonList