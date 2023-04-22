export interface IEducation {
	id: number
	title: string
}

export interface IEducationList {
	educationList: [IEducation[], number]
	pagination: {
		pages: number
		currentPage: number
		overPage: boolean
	}
}


export interface IEducationState {
	educationList: IEducation[]
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