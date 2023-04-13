import {Divider, Flex, Heading} from '@chakra-ui/react'
import React, {useEffect} from 'react'
import Education from '../components/Education'
import Employee from '../components/Employee'
import {useAppDispatch} from '../lib/redux/hooks'
import {fetchAllEducations} from '../store/thunks/educationThunk'
import {fetchAllEmployees} from '../store/thunks/employeeThunk'

const Home = () => {
	const dispatch = useAppDispatch()

	const initEducationParams = {
		order: 'ASC',
		skip: 0,
		take: 10,
	}

	useEffect(() => {
		dispatch(fetchAllEmployees())
		dispatch(fetchAllEducations(initEducationParams))
	}, [])

	return (
		<Flex flexDir='column' alignItems='center' marginTop='25px'>
			<Heading fontSize='30px'>Employees & Education</Heading>
			<Divider w='70%' h='2px' marginTop='15px' />
			<Employee />
			<Education />
		</Flex>
	)
}

export default Home
