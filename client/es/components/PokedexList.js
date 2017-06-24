import React, { Component } from 'react';
import PropTypes from 'prop-types';

import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchPokemon,
} from '../actions';

@connect(
  state => ({ }),
  dispatch => bindActionCreators({
    fetchPokemon,
  }, dispatch),
)

class PokedexList extends Component {
  static PropTypes = {
    pokemonList: PropTypes.array,
    fetchPokemon: PropTypes.func,
  };

  @autobind
  selectPokemonHandle(e, id, name) {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(name);
      speech.lang = 'en-US';
      window.speechSynthesis.speak(speech);
    }

    this.props.fetchPokemon(id);
  }
  render() {
    const { pokemonList } = this.props;
    return (
      <div className="col-md-6 Pokedex__box-list">
        {pokemonList && pokemonList.map((pokemon, i) => {
          return (<div key={pokemon.pokemon_species.name} onClick={(e) => this.selectPokemonHandle(e, i + 1, pokemon.pokemon_species.name)} className="Pokedex__box-item">
            <img src={`https:\/\/raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} />
            <span>{pokemon.pokemon_species.name}</span>
        </div>);
        })}
      </div>
    );
  }
}
export default PokedexList;
