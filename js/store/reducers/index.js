import { combineReducers } from 'redux';
import start from './start-page';
import chat from './chat';

function createReducer(handlers) {
  return (state = null, action) => {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export default combineReducers({
  username: createReducer(start),
  messages: createReducer(chat)
});
