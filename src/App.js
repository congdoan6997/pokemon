import React, { useEffect, useState } from 'react'
import { fetchPokemon } from './apis'
import './assets/styles/index.scss'
import Pagination from './components/Pagination'
import PokemonCard from './components/PokemonCard'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const fetchPokemonApi = async () => {
    const result = await fetchPokemon()
    setPokemons(result)
  }
  useEffect(() => {
    fetchPokemonApi()
  }, [])

  return (
    <div className='pokemon-app'>
      <header className='pokemon-app-header'>
        <h1>Pokemon</h1>
        <Pagination />
      </header>
      <main className='pokemon-app-main'>
        {(pokemons?.results || []).map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            type={pokemon?.type}
            imgUrl={pokemon.imgUrl}
          />
        ))}
      </main>
    </div>
  )
}

export default App
