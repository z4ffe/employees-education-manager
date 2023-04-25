import {EditIcon} from '@chakra-ui/icons'
import {
	Alert,
	AlertIcon,
	AlertTitle,
	Collapse,
	Flex,
	Input,
	InputGroup,
	InputLeftElement,
	ModalBody,
	Spinner,
} from '@chakra-ui/react'
import React, {ChangeEvent, FC, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import {updateEducationById} from '../store/education/educationThunk'
import AddCancelBtn from './AddCancelBtn'

interface IProps {
	active: number[]
	onClose: () => void
}

const ModalEditEducation: FC<IProps> = ({active, onClose}) => {
	const educationList = useAppSelector(state => state.educationReducer.educationList)
	const dispatch = useAppDispatch()

	const [warning, setWarning] = useState(false)
	const [modified, setModified] = useState(false)
	const [currentEduc, setCurrentEduc] = useState(() => {
		return educationList.filter(el => el.id === active[0])[0]
	})

	const handleEditComplete = () => {
		if (!currentEduc.title.length) {
			return setWarning(true)
		}
		dispatch(updateEducationById(currentEduc))
		onClose()
	}

	const handleEducationChange = (event: ChangeEvent<HTMLInputElement>) => {
		setModified(true)
		setWarning(false)
		setCurrentEduc({
			...currentEduc,
			title: event.target.value,
		})
	}

	return (
		<ModalBody>
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
					children={<EditIcon color='gray.300' />}
				/>
				{currentEduc ? <Input type='text' placeholder='Change education name...' value={currentEduc.title}
											 onChange={handleEducationChange} /> : <Spinner />}
			</InputGroup>
			<Collapse animateOpacity in={warning}>
				{warning ? <Flex marginY='7px'>
					<Alert status='error'>
						<AlertIcon />
						<AlertTitle>Education can't be empty</AlertTitle>
					</Alert>
				</Flex> : null}
			</Collapse>
			<Flex gap='10px' justifyContent='center' marginTop='20px'>
				<AddCancelBtn disabled={!modified} click={handleEditComplete} type={'EDIT'} />
				<AddCancelBtn click={onClose} type={'CANCEL'} />
			</Flex>
		</ModalBody>
	)
}

export default ModalEditEducation