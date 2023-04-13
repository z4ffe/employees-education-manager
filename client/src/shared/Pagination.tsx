import {Button, Flex, Select, Text} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useAppSelector} from '../lib/redux/hooks'

interface IProps {
	handleTake: (page: number) => void
}

const Pagination: FC<IProps> = ({handleTake}): JSX.Element => {
	const {listLength} = useAppSelector(state => state.educationReducer)

	return (
		<Flex w='70%' border='1px solid #EDF2F7' borderTop='none' borderRadius='0 0 10px 10px' h='70px'
				alignItems='center' justifyContent='center'>
			<Flex>
				<Text>Строк на странице: </Text>
				<Select placeholder='' isDisabled={!listLength} onChange={(e) => handleTake(+e.target.value)} w='200px'>
					{listLength === 0 ? <option value=''>Нет записей</option> : null}
					{listLength > 0 ? <option value='5'>5</option> : null}
					{listLength > 5 ? <option value='25'>25</option> : null}
					{listLength > 25 ? <option value='50'>50</option> : null}
					{listLength > 50 ? <option value='100'>100</option> : null}
				</Select>
			</Flex>
			<Flex>
				<Text>1 to 1</Text>
				<Button>Prev</Button>
				<Button>Next</Button>
			</Flex>
		</Flex>
	)
}

export default Pagination
