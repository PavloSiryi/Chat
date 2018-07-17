import {NAME} from '../../constants/actions';

export default {
  [NAME]: (state = '', { payload }) => {
    return payload;
  }
};
