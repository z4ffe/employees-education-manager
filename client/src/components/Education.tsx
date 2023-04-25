import {Flex, Heading, useDisclosure} from '@chakra-ui/react'
import React, {FC, useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import ControlPanelEducation from '../shared/ControlPanelEducation'
import EducationTable from '../shared/EducationTable'
import ModalAddEducation from '../shared/ModalAddEducation'
import ModalDeleteEducation from '../shared/ModalDeleteEducation'
import ModalEditEducation from '../shared/ModalEditEducation'
import ModalWrapper from '../shared/ModalWrapper'
import Pagination from '../shared/Pagination'
import SkeletonElem from '../shared/SkeletonElem'
import {deleteEducationById, fetchAllEducations, fetchEducationUsage} from '../store/education/educationThunk'
import {IEmployee} from '../types/interfaces/employee'

const Education: FC = () => {
	const {loading, currentPage, take, order} = useAppSelector(state => state.educationReducer)
	const dispatch = useAppDispatch()

	const [active, setActive] = useState<number[]>([])
	const {isOpen, onOpen, onClose} = useDisclosure()
	const [modal, setModal] = useState<'ADD' | 'EDIT' | 'DELETE'>('ADD')
	const [educationUsageList, setEducationUsageList] = useState<IEmployee[] | []>([])

	const handleActive = (id: number) => {
		if (active.includes(id)) {
			const modifiedActive = active.filter(el => el !== id)
			return setActive(modifiedActive)
		}
		setActive(prevState => [...prevState, id])
	}

	const handleDelete = async (): Promise<void> => {
		if (!active.length) return
		const result = await dispatch(fetchEducationUsage(active)).unwrap()
		if (!result.length) {
			await dispatch(deleteEducationById(active))
			await dispatch(fetchAllEducations())
			setActive([])
		} else {
			setModal('DELETE')
			onOpen()
			setEducationUsageList(result)
		}
	}

	const handleModalAdd = () => {
		setModal('ADD')
		onOpen()
	}

	const handleModalEdit = () => {
		setModal('EDIT')
		onOpen()
	}

	useEffect((): void => {
		dispatch(fetchAllEducations())
	}, [currentPage, order, take])

	return (
		<Flex flexDir='column' w='100%' alignItems='center'>
			<Heading marginY='20px' fontSize='25px' textAlign='center'>Education Editor</Heading>
			<ControlPanelEducation active={active} handleDelete={handleDelete} handleModalAdd={handleModalAdd}
										  handleModalEdit={handleModalEdit} />
			{loading ? <SkeletonElem /> :
				<EducationTable active={active} setActive={setActive} handleActive={handleActive} />}
			<Pagination setActive={setActive} />
			<ModalWrapper isOpen={isOpen} onClose={onClose} modal={modal}>
				{modal === 'ADD' ? <ModalAddEducation isOpen={isOpen} onClose={onClose} />
					: modal === 'EDIT' ? <ModalEditEducation active={active} onClose={onClose} />
						: modal === 'DELETE' ?
							<ModalDeleteEducation active={active} setActive={setActive}
														 educationUsageList={educationUsageList}
														 setEducationUsageList={setEducationUsageList} onClose={onClose} /> : null}
			</ModalWrapper>
		</Flex>
	)
}

export default Education
