import {ChakraTheme, extendTheme} from '@chakra-ui/react'

const mainTheme = extendTheme({
   styles: {
      global: {
         'html, body': {
            width: '100vw',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            scrollBehavior: 'smooth',
            scrollPaddingTop: ['70px', '70px', '102px', '140px'],
         },
         '#root': {
            flexDirection: 'column',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            width: '100%',
            height: '100%',
            maxWidth: '1920px',
         },
         a: {
            textDecoration: 'none',
         },
      },
   },
   fonts: {
      heading: 'Helvetica, sans-serif',
      body: 'Helvetica, sans-serif',
   },
   breakpoints: {
      lg: '90.5em', // 1440px
   },
}) as ChakraTheme

export default mainTheme
