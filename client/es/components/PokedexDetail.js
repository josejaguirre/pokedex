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
    return (
      <div className="col-md-6 Pokedex__box-detail">
        {pokemon && pokemon.id && <img src={`https:\/\/raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />}
      </div>
    );
  }
}
export default PokedexDetail;
