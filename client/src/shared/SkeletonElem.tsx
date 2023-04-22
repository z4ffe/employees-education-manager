import {Flex, Skeleton, Stack} from '@chakra-ui/react'
import React, {FC} from 'react'
import {useAppSelector} from '../lib/redux/hooks'

const SkeletonElem: FC = (): JSX.Element => {
	const take = useAppSelector(state => state.educationReducer.take)

	return (
		<Flex w='100%' h='100%' justifyContent='center'>
			<Stack w='70%'>
				{Array(take).fill(<Skeleton height='35px' startColor='gray.100' endColor='gray.300' />)}
			</Stack>
		</Flex>
	)
}

export default SkeletonElem