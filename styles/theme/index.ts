import {
    ComponentStyleConfig,
    extendTheme,
    theme as base,
    ThemeConfig,
    withDefaultColorScheme,
    withDefaultVariant
} from '@chakra-ui/react'

const theme = extendTheme({
    // shadows: {
    //     purple: '0 0 4px 2px orange'
    // },
    colors: {
    },
    components: {
        Radio: {
            defaultProps: {
                colorScheme: 'pink', // default is gray
                
            },
            _hover: {
                bg: 'red'
                
            }
        }
    },
    config:
    {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    fonts: {
        heading: `Mali, cursive, sans-serif, ${base.fonts?.heading}`,
        body: `Mali, cursive, system-ui, sans-serif, ${base.fonts?.body}`,
    },


},
    withDefaultVariant({
        variant: 'filled',
        components: ['Input', 'Select']
    }),

);


export default extendTheme(theme);