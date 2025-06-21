import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openCollapse: null,   
};

const collapseSlice = createSlice({
  name: 'collapse',
  initialState,
  reducers: {
    toggleCollapse: (state, action) => {
      state.openCollapse = state.openCollapse === action.payload ? null : action.payload;
    },
  },
});

export const { toggleCollapse } = collapseSlice.actions;
export default collapseSlice.reducer;
