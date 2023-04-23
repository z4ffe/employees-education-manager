import {createAsyncThunk} from '@reduxjs/toolkit'
import apiInstance from '../../lib/axios/apiInstance'
import {IEducation, IEducationList, IEducationState} from '../../types/interfaces/education'


export const fetchAllEducations = createAsyncThunk('educationSlice/fetchAllEducations', async (_, {getState}): Promise<IEducationList> => {
	try {
		const {educationReducer} = getState() as {educationReducer: IEducationState}
		const response = await apiInstance.get(`/education`, {
			params: {
				order: educationReducer.order,
				skip: educationReducer.skip,
				take: educationReducer.take,
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
})

export const addNewEducation = createAsyncThunk('education/addNewEducation', async (name: string, {getState}): Promise<IEducationList> => {
	try {
		const {educationReducer} = getState() as {educationReducer: IEducationState}
		const response = await apiInstance.post('/education', {
			title: name,
		}, {
			params: {
				order: educationReducer.order,
				skip: educationReducer.skip,
				take: educationReducer.take,
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
})

export const updateEducationById = createAsyncThunk('educationSlice/updateEducationById', async (data: IEducation, {getState}) => {
	try {
		const {educationReducer} = getState() as {educationReducer: IEducationState}
		const response = await apiInstance.patch('/education', {
			id: data.id,
			title: data.title,
		}, {
			params: {
				order: educationReducer.order,
				skip: educationReducer.skip,
				take: educationReducer.take,
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
})

export const deleteEducationById = createAsyncThunk('educationSlice/deleteEducationById', async (id: number[], {getState}): Promise<IEducationList> => {
	try {
		const {educationReducer} = getState() as {educationReducer: IEducationState}
		const response = await apiInstance.delete(`/education`, {
			data: {
				id: id,
			},
			params: {
				order: educationReducer.order,
				skip: educationReducer.skip,
				take: educationReducer.take,
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
})
