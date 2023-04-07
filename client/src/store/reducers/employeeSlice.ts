import {createSlice} from '@reduxjs/toolkit'
import {fetchAllEmployees} from '../thunks/employeeThunk'

interface IEmployeeState {
   educationList: []
   loading: boolean
   rejected: boolean
}

const initialState: IEmployeeState = {
   educationList: [],
   loading: false,
   rejected: false
}

const educationSlice = createSlice({
   name: 'employeeSlice',
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchAllEmployees.pending, (state) => {
         state.loading = true
      })
      builder.addCase(fetchAllEmployees.fulfilled, (state, action) => {
         state.educationList = action.payload
         state.loading = false
      })
      builder.addCase(fetchAllEmployees.rejected, (state, action) => {
         state.loading = false
         state.rejected = true
      })
   }
})

export default educationSlice
