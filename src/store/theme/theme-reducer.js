import { SET_THEME } from './theme-actions';

// { type, payload } - деструктуризация action
// action.type, action.payload
export const themeReducer = (state = 'light', { type, payload }) => {
  switch (type) {
    case SET_THEME: {
      return payload;
    }
    default: {
      return state;
    }
  }
};
