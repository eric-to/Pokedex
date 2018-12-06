export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
import * as APIUtil from '../util/api_util';

// ACTION CREATOR
export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

// THUNK ACTION CREATOR - all in one step
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

window.requestAllPokemon = requestAllPokemon;