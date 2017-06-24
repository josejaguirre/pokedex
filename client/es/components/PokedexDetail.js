import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

@connect(
  state => ({
    pokemon: state.pokemon.pokemon,
  }),
)
class PokedexDetail extends Component {
  static PropTypes = {
    pokemon: PropTypes.object,
  };

  render() {
    const { pokemon } = this.props;
    if (pokemon.types) {
      console.log(pokemon.types);
      pokemon.types.map((type) => {
        console.log(type.type.name);
      });
    }
    return (
      <div className="col-md-6 Pokedex__box-detail">
        {pokemon && pokemon.id && <img className="Pokedex__box-detail-img" src={`https:\/\/raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />}
        {pokemon && pokemon.name && <div className="Pokedex__box-detail-name">{pokemon.name}</div>}
        <ul>
          {pokemon && pokemon.types && pokemon.types.map((type) => {
            return (<li className="Pokedex__box-detail-types" key={`${type.slot}-${type.name}`}>{type.type.name}</li>);
          })}
        </ul>
      </div>
    );
  }
}
export default PokedexDetail;
