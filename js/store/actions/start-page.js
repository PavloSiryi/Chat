import {NAME} from '../../constants/actions';

export const handleNameChange = username => ({
  type: NAME,
  payload: username
});
