import {Button, Flex, Select, Text} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import {educationSliceActions} from '../store/store'


const Pagination: FC = () => {
	const {listLength, pages, currentPage} = useAppSelector(state => state.educationReducer)
	const dispatch = useAppDispatch()

	return (
		<Flex w='70%' border='1px solid #EDF2F7' borderTop='none' borderRadius='0 0 10px 10px' h='70px'
				alignItems='center' justifyContent='center'>
			<Flex alignItems='center'>
				<Text fontWeight='600'>Content on page: </Text>
				<Select marginLeft='10px' placeholder='' defaultValue='25' isDisabled={!listLength} w='200px'
						  onChange={(event) => dispatch(educationSliceActions.handleTake(event))}>
					{listLength === 0 ? <option value=''>No content</option> : null}
					{listLength > 0 ? <option value='5'>5</option> : null}
					{listLength > 5 ? <option value='10'>10</option> : null}
					{listLength > 10 ? <option value='15'>15</option> : null}
					{listLength > 15 ? <option value='25'>25</option> : null}
				</Select>
			</Flex>
			<Flex alignItems='center' marginLeft='10px'>
				<Text fontWeight='600'>{currentPage} to {pages}</Text>
				<Button marginLeft='10px' variant='outline' isDisabled={!listLength}
						  onClick={() => dispatch(educationSliceActions.prevPage())}>Prev</Button>
				<Button marginLeft='10px' variant='outline' isDisabled={!listLength}
						  onClick={() => dispatch(educationSliceActions.nextPage())}>Next</Button>
			</Flex>
		</Flex>
	)
}

export default Pagination
