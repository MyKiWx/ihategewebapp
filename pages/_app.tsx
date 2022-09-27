import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '../styles/theme'
import '../styles/theme/fonts.css'
import NavigationBar from '../components/navbar'
import WithSubnavigation from '../components/navbar/NavbarFormChakraUI'
import SmallCentered from '../components/footer'
import { Provider } from 'react-redux'
import { store } from '../app/store'


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                {/* <NavigationBar /> */}
                <WithSubnavigation />
                <Component {...pageProps} />
                <SmallCentered />
            </ChakraProvider>
        </Provider >
    )
}

export default MyApp
