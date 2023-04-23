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
			<ModalContent h='210px'>
				<ModalHeader textAlign='center'>Добавить образование</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<InputGroup>
						<InputLeftElement
							pointerEvents='none'
							children={<EditIcon color='gray.300' />}
						/>
						<Input type='text' placeholder='Введите название образования' value={newEducation}
								 onChange={(e) => setNewEducation(e.target.value)} />
					</InputGroup>
					<Flex gap='10px' justifyContent='center' marginTop='20px'>
						<Button backgroundColor='#287B30' color='white' fontSize='14px'
								  isDisabled={!newEducation} onClick={handleAddEducation}>Добавить</Button>
						<Button backgroundColor='#D62C29' color='white' fontSize='14px' onClick={handleClose}>Отмена</Button>
					</Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default ModalEducation
