import { Box, Center, Container, Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const NavigationBar = (props: Props) => {
    return (
        <>
            <Box
                h={'60px'}
                w='full'
                position={'fixed'}
                bg='white'
                zIndex={1400}
            >
                <Container maxW='container.xl'>
                    <Flex w='full' h={'60px'} align={'center'} justify={'center'}>
                        This is Navigation bar
                    </Flex>
                </Container>

            </Box>
        </>
    )
}

export default NavigationBar