import { FETCH_POKEMON_LIST_FULFILLED } from '../actions';

const initialState = {
  pokemonList: [],
};

const pokemon = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_POKEMON_LIST_FULFILLED:
      const { pokemon_entries } = action.payload.body;
      console.log(pokemon_entries);
      return {
        ...state,
        pokemonList: pokemon_entries,
      };
  }
  return state;
};

export default pokemon;
