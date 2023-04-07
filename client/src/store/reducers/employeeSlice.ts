import {createSlice} from '@reduxjs/toolkit'

interface IEmployeeState {
   educationList: []
   loading: boolean
}

const initialState: IEmployeeState = {
   educationList: [],
   loading: false
}

const educationSlice = createSlice({
   name: 'employeeSlice',
   initialState: initialState,
   reducers: {},
   extraReducers: builder => {}
})

export default educationSlice
