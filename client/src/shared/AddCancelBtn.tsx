import {Button} from '@chakra-ui/react'
import React, {FC} from 'react'
import {capitalize} from '../utils/capitalize'

interface IProps {
	type: 'ADD' | 'EDIT' | 'DELETE' | 'CANCEL'
	disabled?: boolean
	click: () => void
}


const AddCancelBtn: FC<IProps> = ({disabled = false, click, type}) => {
	let background, backgroundHover

	if (type !== 'CANCEL') {
		background = '#287B30'
		backgroundHover = '#0a5a12'
	} else {
		background = '#D62C29'
		backgroundHover = '#a11612'
	}

	return (
		<Button backgroundColor={background} color='white' fontSize='14px'
				  isDisabled={disabled}
				  _hover={{backgroundColor: backgroundHover}} onClick={click}>
			{capitalize(type)}
		</Button>
	)
}

export default AddCancelBtn