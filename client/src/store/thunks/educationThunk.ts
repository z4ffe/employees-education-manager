import {createAsyncThunk} from '@reduxjs/toolkit'
import apiInstance from '../../lib/axios/apiInstance'

export const fetchAllEducations = createAsyncThunk('educationSlice/fetchAllEducations', async (data: any) => {
	try {
		const {order, skip, take} = data
		const response = await apiInstance.get(`/education?order=${order}&skip=${skip}&take=${take}`)
		return response.data
	} catch (error) {
		console.log(error)
	}
})

export const deleteEducationById = createAsyncThunk('educationSlice/deleteEducationById', async (id: number | null) => {
	try {
		if (id === null) {
			return
		}
		const response = await apiInstance.delete(`/education`, {
			data: {
				id: id,
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
})
