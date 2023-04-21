import {Divider, Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import Education from '../components/Education'
import Employee from '../components/Employee'

const Home = () => {
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
