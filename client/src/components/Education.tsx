import {Button, Flex, Heading} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import {fetchAllEducations} from '../store/thunks/educationThunk'
import {handleOrder} from '../utils/handleOrder'
import EducationElement from './EducationElement'

const Education = () => {
	const {educationList, rejected} = useAppSelector(state => state.educationReducer)
	const dispatch = useAppDispatch()
	const [order, setOrder] = useState('ASC')

	useEffect(() => {
		dispatch(fetchAllEducations(order))
	}, [order])

	return (
		<Flex flexDir='column'>
			<Heading>Образование. Выбор и редактирование</Heading>
			<Flex gap='10px'>
				<Button w='130px' h='130px' backgroundColor='blue'>Редактировать</Button>
				<Button w='130px' h='130px' backgroundColor='grey'>Добавить запись</Button>
				<Button w='130px' h='130px' backgroundColor='red'>Удалить запись</Button>
			</Flex>
			<Flex flexDir='column'>
				<Button onClick={() => setOrder(handleOrder(order))}></Button>
				{educationList ? educationList.map(el => {
					return (<EducationElement key={el.id} id={el.id} title={el.title} />)
				}) : null}
			</Flex>
		</Flex>
	)
}

export default Education
