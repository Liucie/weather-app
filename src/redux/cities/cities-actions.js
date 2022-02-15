import { createAction } from '@reduxjs/toolkit';

const addCityCard = createAction('cities/add');

const deleteCityCard = createAction('cities/delete');

export default { addCityCard, deleteCityCard };
