import {Flex, Skeleton, Stack} from '@chakra-ui/react'
import React from 'react'

const SkeletonElem: React.FC = (): JSX.Element => {
	return (
		<Flex w='100%' h='100%' justifyContent='center'>
			<Stack>
				<Skeleton height='38px' w='1170px' />
				<Skeleton height='38px' />
				<Skeleton height='38px' />
				<Skeleton height='38px' />
				<Skeleton height='38px' />
				<Skeleton height='38px' />
				<Skeleton height='38px' />
			</Stack>
		</Flex>
	)
}

export default SkeletonElem