import React, { Component, PropTypes } from 'react';

class PokedexList extends Component {
  static PropTypes = {
    pokemonList: PropTypes.array,
  };

  render() {
    const { pokemonList } = this.props;
    return (
      <div className="col-md-6 Pokedex__box-list">
        {pokemonList && pokemonList.map((pokemon, i) => {
          return (<div className="Pokedex__box-item" key={pokemon.name}>
            <img src={`https:\/\/raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} />
            <span>{pokemon.pokemon_species.name}</span>
        </div>);
        })}
      </div>
    );
  }
}
export default PokedexList;
