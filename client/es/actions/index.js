import request from 'superagent';

export const FETCH_POKEMON_LIST_FULFILLED = 'FETCH_POKEMON_LIST_FULFILLED';
export const FETCH_POKEMON_LIST_PENDING = 'FETCH_POKEMON_LIST_PENDING';
export const FETCH_POKEMON_LIST_REJECTED = 'FETCH_POKEMON_LIST_REJECTED';

export const FETCH_POKEMON_FULFILLED = 'FETCH_POKEMON_FULFILLED';
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING';
export const FETCH_POKEMON_REJECTED = 'FETCH_POKEMON_REJECTED';

const fetchPokemonList = () => {
  return {
    type: 'FETCH_POKEMON_LIST',
    payload: request.get('http://pokeapi.co/api/v2/pokedex/2'),
  };
};

const fetchPokemon = (id) => {
  return {
    type: 'FETCH_POKEMON',
    payload: request.get(`http://pokeapi.co/api/v2/pokemon/${id}`),
  };
};

export {
  fetchPokemonList,
  fetchPokemon,
};
