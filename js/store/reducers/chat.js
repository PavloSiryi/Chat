import {ADD_MESSAGE, SORT_MESSAGES} from '../../constants/actions';
import {orderBy} from 'lodash';

export default {
  [ADD_MESSAGE]: (state = [], { payload }) => {
    return [
      ...state,
      {
        id: state.length + 1,
        date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
        ...payload
      }
    ];
  },
  [SORT_MESSAGES]: (state = [], { payload }) => {
    return orderBy(state, 'date', payload);
  }
};
