import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterContactAction(state, action) {
      return action.payload;
    },
  },
});

export const { filterContactAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
