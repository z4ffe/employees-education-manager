import {EditIcon} from '@chakra-ui/icons'
import {Flex, Input, InputGroup, InputLeftElement, ModalBody} from '@chakra-ui/react'
import React, {FC, useState} from 'react'
import {useAppDispatch} from '../lib/redux/hooks'
import {addNewEducation} from '../store/education/educationThunk'
import AddCancelBtn from './AddCancelBtn'

interface IProps {
	isOpen: boolean
	onClose: () => void
}

const ModalAddEducation: FC<IProps> = ({isOpen, onClose}): JSX.Element => {
	const dispatch = useAppDispatch()

	const [newEducation, setNewEducation] = useState('')

	const handleAddEducation = async () => {
		await dispatch(addNewEducation(newEducation))
		setNewEducation('')
		onClose()
	}

	const handleClose = () => {
		setNewEducation('')
		onClose()
	}

	return (
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
	)
}

export default ModalAddEducation
