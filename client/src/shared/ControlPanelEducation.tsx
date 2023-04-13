import {Button, Flex} from '@chakra-ui/react'
import React from 'react'

interface IProps {
	handleDelete: () => void
}

const ControlPanelEducation: React.FC<IProps> = ({handleDelete}) => {
	return (
		<Flex gap='40px' justifyContent='center' marginBottom='20px'>
			<Button w='130px' h='130px' borderRadius='10px' backgroundColor='#287B30'
					  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' fontWeight='600' fontSize='14px' color='white'>Добавить
				запись</Button>
			<Button w='130px' h='130px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='10px'
					  backgroundColor='#2996CE' fontWeight='600' fontSize='14px'
					  color='white'>Редактировать</Button>
			<Button w='130px' h='130px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='10px'
					  backgroundColor='#D62C29' fontWeight='600' fontSize='14px' color='white'
					  onClick={handleDelete}>Удалить
				запись</Button>
		</Flex>
	)
}

export default ControlPanelEducation
