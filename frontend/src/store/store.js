import { configureStore } from '@reduxjs/toolkit';
import locationReducer from "../slice/locationSlice";
import collapsableReducer from "../slice/collapseSlice"

const store = configureStore({
  reducer: {
    location: locationReducer,
    collapse:collapsableReducer
  },
  
});

export default store;