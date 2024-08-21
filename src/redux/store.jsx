import { configureStore } from '@reduxjs/toolkit';
import employeeSlice from '../redux/slices/employeeSlice';

export const store = configureStore({
  reducer: {
    employees: employeeSlice,
  },
});
