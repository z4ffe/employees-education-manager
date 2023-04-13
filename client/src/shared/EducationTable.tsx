import {Checkbox, Flex, Table, TableContainer, Tbody, Th, Thead, Tr} from '@chakra-ui/react'
import React from 'react'
import {useAppSelector} from '../lib/redux/hooks'
import {handleOrder} from '../utils/handleOrder'
import EducationElement from './EducationElement'

interface IProps {
	order: string
	active: number[]
	setOrder: (order: string) => void
	handleActive: (id: number) => void
}

const EducationTable: React.FC<IProps> = ({active, order, setOrder, handleActive}): JSX.Element => {
	const {educationList, listLength, rejected} = useAppSelector(state => state.educationReducer)

	return (
		<Flex w='70%' border='1px solid #EDF2F7' borderRadius='10px 10px 0 0'>
			<TableContainer w='100%'>
				<Table variant='simple'>
					<Thead>
						<Tr>
							<Th cursor='pointer' onClick={() => setOrder(handleOrder(order))}>Номер</Th>
							<Th><Checkbox /></Th>
							<Th>Образование</Th>
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
