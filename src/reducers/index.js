import { combineReducers } from 'redux';

import CountReducer from './count-reducer';
import Reducer from './reducer';

const rootReducer = combineReducers({
  count: CountReducer,
  books: Reducer,
});

export default rootReducer;
