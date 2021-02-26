import { combineReducers } from 'redux';
import statistics from './statistics';
import histories from "./histories";

const reducers = combineReducers({
  statistics,
  histories
});

export default reducers;