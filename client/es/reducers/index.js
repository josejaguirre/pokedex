import { combineReducers } from 'redux';
import pokemon from './pokemon';

const app = combineReducers({
  pokemon,
});

export default app;
