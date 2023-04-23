import {Flex} from '@chakra-ui/react'
import React, {FC, PropsWithChildren} from 'react'
import Footer from '../components/Footer'

const MainLayout: FC<PropsWithChildren> = ({children}) => {
	return (
		<Flex w='100' h='100%' flexDir='column' alignItems='center'>
			{children}
			<Footer/>
		</Flex>
	)
}

export default MainLayout