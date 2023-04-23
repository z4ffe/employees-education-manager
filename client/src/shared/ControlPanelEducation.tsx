import {AddIcon, DeleteIcon, RepeatIcon} from '@chakra-ui/icons'
import {Flex} from '@chakra-ui/react'
import React, {FC} from 'react'
import CRUDButtons from './CRUDButton'

interface IProps {
	active: number[]
	handleDelete: () => void
	onOpen: () => void
}


const ControlPanelEducation: FC<IProps> = ({handleDelete, active, onOpen}) => {
	const buttonList = [
		{
			id: 1,
			name: 'Add',
			background: '#287B30',
			icon: <AddIcon fontSize='20px' />,
			disabledCriteria: false,
			handle: onOpen,
		},
		{
			id: 2,
			name: 'Edit',
			background: '#2996CE',
			icon: <RepeatIcon fontSize='20px' />,
			disabledCriteria: active.length !== 1,
		},
		{
			id: 3,
			name: 'Delete',
			background: '#D62C29',
			icon: <DeleteIcon fontSize='20px' />,
			disabledCriteria: active.length === 0,
			handle: handleDelete,
		},
	]

	return (
		<Flex gap='40px' justifyContent='center' marginBottom='20px'>
			{buttonList.map((btn) => {
				return (
					<CRUDButtons key={btn.id} text={btn.name} background={btn.background} icon={btn.icon}
									 handle={btn.handle} disabledCriteria={btn.disabledCriteria} />)
			})}
		</Flex>
	)
}

export default ControlPanelEducation
