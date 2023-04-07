export const handleOrder = (order: string) => {
	if (order === 'ASC') {
		return 'DESC'
	} else {
		return 'ASC'
	}
}
