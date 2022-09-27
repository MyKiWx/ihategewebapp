import { Box, Button, Container, Flex, Heading, List, ListItem, SimpleGrid, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link';
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';

type Props = {}

const Content1 = (props: Props) => {

    const contentCoverBGColor = useColorModeValue('white', 'none');
    const contentSubHeadingColor = useColorModeValue('blackAlpha.400', 'whiteAlpha.700');
    const contentTextColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');

    return (
        <>
            <Box bg={contentCoverBGColor}>
                <Container maxW='container.lg' pt={{base: 10, md: 12}} pb={20}>
                <Heading
                        size={'xl'}
                        color={contentSubHeadingColor}
                        mb={8}
                    >
                        # คอนเทนต์ภายในเว็บของเรา 
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                        <Box
                            bg={'#e9faf9'}
                            p={'40px'}
                            borderRadius='lg'
                        >
                            <Heading
                                size='xl'
                                fontWeight='700'
                                pt={4}
                                pb={8}
                                color={'#1f7b8f'}
                                textAlign='match-parent'
                            >
                                <Flex justify={'space-between'}>
                                    <p>ความเครียด</p>
                                    <p>🌊</p>
                                </Flex>
                            </Heading>
                            <SimpleGrid columns={1} spacing={10} >
                                coming soon...
                                {/* <List spacing={6}>
                                    <ListItem>
                                        <Link href={''}>
                                            <a>
                                                <Text
                                                    display={'inline-flex'}
                                                    _hover={{
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    สาเหตุของความเครียด &nbsp; <FaExternalLinkAlt />
                                                </Text>
                                            </a>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={''}>
                                            <a>
                                                <Text
                                                    display={'inline-flex'}
                                                    _hover={{
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    รูปแบบ ลักษณะต่างๆ ของความเครียด &nbsp; <FaExternalLinkAlt />
                                                </Text>
                                            </a>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={''}>
                                            <a>
                                                <Text
                                                    display={'inline-flex'}
                                                    _hover={{
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    วิธีการรักษา อาการข้างเคียง &nbsp; <FaExternalLinkAlt />
                                                </Text>
                                            </a>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={''}>
                                            <a>
                                                <Text
                                                    display={'inline-flex'}
                                                    _hover={{
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    ผลดีของการไม่เครียด &nbsp; <FaExternalLinkAlt />
                                                </Text>
                                            </a>
                                        </Link>
                                    </ListItem>
                                </List> */}

                            </SimpleGrid>
                        </Box>
                        <Box
                            bg={'#fff0ed'}
                            p={'40px'}
                            borderRadius='lg'
                        >
                            <Heading
                                size='xl'
                                fontWeight='700'
                                pt={4}
                                pb={8}
                                color={'#e9652e'}
                                textAlign='match-parent'
                            >
                                <Flex justify={'space-between'}>
                                    <p>แบบประเมิน</p>
                                    <p>📃</p>
                                </Flex>
                            </Heading>
                            <SimpleGrid columns={1} spacing={10} >
                                <List spacing={6}>
                                    <ListItem>
                                        <Link href={'/assessment/assessment1'}>
                                            <a>
                                                <Text
                                                    display={'inline-flex'}
                                                    _hover={{
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    แบบประเมินความเครียด &nbsp; <FaExternalLinkAlt />
                                                </Text>
                                            </a>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={'/assessment/assessment2'}>
                                            <a>
                                                <Text
                                                    display={'inline-flex'}
                                                    _hover={{
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    แบบประเมินโรคซึมเศร้า &nbsp; <FaExternalLinkAlt />
                                                </Text>
                                            </a>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={'/assessment/assessment3'}>
                                            <a>
                                                <Text
                                                    display={'inline-flex'}
                                                    _hover={{
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    แบบประเมินการฆ่าตัวตาย &nbsp; <FaExternalLinkAlt />
                                                </Text>
                                            </a>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href={'/assessment/survey1'}>
                                            <a>
                                                <Text
                                                    display={'inline-flex'}
                                                    _hover={{
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    แบบสำรวจความเครียด &nbsp; <FaExternalLinkAlt />
                                                </Text>
                                            </a>
                                        </Link>
                                    </ListItem>
                                </List>

                            </SimpleGrid>
                        </Box>



                    </SimpleGrid>
                </Container>
            </Box>
        </>
    )
}

export default Content1