import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity(state, action) {
      if (state.items.some(item => item.name.includes(action.payload.name))) {
        return alert(`${action.payload.name} is already in Your list`);
      }
      state.items.push(action.payload);
    },
    deleteCity(state, action) {
      state.items = state.items.filter(city => city.id !== action.payload);
    },
  },
});

export const { addCity, deleteCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;
