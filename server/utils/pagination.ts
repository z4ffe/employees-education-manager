interface IPageCalc {
	pages: number
	currentPage: number
	overPage: boolean
}

const pagesCalc = (list: any, skip: any, take: any): IPageCalc => {
	const listLength = list[1]
	const pages = Math.ceil(listLength / take)
	const currentPage = pages - Math.ceil((listLength - skip) / take) + 1

	if (currentPage > pages) {
		return {pages, currentPage: currentPage - 1, overPage: true}
	}

	return {pages, currentPage, overPage: false}
}

export default pagesCalc