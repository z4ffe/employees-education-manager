import {Text, Divider, Flex, Link} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
	return (
		<Flex w='100%' h='35px' flexDir='column' justifyContent='center' alignItems='center' marginTop='auto'>
			<Divider w='70%' h='2px' />
			<Text color='gray.300' fontSize='11px'>Handcrafted by <Link href='https://github.com/z4ffe' target='_blank' color='gray.400'>Paul Lightman</Link></Text>
			<Text color='gray.300' fontSize='10px'>{`${new Date().getFullYear()}`}</Text>
		</Flex>
	)
}

export default Footer