interface IPageCalc {
	pages: number
	currentPage: number
}

const pagesCalc = (list: any, skip: any, take: any): IPageCalc => {
	const listLength = list[1]
	const pages = Math.ceil(listLength / take)
	const currentPage = pages - Math.ceil((listLength - skip) / take) + 1

	return {
		pages,
		currentPage,
	}
}

export default pagesCalc