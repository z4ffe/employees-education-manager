import {Flex} from '@chakra-ui/react'
import React from 'react'
import {IEducationElem} from '../store/reducers/educationSlice'

interface IProps extends IEducationElem {
	active: number | null
	handleActive: (id: number) => void
}

const EducationElement: React.FC<IProps> = ({id, title, active, handleActive}) => {
	return (
		<Flex onClick={() => handleActive(id)} backgroundColor={active === id ? 'lightblue' : 'transparent'}>
			<Flex>{id}</Flex>
			<Flex>{title}</Flex>
		</Flex>
	)
}

export default EducationElement
