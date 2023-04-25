import {IEducation} from './education'

export interface IEmployee {
	id: number
	first_name: string
	middle_name: string
	last_name: string
	created_at: Date
	updated_at: Date
	educationId: IEducation
}