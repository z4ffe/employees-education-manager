import {Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from '@chakra-ui/react'
import React, {FC, PropsWithChildren} from 'react'
import {capitalize} from '../utils/capitalize'

interface IProps {
	modal: string
	isOpen: boolean
	onClose: () => void
}


const ModalWrapper: FC<PropsWithChildren & IProps> = ({children, isOpen, onClose, modal}) => {
	const documentModal = document.getElementById('modal')

	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent minH='190px'>
				<ModalHeader textAlign='center'>{capitalize(modal)} education</ModalHeader>
				<ModalCloseButton />
				{children}
			</ModalContent>
		</Modal>
	)
}

export default ModalWrapper