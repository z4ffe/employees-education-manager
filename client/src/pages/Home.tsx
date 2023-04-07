import {Flex, Heading} from '@chakra-ui/react'
import React, {useEffect} from 'react'
import Education from '../components/Education'
import Employee from '../components/Employee'
import {useAppDispatch} from '../lib/redux/hooks'
import {fetchAllEducations} from '../store/thunks/educationThunk'
import {fetchAllEmployees} from '../store/thunks/employeeThunk'

const Home = () => {
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchAllEmployees())
      dispatch(fetchAllEducations())
   }, [])

   return (
      <Flex flexDir="column">
         <Heading alignSelf="center">Home page</Heading>
         <Employee />
         <Education />
      </Flex>
   )
}

export default Home
