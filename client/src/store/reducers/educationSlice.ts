import {createSlice} from '@reduxjs/toolkit'

interface IEducationState {
   educationList: []
   loading: boolean
}

const initialState: IEducationState = {
   educationList: [],
   loading: false
}

const educationSlice = createSlice({
   name: 'educationSlice',
   initialState: initialState,
   reducers: {},
   extraReducers: builder => {}
})

export default educationSlice
