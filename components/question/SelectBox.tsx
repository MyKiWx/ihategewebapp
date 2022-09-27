import { Box, Select, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

type Props = {
    label: string,
    placeholder: string | undefined,
    choices: string[] | number[],
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>;
    boxWidth: string | undefined,
}

const SelectBox = (props: Props) => {
    const bgButtonColor = useColorModeValue('pink.600', 'pink.400')
    const bgButtonColorActive = useColorModeValue('pink.700', 'pink.300')

    const textColor = useColorModeValue('gray.600', 'gray.300')
    const codeColor = useColorModeValue('purple.600', 'purple.300')
    
    return (
        <>
            <Box
            >
                <Box mt={'8px'}>
                    <Select
                        color={textColor}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={(e) => props.setValue && props.setValue(e.target.value)}
                        w={`${props.boxWidth}`}
                    >
                        {props.choices.map((ansItem, index) => {
                            return (
                                <option
                                    style={{ marginLeft: '50px' }}
                                    value={ansItem}
                                    key={index}
                                >
                                    {ansItem}
                                </option>
                            )
                        })}
                    </Select>
                </Box>
            </Box>
        </>
    )
}

export default SelectBox