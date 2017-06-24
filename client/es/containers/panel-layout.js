import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PokedexList from '../components/PokedexList';

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
    pokemonList: PropTypes.array,
    fetchPokemonList: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchPokemonList();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 Pokedex__box-detail"></div>
        <PokedexList pokemonList={this.props.pokemonList} />
      </div>
    );
  }
}
export default PanelLayout;
