import { createReducer } from '@reduxjs/toolkit';
import actions from './cities-actions';

const items = createReducer([], {
  [actions.addCityCard]: (state, { payload }) => {
    if (state.some(item => item.name.includes(payload.name))) {
      return alert(`${payload.name} is already in Your list`);
    }
    return [...state, payload];
  },
  [actions.deleteCityCard]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default items;
