import React from 'react';

const PokemonIndexItem = ({ pokemon }) => (
  <li>
    <img src={pokemon.image_url} alt={pokemon.name}/>
    <span>{pokemon.name}</span>
  </li>
);

export default PokemonIndexItem;