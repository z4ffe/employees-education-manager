import {configureStore} from '@reduxjs/toolkit'
import educationSlice from './reducers/educationSlice'
import employeeSlice from './reducers/employeeSlice'

const store = configureStore({
   reducer: {
      employeeReducer: employeeSlice.reducer,
      educationReducer: educationSlice.reducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const employeeSliceActions = employeeSlice.actions
export const educationSliceActions = educationSlice.actions
export default store
