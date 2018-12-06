import React from 'react';

const PokemonIndexItem = ({ pokemon }) => (
  <div className="pokemon-entry">
    <img src={pokemon.image_url} alt={pokemon.name}/>
    <div>{pokemon.name}</div>
  </div>
);

export default PokemonIndexItem;