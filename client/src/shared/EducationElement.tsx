import {Checkbox, Td, Tr} from '@chakra-ui/react'
import React from 'react'
import {IEducationElem} from '../store/reducers/educationSlice'

interface IProps extends IEducationElem {
	active: number[]
	idx: number
	handleActive: (id: number) => void
}

const EducationElement: React.FC<IProps> = ({id, idx, title, active, handleActive}) => {
	return (
		<Tr cursor='pointer' onClick={() => handleActive(id)}>
			<Td>{id}</Td>
			<Td><Checkbox onInput={() => handleActive(id)}
							  isChecked={active.includes(id)} /></Td>
			<Td w='90%'>{title}</Td>
		</Tr>
	)
}

export default EducationElement
