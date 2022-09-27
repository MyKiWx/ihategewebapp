import { Badge, Box, Button, Container, Flex, Heading, SimpleGrid, Text, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'

type Props = {}

const Content1 = (props: Props) => {

    const contentCoverBGColor = useColorModeValue('#f7f5fa', 'none');
    const contentSubHeadingColor = useColorModeValue('blackAlpha.400', 'whiteAlpha.700');
    const contentTextColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');

    return (
        <>
            <Box bg={contentCoverBGColor} pt={'70px'}>
                <Container maxW='container.lg' py={2}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 0, md: 10 }}>
                        <Box
                            py={{ base: '30px', md: '80px' }}
                        >

                            <Heading
                                size='xl'
                                pb={2}
                                color={contentSubHeadingColor}
                            >
                                # ประเมิน
                            </Heading>
                            <Heading
                                size='4xl'
                                pt={4}
                                pb={8}

                            >
                                ความ<b className='rainbow'>เครียด</b>
                            </Heading>
                            <Text
                                my={2}
                                color={contentTextColor}
                            >
                                สวัสดีคั้บ เพื่อน ๆ ชาว มข วันนี้เว็บ <Badge colorScheme='purple' >ความเขียด</Badge> ของเราจะมาประเมิน <Badge colorScheme='red'>ความเครียด</Badge> ของเพื่อน ๆ
                                และพวกเราขอเก็บความเครียดของท่านไปเป็นส่วนหนึ่งในการทำ <Badge colorScheme='green'>งานวิชา GE</Badge> ขอบคุณคั้บ 🫶
                            </Text>
                            <Text
                                mt={10}
                                color={contentTextColor}
                            >
                                ถ้าพร้อมแล้วก็มาเริ่มกันเลย 🚀
                            </Text>
                            <Tooltip label='ทำแบบประเมิน 🌈'>
                                <Button
                                    mt={4}
                                    mb={2}
                                    variant='solid'
                                    colorScheme='pink'
                                    size='lg'
                                    w={{ base: 'full', md: 'auto' }}
                                >
                                    <Link href={'/assessment'}>
                                        <a>
                                            ทำแบบประเมิน
                                        </a>
                                    </Link>
                                </Button>
                            </Tooltip>
                            <Tooltip label='อ่านบทความเกี่ยวกับความเครียด ✨'>
                                <Button
                                    mt={{ base: 0, md: 4 }}
                                    ml={{ base: 0, md: 4 }}
                                    mb={2}
                                    variant='ghost'
                                    // colorScheme='pink'
                                    size='lg'
                                    w={{ base: 'full', md: 'auto' }}
                                >
                                    <Link href={'/stress'}>
                                        <a>
                                            ความเครียด
                                        </a>
                                    </Link>
                                </Button>
                            </Tooltip>
                        </Box>
                        <Box
                            w='full'
                            h='full'
                            position='relative'
                        >
                            <Box w='full' h='full' position='absolute'></Box>
                            <Flex w='full' h='full' justify={'center'} align={'center'}>
                                <iframe src="https://giphy.com/embed/BbJdwrOsM7nTa" width="480" height="411" frameBorder="0" className="giphy-embed" style={{ borderRadius: '8px', pointerEvents: 'none' }}></iframe>
                            </Flex>
                        </Box>



                    </SimpleGrid>
                </Container>
            </Box>
        </>
    )
}

export default Content1