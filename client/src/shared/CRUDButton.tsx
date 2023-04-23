import {Button, Text} from '@chakra-ui/react'
import React, {FC} from 'react'

interface IProps {
	text: string
	background: string
	icon: JSX.Element
	disabledCriteria: boolean
	handle?: () => void
}

const CRUDButton: FC<IProps> = ({text, background, icon, handle, disabledCriteria}): JSX.Element => {
	return (
		<Button w='130px' h='130px' borderRadius='10px' backgroundColor={background}
				  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' fontWeight='600' fontSize='14px'
				  color='white' display='flex' flexDir='column' gap='10px' onClick={handle}
				  isDisabled={disabledCriteria}
		>
			{icon}
			<Text>{text}</Text>
		</Button>
	)
}

export default CRUDButton