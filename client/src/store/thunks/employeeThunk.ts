import {createAsyncThunk} from '@reduxjs/toolkit'
import apiInstance from '../../lib/axios/apiInstance'

export const fetchAllEmployees = createAsyncThunk('employeeSlice/fetchAllEmployees', async () => {
	try {
		const response = await apiInstance.get('/employee')
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
})
