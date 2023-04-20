import {ArrowDownIcon, ArrowUpIcon} from '@chakra-ui/icons'
import {Checkbox, Flex, Heading, Table, TableContainer, Tbody, Th, Thead, Tr} from '@chakra-ui/react'
import React, {Dispatch, SetStateAction} from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import {educationSliceActions} from '../store/store'
import EducationElement from './EducationElement'

interface IProps {
	active: number[]
	setActive: Dispatch<SetStateAction<number[]>>
	handleActive: (id: number) => void
}

const EducationTable: React.FC<IProps> = ({active, setActive, handleActive}): JSX.Element => {
	const {educationList, loading, reversed} = useAppSelector(state => state.educationReducer)
	const dispatch = useAppDispatch()

	const handleAllRowsSelect = () => {
		if (educationList.length === active.length) {
			return setActive([])
		}
		setActive(educationList.map(el => el.id))
	}

	if (!educationList.length && !loading) {
		return (
			<Flex w='70%' h='300px' alignItems='center' justifyContent='center'>
				<Heading fontSize='20px'>Add new item...</Heading>
			</Flex>
		)
	}

	return (
		<Flex w='70%' border='1px solid #EDF2F7' borderRadius='10px 10px 0 0'>
			<TableContainer w='100%'>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th cursor='pointer'
								 onClick={() => dispatch(educationSliceActions.educationReverse())}>ID {reversed ?
								<ArrowUpIcon /> : <ArrowDownIcon />}</Th>
							<Th><Checkbox isChecked={!!active.length}
											  onInput={handleAllRowsSelect} /></Th>
							<Th>Education</Th>
						</Tr>
					</Thead>
					<Tbody>
						{educationList ? educationList.map((el, idx) => {
							return (<EducationElement key={el.id} idx={idx} id={el.id} title={el.title} active={active}
															  handleActive={handleActive} />)
						}) : null}
					</Tbody>
				</Table>
			</TableContainer>
		</Flex>
	)
}

export default EducationTable
