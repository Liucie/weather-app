import { createAction } from '@reduxjs/toolkit';

const addCity = createAction('cities/add');

const deleteCity = createAction('cities/remove');

export const actions = { addCity, deleteCity };
