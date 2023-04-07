import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import {Provider} from 'react-redux'
import Home from './pages/Home'
import store from './store/store'
import mainTheme from './themes/mainTheme'

const App = () => {
   return (
      <Provider store={store}>
         <ChakraProvider theme={mainTheme}>
            <Home />
         </ChakraProvider>
      </Provider>
   )
}

export default App
