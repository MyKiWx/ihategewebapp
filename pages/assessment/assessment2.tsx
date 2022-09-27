import {
    Box,
    Flex,
    Button,
    Container,
    Heading,
    Center,
    Badge,
    Divider,
    Text,
    useColorModeValue,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    SimpleGrid,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { doc, setDoc } from 'firebase/firestore';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import FadeIn from 'react-fade-in';
import RadioRowBox from '../../components/question/RadioRowBox';
import { db } from '../../service/firebase.config';
import { QUESTION_ITEMS3 } from '../../src/data/QUESTION_ITEMS';

// REVIEW : old version use redux
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../app/store';
// import { addAnswer2 } from '../../features/answerFormSurvey/answerSlice';

type Props = {}

const Assessment2 = (props: Props) => {

    // NOTE : For Chakra UI
    const contentCoverBGColor = useColorModeValue('#f7f5fa', 'none');
    const contentSubHeadingColor = useColorModeValue('blackAlpha.400', 'whiteAlpha.700');
    const contentTextColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    // REVIEW : old version use redux
    // const disPatch = useDispatch()
    // const answer2 = useSelector((state: RootState) => state.answer.value2)

    // NOTE : For Store data
    const [answer3, setAnswer3] = useState(() => {
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

    // NOTE : create new variable and assign value from answer2
    const [value3001, setValue3001] = useState<string>(answer3[0])
    const [value3002, setValue3002] = useState<string>(answer3[1])
    const [value3003, setValue3003] = useState<string>(answer3[2])
    const [value3004, setValue3004] = useState<string>(answer3[3])
    const [value3005, setValue3005] = useState<string>(answer3[4])
    const [value3006, setValue3006] = useState<string>(answer3[5])
    const [value3007, setValue3007] = useState<string>(answer3[6])
    const [value3008, setValue3008] = useState<string>(answer3[7])
    const [value3009, setValue3009] = useState<string>(answer3[8])
    // const [value2010, setValue2010] = useState<string>(answer2[9])
    // const [value2011, setValue2011] = useState<string>(answer2[10])
    // const [value2012, setValue2012] = useState<string>(answer2[11])
    // const [value2013, setValue2013] = useState<string>(answer2[12])
    // const [value2014, setValue2014] = useState<string>(answer2[13])
    // const [value2015, setValue2015] = useState<string>(answer2[14])
    // const [value2016, setValue2016] = useState<string>(answer2[15])
    // const [value2017, setValue2017] = useState<string>(answer2[16])
    // const [value2018, setValue2018] = useState<string>(answer2[17])
    // const [value2019, setValue2019] = useState<string>(answer2[18])
    // const [value2020, setValue2020] = useState<string>(answer2[19])

    // NOTE : create new variable and assign value from answer2
    useEffect(() => {
        setValue3001(answer3[0])
        setValue3002(answer3[1])
        setValue3003(answer3[2])
        setValue3004(answer3[3])
        setValue3005(answer3[4])
        setValue3006(answer3[5])
        setValue3007(answer3[6])
        setValue3008(answer3[7])
        setValue3009(answer3[8])
        // setValue2010(answer2[9])
        // setValue2011(answer2[10])
        // setValue2012(answer2[11])
        // setValue2013(answer2[12])
        // setValue2014(answer2[13])
        // setValue2015(answer2[14])
        // setValue2016(answer2[15])
        // setValue2017(answer2[16])
        // setValue2018(answer2[17])
        // setValue2019(answer2[18])
        // setValue2020(answer2[19])
    }, [answer3])

    // NOTE : For handle change
    const [allValue, setAllValue] = useState<string[]>([])
    const [result, setResult] = useState<number>(0)
    const [validate, setValidate] = useState(false)

    function validateAns() {
        if (value3001 === undefined || value3002 === undefined || value3003 === undefined || value3004 === undefined || value3005 === undefined || value3006 === undefined || value3007 === undefined || value3008 === undefined || value3009 === undefined) {
            toast({
                title: "รบกวนตอบคำถามให้ครบทุกข้อด้วยนะคั้บ 🫶",
                status: "warning",
                variant: 'subtle',
                duration: 3000,
                isClosable: true,
            })
        } else {
            setValidate(true);
            setDataTest()
            setTimeout(() => {
                onOpen()
            }, 500)

            // REVIEW : old version use redux
            // disPatch(addAnswer2([value3001, value3002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020]))

            // NOTE : contain value for calculate
            setAllValue([value3001, value3002, value3003, value3004, value3005, value3006, value3007, value3008, value3009])

            // NOTE : For Store data
            setAnswer3([value3001, value3002, value3003, value3004, value3005, value3006, value3007, value3008, value3009])
            localStorage.setItem("answer3", JSON.stringify([value3001, value3002, value3003, value3004, value3005, value3006, value3007, value3008, value3009]));

            // NOTE : Display success message
            setTimeout(() => {
                // Router.push('/')
                toast({
                    title: "บันทึกข้อมูลสำเร็จ",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                })
            }, 1000)
        }

        // REVIEW : old version use redux
        // disPatch(addAnswer2([value3001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020]))

        // NOTE : contain value for calculate
        setAllValue([value3001, value3002, value3003, value3004, value3005, value3006, value3007, value3008, value3009])
    }

    useEffect(() => {
        // !isOpen && setValidate(false)
        if (!isOpen) {
            setValidate(false);
        }
    }, [isOpen])

    // NOTE : calculate result
    useEffect(() => {
        let sumScore = 0
        allValue.forEach((ans, index) => {
            if (ans == '0') {
                sumScore += 0
            } else if (ans == '1') {
                sumScore += 1
            } else if (ans == '2') {
                sumScore += 2

            } else if (ans == '3') {
                sumScore += 3
            }
        });
        setResult(sumScore)
    }, [allValue])


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


    async function setDataTest() {
        const docRef = doc(db, "answerForm", (identify).toString());
        await setDoc(docRef, {
            assessment2: [value3001, value3002, value3003, value3004, value3005, value3006, value3007, value3008, value3009]
        }, { merge: true });
    }



    return (
        <>
            <Head>
                <title>แบบประเมิน</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/faviconWhite.png" />
            </Head>
            <Box pt={'70px'}>
                <Container maxW='container.sm' pt={{ base: 4, md: '60px' }}>

                    <Heading
                        size='md'
                        fontWeight='700'
                        textAlign='match-parent'
                        color={contentSubHeadingColor}
                    >
                        แบบประเมิน
                    </Heading>
                    <Heading
                        size='xl'
                        fontWeight='700'
                        textAlign='match-parent'
                        my={4}
                    >
                        โรคซึมเศร้า
                    </Heading>

                    <Divider my={{ base: 0, md: 8 }} />

                    <Box my={8}>
                        <>
                            <SimpleGrid
                                columns={2}
                                spacing={2}
                                py={1}
                                mt={2}
                                display={{ base: 'none', md: 'grid' }}
                                fontSize={{ base: 'sm', md: 'sm' }}
                            >
                                <Box borderRadius='sm'>
                                </Box>
                                <SimpleGrid columns={4} spacing={2} color={textColor}>
                                    <Box borderRadius='sm' transform={'rotate(-45deg)'}>
                                        <Center>ไม่เคยเลย</Center>
                                    </Box>
                                    <Box borderRadius='sm' transform={'rotate(-45deg)'}>
                                        <Center>เป็นครั้งคราว</Center>
                                    </Box>
                                    <Box borderRadius='sm' transform={'rotate(-45deg)'}>
                                        <Center>เป็นบ่อย</Center>
                                    </Box>
                                    <Box borderRadius='sm' transform={'rotate(-45deg)'}>
                                        <Center>เป็นประจำ</Center>
                                    </Box>
                                </SimpleGrid>
                            </SimpleGrid>
                        </>

                        {/* NOTE : Display test */}
                        <RadioRowBox label={QUESTION_ITEMS3[0].label} choices={QUESTION_ITEMS3[0].choices} value={value3001} setValue={setValue3001} />
                        <RadioRowBox label={QUESTION_ITEMS3[1].label} choices={QUESTION_ITEMS3[1].choices} value={value3002} setValue={setValue3002} />
                        <RadioRowBox label={QUESTION_ITEMS3[2].label} choices={QUESTION_ITEMS3[2].choices} value={value3003} setValue={setValue3003} />
                        <RadioRowBox label={QUESTION_ITEMS3[3].label} choices={QUESTION_ITEMS3[3].choices} value={value3004} setValue={setValue3004} />
                        <RadioRowBox label={QUESTION_ITEMS3[4].label} choices={QUESTION_ITEMS3[4].choices} value={value3005} setValue={setValue3005} />
                        <RadioRowBox label={QUESTION_ITEMS3[5].label} choices={QUESTION_ITEMS3[5].choices} value={value3006} setValue={setValue3006} />
                        <RadioRowBox label={QUESTION_ITEMS3[6].label} choices={QUESTION_ITEMS3[6].choices} value={value3007} setValue={setValue3007} />
                        <RadioRowBox label={QUESTION_ITEMS3[7].label} choices={QUESTION_ITEMS3[7].choices} value={value3008} setValue={setValue3008} />
                        <RadioRowBox label={QUESTION_ITEMS3[8].label} choices={QUESTION_ITEMS3[8].choices} value={value3009} setValue={setValue3009} />

                        <>
                            <Box
                                my={24}
                            >
                                <Center>
                                    <Button
                                        size='md'
                                        type='submit'
                                        colorScheme='pink'
                                        isLoading={validate}
                                        loadingText='กำลังประเมินผล'
                                        onClick={() => { validateAns() }}
                                    >
                                        ประเมินผล
                                    </Button>
                                </Center>
                            </Box>
                        </>
                    </Box>
                    <>
                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>ผลการประเมิน</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Flex w='full' justify={'end'}>
                                        <Badge>score : {result}/27</Badge>
                                    </Flex>
                                    <Text mb={4}>
                                        คุณอยู่ในเกณฑ์
                                    </Text>

                                    <Grid
                                        h='200px'
                                        templateRows='repeat(5, 1fr)'
                                        templateColumns='repeat(12, 1fr)'
                                        gap={4}
                                    >
                                        <>
                                            <GridItem rowSpan={1} colSpan={4} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    justify='center'
                                                    align='center'
                                                >
                                                    {result >= 0 && result < 7 ? <b> {`<7`}</b> : <>{`<7`}</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 0 && result < 7 ? <b>ไม่มีอาการของโรคซึมเศร้า&nbsp;&nbsp;👈</b> : <>ไม่มีอาการของโรคซึมเศร้า</>}
                                                </Flex>
                                            </GridItem>
                                        </>
                                        <>
                                            <GridItem rowSpan={1} colSpan={4} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    justify='center'
                                                    align='center'
                                                >
                                                    {result >= 7 && result <= 17 ? <b>7 - 17</b> : <>7 - 17</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 7 && result <= 17 ? <b>ปกติ/ไม่เครียด&nbsp;&nbsp;👈</b> : <>ปกติ/ไม่เครียด</>}
                                                </Flex>
                                            </GridItem>
                                        </>
                                        <>
                                            <GridItem rowSpan={1} colSpan={4} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    justify='center'
                                                    align='center'
                                                >
                                                    {result >= 18 && result <= 25 ? <b>18 - 25</b> : <>18 - 25</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 18 && result <= 25 ? <b>เครียดสูงกว่าปกติเล็กน้อย&nbsp;&nbsp;👈</b> : <>เครียดสูงกว่าปกติเล็กน้อย</>}
                                                </Flex>
                                            </GridItem>
                                        </>
                                        <>
                                            <GridItem rowSpan={1} colSpan={4} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    justify='center'
                                                    align='center'
                                                >
                                                    {result >= 26 && result <= 29 ? <b>26 - 29</b> : <>26 - 29</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 26 && result <= 29 ? <b>เครียดปานกลาง&nbsp;&nbsp;👈</b> : <>เครียดปานกลาง</>}
                                                </Flex>
                                            </GridItem>
                                        </>
                                        <>
                                            <GridItem rowSpan={1} colSpan={4} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    justify='center'
                                                    align='center'
                                                >
                                                    {result >= 30 ? <b>30 ขึ้นไป</b> : <>30 ขึ้นไป</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 30 ? <b>เครียดมาก&nbsp;&nbsp;👈</b> : <>เครียดมาก</>}
                                                </Flex>
                                            </GridItem>
                                        </>
                                    </Grid>
                                    {result >= 19 ?
                                        <Text mt={8} mb={2} >อยากลองทำแบบประเมินการฆ่าตัวตายหน่อยไหม ? (เนื่องจากการประเมิน คุณมีโอกาส <Badge colorScheme={'purple'}>ฆ่าตัวตาย</Badge>)</Text> :
                                        <Text mt={4} ></Text>
                                    }

                                </ModalBody>
                                <ModalFooter>
                                    <Link href={'/assessment/assessment3'}>
                                        <a>
                                            <Button mx={4} colorScheme='pink'>แบบประเมินการฆ่าตัวตาย</Button>
                                        </a>
                                    </Link>
                                    <Button mx={0} onClick={onClose}>ปิด</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                </Container>
            </Box>
        </>
    )
}

export default Assessment2

