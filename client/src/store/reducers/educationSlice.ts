import {createSlice} from '@reduxjs/toolkit'
import {addNewEducation, fetchAllEducations} from '../thunks/educationThunk'

export interface IEducationElem {
	id: number
	title: string
}

interface IEducationState {
	educationList: IEducationElem[]
	listLength: number
	reversed: boolean
	pages: number
	currentPage: number
	order: 'ASC' | 'DESC'
	skip: number
	take: number
	loading: boolean
	rejected: boolean
}

const initialState: IEducationState = {
	educationList: [],
	listLength: 0,
	pages: 1,
	currentPage: 1,
	order: 'ASC',
	skip: 0,
	take: 5,
	reversed: true,
	loading: false,
	rejected: false,
}

const educationSlice = createSlice({
	name: 'educationSlice',
	initialState: initialState,
	reducers: {
		handleOrder: (state) => {
			state.order = state.order === 'ASC' ? 'DESC' : 'ASC'
		},
		handleTake: (state, action) => {
			state.take = action.payload
		},
		nextPage: (state) => {
			if (state.currentPage < state.pages) {
				state.currentPage++
				state.skip = state.skip + state.take
			}
		},
		prevPage: (state) => {
			if (state.currentPage === 1) return
			state.currentPage--
			state.skip = state.skip - state.take
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchAllEducations.pending, (state) => {
			state.reversed = false
			state.loading = true
		})
		builder.addCase(fetchAllEducations.fulfilled, (state, action) => {
			state.reversed = false
			state.loading = false
			state.educationList = action.payload.educationList[0]
			state.listLength = action.payload.educationList[1]
			state.pages = action.payload.pagination.pages
			state.currentPage = action.payload.pagination.currentPage
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
