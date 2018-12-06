import React from 'react';

const PokemonIndexItem = ({ pokemon }) => (
  <div>
    <img src={pokemon.image_url} alt={pokemon.name}/>
    <span>{pokemon.name}</span>
  </div>
);

export default PokemonIndexItem;