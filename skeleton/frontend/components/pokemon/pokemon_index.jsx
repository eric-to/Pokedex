import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;

    return (
      <ul>
        {pokemon.map(mon => <PokemonIndexItem key={mon.id} pokemon={mon} />)}
      </ul>
    );
  }
}

export default PokemonIndex;