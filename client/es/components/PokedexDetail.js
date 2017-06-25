import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchPokemon,
} from '../actions';

@connect(
  state => ({
    pokemon: state.pokemon.pokemon,
  }),
  dispatch => bindActionCreators({
    fetchPokemon,
  }, dispatch),
)
class PokedexDetail extends Component {
  static PropTypes = {
    pokemon: PropTypes.object,
    fetchPokemon: PropTypes.func,
  };

  componentDidMount() {
    if (this.props['0'].match && this.props['0'].match.params && this.props['0'].match.params.id) {
      this.props.fetchPokemon(this.props['0'].match.params.id);
    }
  }

  render() {
    const { pokemon } = this.props;

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
