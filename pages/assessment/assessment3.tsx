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
    FormControl,
    FormLabel,
    Switch,
    Stack,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { connectFirestoreEmulator, doc, setDoc } from 'firebase/firestore';
import { Head } from 'next/document';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import FadeIn from 'react-fade-in';
import RadioRowBox from '../../components/question/RadioRowBox';
import { db } from '../../service/firebase.config';
import { QUESTION_ITEMS3, QUESTION_ITEMS4, QUESTION_ITEMS5 } from '../../src/data/QUESTION_ITEMS';

// REVIEW : old version use redux
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../app/store';
// import { addAnswer2 } from '../../features/answerFormSurvey/answerSlice';

type Props = {}

const Assessment3 = (props: Props) => {

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
    const [answer4, setAnswer4] = useState(() => {
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

    // NOTE : create new variable and assign value from answer2
    const [value4001, setValue4001] = useState<boolean>(answer4[0] ?? false)
    const [value4002, setValue4002] = useState<boolean>(answer4[1] ?? false)
    const [value4003, setValue4003] = useState<boolean>(answer4[2] ?? false)
    const [value4004, setValue4004] = useState<boolean>(answer4[3] ?? false)
    const [value4005, setValue4005] = useState<boolean>(answer4[4] ?? false)
    const [value4006, setValue4006] = useState<boolean>(answer4[5] ?? false)
    const [value4007, setValue4007] = useState<boolean>(answer4[6] ?? false)
    const [value4008, setValue4008] = useState<boolean>(answer4[7] ?? false)


    // NOTE : create new variable and assign value from answer2
    useEffect(() => {
        setValue4001(answer4[0] ?? false)
        setValue4002(answer4[1] ?? false)
        setValue4003(answer4[2] ?? false)
        setValue4004(answer4[3] ?? false)
        setValue4005(answer4[4] ?? false)
        setValue4006(answer4[5] ?? false)
        setValue4007(answer4[6] ?? false)
        setValue4008(answer4[7] ?? false)
    }, [answer4])

    // NOTE : For handle change
    const [allValue, setAllValue] = useState<boolean[]>([])
    const [result, setResult] = useState<number>(0)
    const [validate, setValidate] = useState(false)

    function validateAns() {
        if (false) {
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
            setAllValue([value4001, value4002, value4003, value4004, value4005, value4006, value4007, value4008])

            // NOTE : For Store data
            setAnswer4([value4001, value4002, value4003, value4004, value4005, value4006, value4007, value4008])
            localStorage.setItem("answer4", JSON.stringify([value4001, value4002, value4003, value4004, value4005, value4006, value4007, value4008]));

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
        setAllValue([value4001, value4002, value4003, value4004, value4005, value4006, value4007, value4008])
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
        allValue[0] ? sumScore += 1 : sumScore += 0
        allValue[1] ? sumScore += 2 : sumScore += 0
        allValue[2] ? sumScore += 6 : sumScore += 0
        allValue[3] ? sumScore += 8 : sumScore += 0
        allValue[4] ? sumScore += 8 : sumScore += 0
        allValue[5] ? sumScore += 9 : sumScore += 0
        allValue[6] ? sumScore += 4 : sumScore += 0
        allValue[7] ? sumScore += 10 : sumScore += 0
        allValue[8] ? sumScore += 4 : sumScore += 0
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
            assessment3: [value4001, value4002, value4003, value4004, value4005, value4006, value4007, value4008]
        }, { merge: true });
    }



    return (
        <>
            <Head>
                <title>แบบประเมินการฆ่าตัวตาย</title>
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
                        การฆ่าตัวตาย
                    </Heading>
                    <Box borderRadius='sm' my={8}>
                        แนวทางในการตอบ
                        <Box my={2} ml={8}><Switch id='isReadOnly' isReadOnly size='md' /> : ไม่เคย/ไม่เคยคิด/ไม่เคยมี</Box>
                        <Box my={2} ml={8}><Switch id='isReadOnly' isReadOnly size='md' isChecked colorScheme='pink' /> : เคย/เคยคิด/เคยมี</Box>
                    </Box>

                    <Divider my={{ base: 0, md: 8 }} />

                    <Box my={8}>
                        <FormControl display='flex' alignItems='center' flexDirection={'column'}>
                            <HStack w='full' justify={'space-between'} my={4}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    {QUESTION_ITEMS4[0].label}
                                </FormLabel>
                                <Switch id='email-alerts' colorScheme='pink' size='lg' defaultChecked={value4001} onChange={(e) => setValue4001(e.target.checked)} />
                            </HStack>
                            <HStack w='full' justify={'space-between'} my={4}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    {QUESTION_ITEMS4[1].label}
                                </FormLabel>
                                <Switch id='email-alerts' colorScheme='pink' size='lg' defaultChecked={value4002} onChange={(e) => setValue4002(e.target.checked)} />
                            </HStack>
                            <HStack w='full' justify={'space-between'} my={4}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    {QUESTION_ITEMS4[2].label} <Badge colorScheme='yellow' >ในช่วง 1 เดือนที่ผ่านมา</Badge>
                                </FormLabel>
                                <Switch id='email-alerts' colorScheme='pink' size='lg' defaultChecked={value4003} onChange={(e) => setValue4003(e.target.checked)} />
                            </HStack>
                            <HStack w='full' justify={'space-between'} my={4}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    {QUESTION_ITEMS4[3].label} <Badge colorScheme='yellow' >ในช่วง 1 เดือนที่ผ่านมา</Badge>
                                </FormLabel>
                                <Switch id='email-alerts' colorScheme='pink' size='lg' defaultChecked={value4004} onChange={(e) => setValue4004(e.target.checked)} />
                            </HStack>
                            <HStack w='full' justify={'space-between'} my={4}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    {QUESTION_ITEMS4[4].label} <Badge colorScheme='yellow' >ในช่วง 1 เดือนที่ผ่านมา</Badge>
                                </FormLabel>
                                <Switch id='email-alerts' colorScheme='pink' size='lg' defaultChecked={value4005} onChange={(e) => setValue4005(e.target.checked)} />
                            </HStack>
                            <HStack w='full' justify={'space-between'} my={4}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    {QUESTION_ITEMS4[5].label} <Badge colorScheme='yellow' >ในช่วง 1 เดือนที่ผ่านมา</Badge>
                                </FormLabel>
                                <Switch id='email-alerts' colorScheme='pink' size='lg' defaultChecked={value4006} onChange={(e) => setValue4006(e.target.checked)} />
                            </HStack>
                            <HStack w='full' justify={'space-between'} my={4}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    {QUESTION_ITEMS4[6].label}
                                </FormLabel>
                                <Switch id='email-alerts' colorScheme='pink' size='lg' defaultChecked={value4007} onChange={(e) => setValue4007(e.target.checked)} />
                            </HStack>
                            <HStack w='full' justify={'space-between'} my={4}>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    {QUESTION_ITEMS4[7].label} <Badge colorScheme='red' >ตลอดชีวิตที่ผ่านมา</Badge>
                                </FormLabel>
                                <Switch id='email-alerts' colorScheme='pink' size='lg' defaultChecked={value4008} onChange={(e) => setValue4008(e.target.checked)} />
                            </HStack>

                        </FormControl>










                        {/* NOTE : Display test */}
                        {/* <RadioRowBox label={QUESTION_ITEMS4[0].label} choices={QUESTION_ITEMS4[0].choices} value={value4001} setValue={setValue4001} />
                        <RadioRowBox label={QUESTION_ITEMS4[1].label} choices={QUESTION_ITEMS4[1].choices} value={value4002} setValue={setValue4002} />
                        <RadioRowBox label={QUESTION_ITEMS4[2].label} choices={QUESTION_ITEMS4[2].choices} value={value4003} setValue={setValue4003} />
                        <RadioRowBox label={QUESTION_ITEMS4[3].label} choices={QUESTION_ITEMS4[3].choices} value={value4004} setValue={setValue4004} />
                        <RadioRowBox label={QUESTION_ITEMS4[4].label} choices={QUESTION_ITEMS4[4].choices} value={value4005} setValue={setValue4005} />
                        <RadioRowBox label={QUESTION_ITEMS4[5].label} choices={QUESTION_ITEMS4[5].choices} value={value4006} setValue={setValue4006} />
                        <RadioRowBox label={QUESTION_ITEMS4[6].label} choices={QUESTION_ITEMS4[6].choices} value={value4007} setValue={setValue4007} />
                        <RadioRowBox label={QUESTION_ITEMS4[7].label} choices={QUESTION_ITEMS4[7].choices} value={value4008} setValue={setValue4008} /> */}

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
                                        <Badge>score : {result}/48</Badge>
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
                                                    {result >= 0 && result < 1 ? <b> {`0`}</b> : <>{`0`}</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 0 && result < 1 ? <b>ไม่มีแนวโน้มการฆ่าตัวตายในปัจจุบัน&nbsp;&nbsp;👈</b> : <>ไม่มีแนวโน้มการฆ่าตัวตายในปัจจุบัน</>}
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
                                                    {result >= 1 && result <= 8 ? <b>1 - 8</b> : <>1 - 8</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 1 && result <= 8 ? <b>มีแนวโน้มในการฆ่าตัวตายในปัจจุบัน ระดับน้อย&nbsp;&nbsp;👈</b> : <>มีแนวโน้มในการฆ่าตัวตายในปัจจุบัน ระดับน้อย</>}
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
                                                    {result >= 9 && result <= 16 ? <b>9 - 16</b> : <>9 - 16</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 9 && result <= 16 ? <b>มีแนวโน้มในการฆ่าตัวตายในปัจจุบัน ระดับปานกลาง&nbsp;&nbsp;👈</b> : <>มีแนวโน้มในการฆ่าตัวตายในปัจจุบัน ระดับปานกลาง</>}
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
                                                    {result >= 17 && result <= 50 ? <b>{`> 17`}</b> : <>{`> 17`}</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 17 && result <= 50 ? <b>มีแนวโน้มในการฆ่าตัวตายในปัจจุบัน ระดับรุนแรง&nbsp;&nbsp;👈</b> : <>มีแนวโน้มในการฆ่าตัวตายในปัจจุบัน ระดับรุนแรง</>}
                                                </Flex>
                                            </GridItem>
                                        </>
                                    </Grid>
                                    {result >= 9 ?
                                        <Text mt={16} mb={0} >อยากลองติดต่อ <Badge colorScheme={'purple'}>สายด่วนสุขภาพจิต 1323</Badge> หน่อยไหม โทรฟรี 24 เลยนะ ยังไงเราก็เป็นกำลังใจให้นะ 🫶</Text> :
                                        <Text mt={4} ></Text>
                                    }
                                    {/* {<Box h={10}></Box>} */}

                                </ModalBody>
                                <ModalFooter>
                                    {/* <Link href={'/assessment/assessment3'}>
                                        <a>
                                            <Button mx={4} colorScheme='pink'>แบบประเมินการฆ่าตัวตาย</Button>
                                        </a>
                                    </Link> */}
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

export default Assessment3

