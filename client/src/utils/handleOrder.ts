export const handleOrder = (order: string): string => {
	if (order === 'ASC') {
		return 'DESC'
	} else {
		return 'ASC'
	}
}
