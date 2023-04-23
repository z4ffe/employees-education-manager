import {
 Modal,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import React, {FC, PropsWithChildren} from 'react'

interface IProps {
	modal: boolean
	isOpen: boolean
	onClose: () => void
}

const ModalWrapper: FC<PropsWithChildren & IProps> = ({children, isOpen, onClose, modal}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent minH='190px'>
				<ModalHeader textAlign='center'>{modal ? 'Edit' : 'Add'} education</ModalHeader>
				<ModalCloseButton />
				{children}
			</ModalContent>
		</Modal>
	)
}

export default ModalWrapper