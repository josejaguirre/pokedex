import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PokedexList from '../components/PokedexList';
import PokedexDetail from '../components/PokedexDetail';

import {
  fetchPokemonList,
  fetchPokemon,
} from '../actions';

@connect(
  state => ({
    pokemonList: state.pokemon.pokemonList,
  }),
  dispatch => bindActionCreators({
    fetchPokemonList,
    fetchPokemon,
  }, dispatch),
)

class PanelLayout extends Component {
  static PropTypes = {
    pokemon: PropTypes.object,
    pokemonList: PropTypes.array,
    fetchPokemonList: PropTypes.func,
    fetchPokemon: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchPokemonList();
  }

  render() {
    if (this.props.match.params.id) {
      console.log('entro aqi');
      this.props.fetchPokemon(this.props.match.params.id);
    }
    return (
      <div className="row">
        <PokedexDetail pokemon={this.props.pokemon} />
        <PokedexList pokemonList={this.props.pokemonList} />
      </div>
    );
  }
}
export default PanelLayout;
