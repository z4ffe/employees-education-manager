import {Button, Flex, Heading} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import EducationElement from '../shared/EducationElement'
import Pagination from '../shared/Pagination'
import {deleteEducationById, fetchAllEducations} from '../store/thunks/educationThunk'
import {handleOrder} from '../utils/handleOrder'

const Education = () => {
	const {educationList, listLength, rejected} = useAppSelector(state => state.educationReducer)
	const dispatch = useAppDispatch()

	const [order, setOrder] = useState('ASC')
	const [skip, setSkip] = useState(0)
	const [take, setTake] = useState(10)
	const [active, setActive] = useState<number | null>(null)

	const handleSkip = (offset: number) => setSkip(offset)
	const handleTake = (page: number) => setTake(page)
	const handleActive = (id: number) => {
		if (id === active) {
			return setActive(null)
		}
		setActive(id)
	}
	const handleDelete = async () => {
		await dispatch(deleteEducationById(active))
		setActive(null)
		const data = {order, skip, take}
		await dispatch(fetchAllEducations(data))
	}

	useEffect(() => {
		const data = {order, skip, take}
		dispatch(fetchAllEducations(data))
	}, [order, skip, take])

	return (
		<Flex flexDir='column'>
			<Heading>Образование. Выбор и редактирование</Heading>
			<Flex gap='10px'>
				<Button w='130px' h='130px' backgroundColor='blue'>Редактировать</Button>
				<Button w='130px' h='130px' backgroundColor='grey'>Добавить запись</Button>
				<Button w='130px' h='130px' backgroundColor='red' onClick={handleDelete}>Удалить
					запись</Button>
			</Flex>
			<Flex flexDir='column'>
				<Button onClick={() => setOrder(handleOrder(order))}></Button>
				{educationList ? educationList.map(el => {
					return (<EducationElement key={el.id} id={el.id} title={el.title} active={active}
													  handleActive={handleActive} />)
				}) : null}
			</Flex>
			<Pagination handleTake={handleTake} />
		</Flex>
	)
}

export default Education
