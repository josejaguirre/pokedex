import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PokedexList from '../components/PokedexList';
import PokedexDetail from '../components/PokedexDetail';

import {
  fetchPokemonList,
} from '../actions';

@connect(
  state => ({
    pokemonList: state.pokemon.pokemonList,
  }),
  dispatch => bindActionCreators({
    fetchPokemonList,
  }, dispatch),
)

class PanelLayout extends Component {
  static PropTypes = {
    pokemon: PropTypes.object,
    pokemonList: PropTypes.array,
    fetchPokemonList: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchPokemonList();
  }

  render() {
    return (
      <div className="row">
        <PokedexDetail pokemon={this.props.pokemon} />
        <PokedexList pokemonList={this.props.pokemonList} />
      </div>
    );
  }
}
export default PanelLayout;
