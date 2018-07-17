import {ADD_MESSAGE, SORT_MESSAGES} from '../../constants/actions';

export const addMessage = data => ({
  type: ADD_MESSAGE,
  payload: data
});

export const handleMessagesSort = sortType => ({
  type: SORT_MESSAGES,
  payload: sortType
});
