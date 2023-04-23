import {EditIcon} from '@chakra-ui/icons'
import {
	Button,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import React, {FC, useState} from 'react'
import {useAppDispatch} from '../lib/redux/hooks'
import {addNewEducation} from '../store/education/educationThunk'
import AddCancelBtn from './AddCancelBtn'

interface IProps {
	isOpen: boolean
	onClose: () => void
}

const ModalEducation: FC<IProps> = ({isOpen, onClose}): JSX.Element => {
	const dispatch = useAppDispatch()
	const [newEducation, setNewEducation] = useState('')

	const handleAddEducation = () => {
		dispatch(addNewEducation(newEducation))
		setNewEducation('')
		onClose()
	}

	const handleClose = () => {
		setNewEducation('')
		onClose()
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent h='190px'>
				<ModalHeader textAlign='center'>Add education</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<InputGroup>
						<InputLeftElement
							pointerEvents='none'
							children={<EditIcon color='gray.300' />}
						/>
						<Input type='text' placeholder='Enter education name...' value={newEducation}
								 onChange={(e) => setNewEducation(e.target.value)} />
					</InputGroup>
					<Flex gap='10px' justifyContent='center' marginTop='20px'>
						<AddCancelBtn disabled={!newEducation} click={handleAddEducation} type={'ADD'} />
						<AddCancelBtn click={handleClose} type={'CANCEL'} />
					</Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default ModalEducation
