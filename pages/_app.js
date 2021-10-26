import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/400.css"
import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts:{
    heading: 'Open Sans',
    body: 'Open Sans'
  },
  colors: {
    blue: {
      50: "#ECF1F9",
      100: "#C9D7EE",
      200: "#A5BEE3",
      300: "#82A4D8",
      400: "#5F8BCD",
      500: "#4479C7",
      600: "#305B9C",
      700: "#244475",
      800: "#182D4E",
      900: "#0C1727"
    },
    yellow: {
      50: "#FFFBE5",
      100: "#FFF5B8",
      200: "#FFEE8A",
      300: "#FFE85C",
      400: "#FFE12E",
      500: "#FFDB00",
      600: "#CCAF00",
      700: "#998300",
      800: "#665800",
      900: "#332C00"
    }
  }
  
  
})

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />  
    </ChakraProvider>
  )
}

export default MyApp
