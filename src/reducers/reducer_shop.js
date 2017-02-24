import { FETCH_SHOP, FETCH_ALL_LISTINGS, FETCH_SINGLE_LISTING } from '../actions/index';

const INITIAL_STATE = { };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_SHOP:
      return {...state, shop: action.payload};
    case FETCH_ALL_LISTINGS:
      return {...state, listings: action.payload};
    case FETCH_SINGLE_LISTING:
      return {...state, listing: action.payload};
    default:
      return state
  }
}
