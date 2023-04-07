import {Flex} from '@chakra-ui/react'
import React from 'react'
import {useAppSelector} from '../lib/redux/hooks'

const Employee = () => {
   const employeeStore = useAppSelector(state => state.employeeReducer)

   return (
      <Flex>

      </Flex>
   )
}

export default Employee
