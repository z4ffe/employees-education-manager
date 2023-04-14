import {AddIcon, DeleteIcon, RepeatIcon} from '@chakra-ui/icons'
import {Button, Flex, Text} from '@chakra-ui/react'
import React from 'react'

interface IProps {
	active: number[]
	handleDelete: () => void
	onOpen: () => void
}

const ControlPanelEducation: React.FC<IProps> = ({handleDelete, active, onOpen}) => {
	return (
		<Flex gap='40px' justifyContent='center' marginBottom='20px'>
			<Button w='130px' h='130px' borderRadius='10px' backgroundColor='#287B30'
					  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' fontWeight='600' fontSize='14px'
					  color='white' display='flex' flexDir='column' gap='10px' onClick={onOpen}>
				<AddIcon fontSize='20px' />
				<Text>Добавить запись</Text>
			</Button>
			<Button w='130px' h='130px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='10px'
					  backgroundColor='#2996CE' fontWeight='600' fontSize='14px'
					  isDisabled={active.length !== 1}
					  color='white' display='flex' flexDir='column' gap='10px'>
				<RepeatIcon fontSize='20px' />
				<Text>Редактировать</Text>
			</Button>
			<Button w='130px' h='130px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='10px'
					  backgroundColor='#D62C29' fontWeight='600' fontSize='14px' color='white'
					  isDisabled={active.length === 0}
					  onClick={handleDelete} display='flex' flexDir='column' gap='10px'>
				<DeleteIcon fontSize='20px' />
				<Text>Удалить запись</Text>
			</Button>
		</Flex>
	)
}

export default ControlPanelEducation
