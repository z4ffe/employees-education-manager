import {Divider, Flex, Heading} from '@chakra-ui/react'
import React, {FC} from 'react'
import Education from '../components/Education'
import Employee from '../components/Employee'

const Home: FC = () => {
	return (
		<Flex flexDir='column' alignItems='center' marginTop='25px' w='100%' marginBottom='55px'>
			<Heading fontSize='30px'>Employees Education Manager</Heading>
			<Divider w='70%' h='2px' marginTop='15px' />
			<Employee />
			<Education />
		</Flex>
	)
}

export default Home
