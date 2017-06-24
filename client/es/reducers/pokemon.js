import {
  FETCH_POKEMON_LIST_FULFILLED,
  FETCH_POKEMON_FULFILLED,
} from '../actions';

const initialState = {
  pokemonList: [],
  pokemon: {},
};

const pokemon = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_POKEMON_LIST_FULFILLED: {
      const { pokemon_entries } = action.payload.body;

      return {
        ...state,
        pokemonList: pokemon_entries,
      };
    }
    case FETCH_POKEMON_FULFILLED: {
      const pokemonItem = action.payload.body;

      return {
        ...state,
        pokemon: pokemonItem,
      };
    }
    default:
      return state;
  }
};

export default pokemon;
