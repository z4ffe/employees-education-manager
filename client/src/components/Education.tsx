import {Flex, Heading} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import ControlPanelEducation from '../shared/ControlPanelEducation'
import EducationTable from '../shared/EducationTable'
import Pagination from '../shared/Pagination'
import {deleteEducationById, fetchAllEducations} from '../store/thunks/educationThunk'

const Education = () => {
	const {educationList, listLength, rejected} = useAppSelector(state => state.educationReducer)
	const dispatch = useAppDispatch()

	const [order, setOrder] = useState('ASC')
	const [skip, setSkip] = useState(0)
	const [take, setTake] = useState(10)
	const [active, setActive] = useState<number[]>([])

	//

	const handleSkip = (offset: number) => setSkip(offset)
	const handleTake = (page: number) => setTake(page)
	const handleActive = (id: number) => {
		if (active.includes(id)) {
			const modifiedActive = active.filter(el => el !== id)
			return setActive(modifiedActive)
		}
		setActive(prevState => [...prevState, id])
	}
	const handleDelete = async () => {
		if (active.length) {
			await dispatch(deleteEducationById(active))
			setActive([])
			const data = {order, skip, take}
			await dispatch(fetchAllEducations(data))
		}
		return
	}

	//

	useEffect(() => {
		const data = {order, skip, take}
		dispatch(fetchAllEducations(data))
	}, [order, skip, take])

	return (
		<Flex flexDir='column' w='100%' alignItems='center'>
			<Heading marginY='20px' fontSize='25px' textAlign='center'>Образование. Выбор и редактирование</Heading>
			<ControlPanelEducation handleDelete={handleDelete} />
			<EducationTable order={order} active={active} handleActive={handleActive} setOrder={setOrder} />
			<Pagination handleTake={handleTake} />
		</Flex>
	)
}

export default Education
