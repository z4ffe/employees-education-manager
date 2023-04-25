import {Flex, Heading, ModalBody, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'
import React, {Dispatch, FC, SetStateAction} from 'react'
import {useAppDispatch} from '../lib/redux/hooks'
import {deleteEducationById, fetchAllEducations} from '../store/education/educationThunk'
import {IEmployee} from '../types/interfaces/employee'
import AddCancelBtn from './AddCancelBtn'

interface IProps {
	active: number[]
	setActive: Dispatch<SetStateAction<number[]>>
	educationUsageList: IEmployee[] | []
	setEducationUsageList: Dispatch<SetStateAction<[] | IEmployee[]>>
	onClose: () => void
}

const ModalDeleteEducation: FC<IProps> = ({active, educationUsageList, setEducationUsageList, setActive, onClose}) => {
	const dispatch = useAppDispatch()

	const handleDelete = async () => {
		await dispatch(deleteEducationById(active))
		setActive([])
		setEducationUsageList([])
		onClose()
		await dispatch(fetchAllEducations())
	}

	return (
		<ModalBody>
			<Flex flexDir='column'>
				<Heading textAlign='center' fontSize='14px'>Selected educations is using by employees below</Heading>
				<TableContainer marginY='20px'>
					<Table variant='simple'>
						<Thead>
							<Tr>
								<Th>First name</Th>
								<Th>Middle Name</Th>
								<Th>Last Name</Th>
							</Tr>
						</Thead>
						<Tbody>
							{educationUsageList.map((el, idx) => {
								return (
									<Tr key={idx}>
										<Td>{el.first_name}</Td>
										<Td>{el.middle_name}</Td>
										<Td>{el.last_name}</Td>
									</Tr>)
							})}
						</Tbody>
					</Table>
				</TableContainer>
				<Heading textAlign='center' fontSize='12px' color='#D62C29'>Do you want to delete this educations?</Heading>
			</Flex>
			<Flex gap='10px' justifyContent='center' marginTop='20px'>
				<AddCancelBtn click={handleDelete} type={'DELETE'} />
				<AddCancelBtn click={onClose} type={'CANCEL'} />
			</Flex>
		</ModalBody>
	)
}

export default ModalDeleteEducation