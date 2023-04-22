export interface IEducation {
	id: number
	title: string
}

export interface IEducationList {
	educationList: [IEducation[], number]
	pagination: {
		pages: number
		currentPage: number
	}
}