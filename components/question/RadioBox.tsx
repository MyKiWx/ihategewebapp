import { Box, Radio, RadioGroup, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {
    label: string;
    choices: string[] | number[];
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const RadioBox = (props: Props) => {
    const textColor = useColorModeValue('gray.600', 'gray.300')
    return (
        <>
            <Box
            >
                <Box>
                </Box>
                <Box mt={'8px'}>
                    <RadioGroup onChange={props.setValue} value={props.value}>
                        <Stack direction='row' spacing={4}>
                            {props.choices.map((choice, index) => {
                                return (
                                    <Radio
                                        key={index}
                                        value={choice}
                                        size='lg'
                                        boxSizing='content-box'
                                        borderStyle={'solid'}
                                        borderWidth={6}
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
                                    >
                                        <Text color={textColor}>{choice}</Text>
                                    </Radio>
                                )
                            })}
                        </Stack>
                    </RadioGroup>
                </Box>
            </Box>
        </>
    )
}

export default RadioBox