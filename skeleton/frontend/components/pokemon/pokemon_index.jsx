import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;

    return (
      <div className="all-pokemon-container">
        {pokemon.map(mon => <PokemonIndexItem key={mon.id} pokemon={mon} />)}
      </div>
    );
  }
}

export default PokemonIndex;