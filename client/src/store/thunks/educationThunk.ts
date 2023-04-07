import {createAsyncThunk} from '@reduxjs/toolkit'
import apiInstance from '../../lib/axios/apiInstance'

export const fetchAllEducations = createAsyncThunk('educationSlice/fetchAllEducations', async (order: string = 'ASC') => {
	try {
		const response = await apiInstance.get(`/education?order=${order}`)
		return response.data
	} catch (error) {
		console.log(error)
	}
})
