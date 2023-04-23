import {Button} from '@chakra-ui/react'
import React, {FC} from 'react'

interface IProps {
	type: 'ADD' | 'CANCEL'
	disabled?: boolean
	click: () => void
}


const AddCancelBtn: FC<IProps> = ({disabled = false, click, type}) => {
	const background = type === 'ADD' ? '#287B30' : '#D62C29'
	const backgroundHover = type === 'ADD' ? '#0a5a12' : '#a11612'
	const name = type === 'ADD' ? 'Add' : 'Cancel'

	return (
		<Button backgroundColor={background} color='white' fontSize='14px'
				  isDisabled={disabled}
				  _hover={{backgroundColor: backgroundHover}} onClick={click}>
			{name}
		</Button>
	)
}

export default AddCancelBtn