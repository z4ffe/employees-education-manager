import {Flex} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useAppSelector} from '../lib/redux/hooks'

const Employee: FC = () => {
	const employeeStore = useAppSelector(state => state.employeeReducer)

	return (
		<Flex>

		</Flex>
	)
}

export default Employee
