import React from 'react'
import './index.scss'
const PokemonCard = ({ name, id, type, imgUrl }) => {
  return (
    <div className='pokemon-card' key={id}>
      <h2 className='pokemon-card-name'>{name}</h2>
      <h4 className='pokemon-card-class'>{type}</h4>
      <h3 className='pokemon-card-id'>#{id}</h3>
      <img className='pokemon-card-img' src={imgUrl} alt={name} />
    </div>
  )
}

export default PokemonCard
