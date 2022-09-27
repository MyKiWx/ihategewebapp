import { Box, Center, Divider, GridItem, Radio, RadioGroup, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {
    label: string,
    choices: string[] | number[],
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const RadioRowBox = (props: Props) => {
    const textColor = useColorModeValue('gray.600', 'gray.300')

    return (
        <Box
            px={4}
            my={4}
            borderRadius='md'
            transition='all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s'
            _hover={{
                transition: 'all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s',
                // boxShadow: 'md'
            }}
            pt={[6, 6, 4, 4,]}
        >
            <SimpleGrid columns={4} spacing={4} py={0} alignItems='center'>

                <GridItem
                    colSpan={[4, 4, 2, 2]}
                    borderRadius='sm'
                    mt={[0, 0, 0, 0]}
                    // textAlign='end'
                >
                    {props.label}
                </GridItem>


                <GridItem colSpan={4} display={{ base: 'grid', md: 'none' }}>
                    <SimpleGrid
                        // columns={2}
                        columns={[1, 1, 2, 2]}
                        spacing={2}
                        // py={4}
                        mt={2}
                    // display={{ base: 'none', md: 'grid' }}
                    >

                        <SimpleGrid columns={4} spacing={2} color={textColor} fontSize='xs'>
                            <Box borderRadius='sm'>
                                <Center>ไม่เคยเลย</Center>
                            </Box>
                            <Box borderRadius='sm'>
                                <Center>เป็นครั้งคราว</Center>
                            </Box>
                            <Box borderRadius='sm'>
                                <Center>เป็นบ่อย</Center>
                            </Box>
                            <Box borderRadius='sm'>
                                <Center>เป็นประจำ</Center>
                            </Box>
                        </SimpleGrid>
                    </SimpleGrid>
                </GridItem>

                <GridItem colSpan={[4, 4, 2, 2]}>
                    <RadioGroup onChange={props.setValue} value={props.value}>
                        <SimpleGrid columns={4} spacing={2} justifyItems='center' >
                            {props.choices.map((item, index) => (
                                <Radio
                                    value={item}
                                    key={item}
                                    size={'lg'}
                                    boxSizing='content-box'
                                    borderStyle={'solid'}
                                    borderWidth={4}
                                    transition='all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s'
                                    _hover={{
                                        // bg: 'pink.100',
                                        transition: 'all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s',
                                        // outline: '2px solid #3182ce',
                                        outlineStyle: 'solid',
                                        outlineOffset: '4px',

                                        bg: 'pink.400',
                                        borderColor: 'white',
                                        borderWidth: '0',
                                        // borderColor: 'pink.500'
                                    }}
                                    _active={{
                                        transition: 'all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s',
                                        borderWidth: '10px',
                                        // bg: 'pink.400',
                                        borderColor: 'pink.600'
                                    }}

                                    _checked={{
                                        transition: 'all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s',
                                        // bg: 'pink.400',
                                        borderColor: 'pink.400'
                                    }}
                                />
                            ))}
                        </SimpleGrid>
                    </RadioGroup>
                </GridItem>
            </SimpleGrid>

            {/* <Divider borderColor='gray.300' /> */}
        </Box>
    )
}

export default RadioRowBox