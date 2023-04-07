import {ChakraProvider, Flex} from '@chakra-ui/react'
import React from 'react'
import {Provider} from 'react-redux'
import store from './store/store'
import mainTheme from './themes/mainTheme'

const App = () => {
   return (
      <Provider store={store}>
         <ChakraProvider theme={mainTheme}>
            <Flex>
               APp
            </Flex>
         </ChakraProvider>
      </Provider>
   )
}

export default App
