import {createSlice} from '@reduxjs/toolkit'
import {addNewEducation, fetchAllEducations} from '../thunks/educationThunk'

export interface IEducationElem {
	id: number
	title: string
}

interface IEducationState {
	educationList: IEducationElem[]
	listLength: number
	loading: boolean
	rejected: boolean
}

const initialState: IEducationState = {
	educationList: [],
	listLength: 0,
	loading: false,
	rejected: false,
}

const educationSlice = createSlice({
	name: 'educationSlice',
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchAllEducations.pending, (state) => {
			state.loading = true
		})
		builder.addCase(fetchAllEducations.fulfilled, (state, action) => {
			state.loading = false
			state.educationList = action.payload[0]
			state.listLength = action.payload[1]
		})
		builder.addCase(fetchAllEducations.rejected, (state) => {
			state.loading = false
			state.rejected = true
		})
		builder.addCase(addNewEducation.pending, (state) => {
			state.loading = true
		})
		builder.addCase(addNewEducation.fulfilled, (state, action) => {
			state.loading = false
			state.educationList = action.payload[0]
			state.listLength = action.payload[1]
		})
		builder.addCase(addNewEducation.rejected, (state) => {
			state.loading = false
			state.rejected = true
		})
	},
})

export default educationSlice
