import { Badge, Box, Button, Center, Container, Flex, FormControl, FormLabel, Heading, Icon, Input, List, ListIcon, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text, Tooltip, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { MdChangeHistory, MdCheckCircle, MdLock, MdSettings } from 'react-icons/md'
import RadioBox from '../../components/question/RadioBox'
import SelectBox from '../../components/question/SelectBox'
import { QUESTION_ITEMS1 } from '../../src/data/QUESTION_ITEMS'
import { arrayUnion, collection, doc, getFirestore, setDoc, Timestamp } from "firebase/firestore";

import { db } from '../../service/firebase.config';
import Head from 'next/head'

type Props = {}



const Assessment = (props: Props) => {

    const contentCoverBGColor = useColorModeValue('#f7f5fa', 'none');
    const contentSubHeadingColor = useColorModeValue('blackAlpha.400', 'whiteAlpha.700');
    const contentTextColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');

    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [answer5, setAnswer5] = useState('')

    const [identify, setIdentify] = useState<String>(() => {
        const ISSERVER = typeof window === "undefined";
        if (!ISSERVER) {
            const ans = localStorage.getItem("identify");
            if (ans) {
                return ans;
            } else {
                return '';
            }
        } else {
            return '';
        }
    })

    useEffect(() => {
        setAnswer2(() => {
            const ISSERVER = typeof window === "undefined";
            if (!ISSERVER) {
                const ans = localStorage.getItem("answer2");
                if (ans) {
                    return JSON.parse(ans);
                } else {
                    return []
                }
            } else {
                return [];
            }
        })
        setAnswer3(() => {
            const ISSERVER = typeof window === "undefined";
            if (!ISSERVER) {
                const ans = localStorage.getItem("answer3");
                if (ans) {
                    return JSON.parse(ans);
                } else {
                    return []
                }
            } else {
                return [];
            }
        })
        setAnswer4(() => {
            const ISSERVER = typeof window === "undefined";
            if (!ISSERVER) {
                const ans = localStorage.getItem("answer4");
                if (ans) {
                    return JSON.parse(ans);
                } else {
                    return []
                }
            } else {
                return [];
            }
        })
        setAnswer5(() => {
            const ISSERVER = typeof window === "undefined";
            if (!ISSERVER) {
                const ans = localStorage.getItem("answer5");
                if (ans) {
                    return JSON.parse(ans);
                } else {
                    return []
                }
            } else {
                return [];
            }
        })
        setIdentify(() => {
            const ISSERVER = typeof window === "undefined";
            if (!ISSERVER) {
                const ans = localStorage.getItem("identify");
                if (ans) {
                    return ans;
                } else {
                    return '';
                }
            } else {
                return '';
            }
        })
    }, [])

    useEffect(() => {
        if (identify == '') {
            localStorage.setItem("identify", `${(Math.round(Math.random() * 1000000000)).toString()}`)
        }
    }, [identify])

    const router = useRouter()

    function resetID() {
        localStorage.clear();
        router.reload()
    }
    // NOTE : For Store data
    const [answer1, setAnswer1] = useState(() => {
        const ISSERVER = typeof window === "undefined";
        if (!ISSERVER) {
            const ans = localStorage.getItem("answer2");
            if (ans) {
                return JSON.parse(ans);

            } else {
                return []
            }
        } else {
            return [];
        }
    })


    const [value1001, setValue1001] = useState<string>(answer1[0] && answer1[0])
    const [value1002, setValue1002] = useState<string>(answer1[1] && answer1[1])
    const [value1003, setValue1003] = useState<string>(answer1[2] != undefined ? answer1[2] : '-')
    const [value1004, setValue1004] = useState<string>(answer1[3] && answer1[3])

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    const [validate, setValidate] = useState(false)

    function validateAns() {
        setValidate(true)
        localStorage.setItem("vadlidateUser", JSON.stringify([value1001, value1002, value1003, value1004]))
        setDataTest();
        onClose()


    }
    useEffect(() => {
        // !isOpen && setValidate(false)
        if (!isOpen) {
            setValidate(false);
        }
    }, [isOpen])

    useEffect(() => {
        if (!vadlidateUser) {
            onOpen()
        }
    }, [])

    const [vadlidateUser, setVadlidateUser] = useState<String>(() => {
        const ISSERVER = typeof window === "undefined";
        if (!ISSERVER) {
            const ans = localStorage.getItem("vadlidateUser");
            if (ans) {
                return ans;
            } else {
                return '';
            }
        } else {
            return '';
        }
    })


    async function setDataTest() {
        const docRef = doc(db, "answerForm", (identify).toString());
        await setDoc(docRef, {
            gender: value1001,
            job: value1002,
            grade: value1003,
            faculty: value1004,
        }, { merge: true });

        const currentdate = new Date();
        const datetime = "Last Sync: " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
    }
    async function setDataTest2() {
        const currentdate = new Date();
        const datetime = "Last Sync: " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        const visitorsRef = doc(db, "visitors", (identify).toString());
        await setDoc(visitorsRef, {
            dateExample: arrayUnion(Timestamp.fromDate(new Date())),
            id: navigator.userAgent,
        }, { merge: true });
    }
    useEffect(() => {
        setDataTest2()
    }, [])
    return (
        <>
            <Head>
                <title>แบบประเมิน</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/faviconWhite.png" />
            </Head>
            <>
                <Box
                    w='full'
                    pt='70px'
                    bg={'#fff0ed'}
                >
                    <Container
                        maxW='container.lg'
                        py={4}
                    >
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 0, md: 10 }}>
                            <Box
                                py={{ base: '10px', md: '40px' }}
                            >
                                <Heading
                                    size={'4xl'}
                                    color={'#e9652e'}
                                    my={4}
                                >
                                    แบบประเมิน
                                </Heading>
                                <Heading
                                    size={'2xl'}
                                    // color={'#e9652e'}
                                    mt={8}
                                >
                                    ความเครียด
                                </Heading>

                                <Text
                                    my={6}
                                    color={contentTextColor}
                                >
                                    ในส่วนนี้จะเป็นแบบประเมินในหัวข้อต่าง ๆ เพื่อประเมินความเครียด โรคซึมเศร้า
                                    และการโอกาสในการฆ่าตัวตาย ทั้งยังมี แบบสำรวจเพื่อให้พวกเราเก็บข้อมูลเพื่อนำไปใช้ใน
                                    <Badge colorScheme='green'>งานวิชา GE</Badge>
                                </Text>
                            </Box>
                            <Box
                                w='full'
                                h='full'
                                position='relative'
                            >
                                <Box w='full' h='full' position='absolute'></Box>
                                <Flex w='full' h='full' justify={'center'} align={'center'}>
                                    <iframe src="https://giphy.com/embed/toXKzaJP3WIgM" width="480" height="288" frameBorder="0" className="giphy-embed" allowFullScreen style={{ borderRadius: '8px', pointerEvents: 'none' }}></iframe>
                                </Flex>
                            </Box>

                        </SimpleGrid>

                    </Container>

                </Box>
            </>
            <>
                <Box bg={''} >
                    <Container maxW='container.lg' py={20}>
                        <Heading
                            size={'xl'}
                            color={contentSubHeadingColor}
                        >
                            # แบบประเมินและแบบสำรวจ
                        </Heading>
                        <Flex justify={'end'} align={'center'} mb={4}>
                            <Text
                                textAlign={'end'}
                                mr={4}
                            >
                                YOUR ID : <Badge colorScheme={'purple'}>{identify}</Badge>
                            </Text>
                            <Tooltip label='ถ้าหาก reset id จะล้างค่าในแบบฟอร์มทั้งหมดด้วย'>
                                <Button
                                    size='xs'
                                    colorScheme={'red'}
                                    onClick={resetID}
                                >
                                    RESET ID
                                </Button>
                            </Tooltip>
                        </Flex>
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} >
                            <>
                                <Link href={'/assessment/assessment1'}>
                                    <a>
                                        <Box
                                            p={'35px'}
                                            h={{ base: 'auto', md: '300px' }}
                                            borderRadius='lg'
                                            shadow='md'
                                            transition='all 150ms ease-in-out'
                                            position='relative'
                                            _hover={{
                                                shadow: 'xl',
                                                transform: 'translateY(-5px)',
                                            }}
                                        >
                                            <Heading
                                                size='md'
                                                fontWeight='700'
                                                textAlign='match-parent'
                                                color={contentSubHeadingColor}
                                            >
                                                แบบประเมิน
                                            </Heading>
                                            <Heading
                                                size='lg'
                                                fontWeight='700'
                                                textAlign='match-parent'
                                                my={4}
                                            >
                                                ความเครียด
                                            </Heading>
                                            <Text color={contentTextColor} my={15} fontSize='sm'>
                                                แบบประเมินความเครียด ซึ่งจะบ่งบอกระดับความเครียดของเพื่อน ๆ
                                                มีด้วยกันอยู่ 4 ระดับ ซึ่ง ระดับมาก ถึง มากที่สุดจะได้ทำแบบประเมินโรคซึมเศร้า

                                            </Text>
                                            {(answer2.length > 0) ? <Badge position={'absolute'} bottom='30' left='30' colorScheme={'green'}>completed</Badge>
                                                : <Badge position={'absolute'} bottom='30' left='30' colorScheme={'red'}>uncompleted</Badge>}
                                        </Box>

                                    </a>
                                </Link>
                            </>
                            <>
                                <Link href={'/assessment/survey1'}>
                                    <a>
                                        <Box
                                            p={'35px'}
                                            h={{ base: 'auto', md: '300px' }}
                                            borderRadius='lg'
                                            shadow='md'
                                            transition='all 150ms ease-in-out'
                                            position={'relative'}
                                            _hover={{
                                                shadow: 'xl',
                                                transform: 'translateY(-5px)',
                                            }}
                                        >
                                            <Heading
                                                size='md'
                                                fontWeight='700'
                                                textAlign='match-parent'
                                                color={contentSubHeadingColor}
                                            >
                                                แบบสำรวจ
                                            </Heading>
                                            <Heading
                                                size='lg'
                                                fontWeight='700'
                                                textAlign='match-parent'
                                                my={4}
                                            >
                                                ความเครียด
                                            </Heading>
                                            <Text color={contentTextColor} my={15} fontSize='sm'>
                                                เป็นแบบสำรวจที่พวกเราจะนำไปวิเคราะห์ และนำมาใช้ใน <Badge colorScheme='green'>งานวิชา GE</Badge>

                                            </Text>
                                            {(answer5.length > 0) ? <Badge position={'absolute'} bottom='30' left='30' colorScheme={'green'}>completed</Badge>
                                                : <Badge position={'absolute'} bottom='30' left='30' colorScheme={'red'}>uncompleted</Badge>}
                                        </Box>
                                    </a>
                                </Link>
                            </>
                            <>
                                <Link href={'/assessment/assessment2'}>
                                    <a>
                                        <Box
                                            p={'35px'}
                                            h={{ base: 'auto', md: '300px' }}
                                            borderRadius='lg'
                                            shadow='md'
                                            transition='all 150ms ease-in-out'
                                            position={'relative'}
                                            _hover={{
                                                shadow: 'xl',
                                                transform: 'translateY(-5px)',
                                            }}
                                        >
                                            <Heading
                                                size='md'
                                                fontWeight='700'
                                                textAlign='match-parent'
                                                color={contentSubHeadingColor}
                                            >
                                                แบบประเมิน
                                            </Heading>
                                            <Heading
                                                size='lg'
                                                fontWeight='700'
                                                textAlign='match-parent'
                                                my={4}
                                            >
                                                โรคซึมเศร้า
                                            </Heading>
                                            <Text color={contentTextColor} my={15} fontSize='sm'>
                                                แบบประเมินโรคซึมเศร้า ซึ่งบ่งบอกระดับความเครียดที่เพิ่มมากขึ้นของเพื่อนๆ มีด้วยกันอยู่ 4 ระดับ
                                                ซึ่งระดับมากถึงมากที่สุดจะได้ทำแบบประเมินการฆ่าตัวตาย

                                            </Text>
                                            {/* <Icon fontSize='2xl' as={MdLock} color='red.500' position={'absolute'} bottom='30' left='30' /> */}
                                            {(answer3.length > 0) ? <Badge position={'absolute'} bottom='30' left='30' colorScheme={'green'}>completed</Badge>
                                                : <Badge position={'absolute'} bottom='30' left='30' colorScheme={'red'}>uncompleted</Badge>}
                                        </Box>
                                    </a>
                                </Link>
                            </>
                            <>
                                <Link href={'/assessment/assessment3'}>
                                    <a>
                                        <Box
                                            p={'35px'}
                                            h={{ base: 'auto', md: '300px' }}
                                            borderRadius='lg'
                                            shadow='md'
                                            transition='all 150ms ease-in-out'
                                            position={'relative'}
                                            _hover={{
                                                shadow: 'xl',
                                                transform: 'translateY(-5px)',
                                            }}
                                        >
                                            <Heading
                                                size='md'
                                                fontWeight='700'
                                                textAlign='match-parent'
                                                color={contentSubHeadingColor}
                                            >
                                                แบบประเมิน
                                            </Heading>
                                            <Heading
                                                size='lg'
                                                fontWeight='700'
                                                textAlign='match-parent'
                                                my={4}
                                            >
                                                การฆ่าตัวตาย
                                            </Heading>
                                            <Text color={contentTextColor} my={15} fontSize='sm'>
                                                แบบประเมินการฆ่าตัวตาย ซึ่งบ่งบอกถึงแนวโน้มการคิดฆ่าตัวตายในระดับต่าง ๆ
                                            </Text>
                                            {/* <Icon fontSize='2xl' as={MdLock} color='red.500' position={'absolute'} bottom='30' left='30' /> */}
                                            {(answer4.length > 0) ? <Badge position={'absolute'} bottom='30' left='30' colorScheme={'green'}>completed</Badge>
                                                : <Badge position={'absolute'} bottom='30' left='30' colorScheme={'red'}>uncompleted</Badge>}
                                        </Box>
                                    </a>
                                </Link>
                            </>

                            <>
                                <Box
                                    p={'35px'}
                                    h={{ base: 'auto', md: '300px' }}
                                    borderRadius='lg'
                                    shadow='md'
                                    transition='all 150ms ease-in-out'
                                // _hover={{
                                //     shadow: 'xl',
                                //     transform: 'translateY(-5px)',
                                // }}
                                >
                                    <Heading
                                        size='md'
                                        fontWeight='700'
                                        textAlign='match-parent'
                                        color={contentSubHeadingColor}
                                    >
                                        (undefined)
                                    </Heading>
                                    <Heading
                                        size='lg'
                                        fontWeight='700'
                                        textAlign='match-parent'
                                        my={4}
                                    >
                                        coming soon
                                    </Heading>
                                    <Text color={contentTextColor} my={15} fontSize='sm'>
                                        -
                                    </Text>
                                </Box>
                            </>
                        </SimpleGrid>
                    </Container>
                </Box>
            </>
            <>
                {/* <Box h='100vh'></Box> */}
            </>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>ข้อมูลทั่วไป</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody pb={6}>
                        <Text mb={4}>ก่อนทำแบบสอบถาม ขอเก็บข้อมูลเพื่อใช้ในการวิเคราะห์ และจำแนกด้วยนะคั้บ 🙏</Text>
                        <Text mb={4}>หากเป็นบุคคลภายนอก สามารถกดปิดได้เลยครับ</Text>
                        <FormControl mt={6}>
                            <FormLabel>{QUESTION_ITEMS1[0].label}</FormLabel>
                            <RadioBox label={QUESTION_ITEMS1[0].label} choices={QUESTION_ITEMS1[0].choices} value={value1001} setValue={setValue1001} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>{QUESTION_ITEMS1[1].label}</FormLabel>
                            <RadioBox label={QUESTION_ITEMS1[1].label} choices={QUESTION_ITEMS1[1].choices} value={value1002} setValue={setValue1002} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>{QUESTION_ITEMS1[2].label}</FormLabel>
                            <SelectBox label={QUESTION_ITEMS1[2].label} placeholder={QUESTION_ITEMS1[2].placeholder} choices={QUESTION_ITEMS1[2].choices} value={value1003} setValue={setValue1003} boxWidth={'100px'} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>{QUESTION_ITEMS1[3].label}</FormLabel>
                            <SelectBox label={QUESTION_ITEMS1[3].label} placeholder={QUESTION_ITEMS1[3].placeholder} choices={QUESTION_ITEMS1[3].choices} value={value1004} setValue={setValue1004} boxWidth={'full'} />
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='pink' mr={3} onClick={() => validateAns()}>
                            บันทึกข้อมูล
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default Assessment



function toast(arg0: {
    title: string
    // description: `กรุณาตอบค`,
    status: string; variant: string; duration: number; isClosable: boolean
}) {
    throw new Error('Function not implemented.')
}

