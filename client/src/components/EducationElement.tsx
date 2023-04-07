import {Flex} from '@chakra-ui/react'
import React from 'react'
import {IEducationElem} from '../store/reducers/educationSlice'

const EducationElement: React.FC<IEducationElem> = ({id, title}) => {
	return (
		<Flex>
			<Flex>{id}</Flex>
			<Flex>{title}</Flex>
		</Flex>
	)
}

export default EducationElement
