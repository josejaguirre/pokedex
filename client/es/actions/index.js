import request from 'superagent';

export const FETCH_POKEMON_LIST_FULFILLED = 'FETCH_POKEMON_LIST_FULFILLED';
export const FETCH_POKEMON_LIST_PENDING = 'FETCH_POKEMON_LIST_PENDING';
export const FETCH_POKEMON_LIST_REJECTED = 'FETCH_POKEMON_LIST_REJECTED';


const fetchPokemonList = () => {
  return {
    type: 'FETCH_POKEMON_LIST',
    payload: request.get('http://pokeapi.co/api/v2/pokedex/2'),
  };
};

export {
  fetchPokemonList,
};
