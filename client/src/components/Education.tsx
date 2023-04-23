import {Flex, Heading, useDisclosure} from '@chakra-ui/react'
import React, {FC, useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import ControlPanelEducation from '../shared/ControlPanelEducation'
import EducationTable from '../shared/EducationTable'
import ModalEducation from '../shared/ModalEducation'
import Pagination from '../shared/Pagination'
import SkeletonElem from '../shared/SkeletonElem'
import {deleteEducationById, fetchAllEducations} from '../store/education/educationThunk'

const Education: FC = () => {
	const {loading, currentPage, take, order} = useAppSelector(state => state.educationReducer)
	const dispatch = useAppDispatch()

	const [active, setActive] = useState<number[]>([])
	const {isOpen, onOpen, onClose} = useDisclosure()

	const handleActive = (id: number) => {
		if (active.includes(id)) {
			const modifiedActive = active.filter(el => el !== id)
			return setActive(modifiedActive)
		}
		setActive(prevState => [...prevState, id])
	}

	const handleDelete = async (): Promise<void> => {
		if (!active.length) return
		await dispatch(deleteEducationById(active)).unwrap().then(res => {
			if (res.pagination.overPage) {
				return dispatch(fetchAllEducations())
			}
		})
		setActive([])
	}

	useEffect((): void => {
		dispatch(fetchAllEducations())
	}, [currentPage, order, take])

	return (
		<Flex flexDir='column' w='100%' alignItems='center'>
			<Heading marginY='20px' fontSize='25px' textAlign='center'>Education Editor</Heading>
			<ControlPanelEducation active={active} handleDelete={handleDelete} onOpen={onOpen} />
			{loading ? <SkeletonElem /> :
				<EducationTable active={active} setActive={setActive} handleActive={handleActive} />}
			<Pagination />
			<ModalEducation isOpen={isOpen} onClose={onClose} />
		</Flex>
	)
}

export default Education
