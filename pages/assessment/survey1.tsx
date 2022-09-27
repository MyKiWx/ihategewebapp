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
    Stack,
} from '@chakra-ui/react';
import { doc, setDoc } from 'firebase/firestore';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import FadeIn from 'react-fade-in';
import RadioRowBox from '../../components/question/RadioRowBox';
import { db } from '../../service/firebase.config';
import { QUESTION_ITEMS2, QUESTION_ITEMS5 } from '../../src/data/QUESTION_ITEMS';

// REVIEW : old version use redux
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../app/store';
// import { addAnswer2 } from '../../features/answerFormSurvey/answerSlice';

type Props = {}

const Survery1 = (props: Props) => {

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
    const [answer5, setAnswer5] = useState(() => {
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

    // NOTE : create new variable and assign value from answer2
    const [value2001, setValue2001] = useState<string>(answer5[0])
    const [value2002, setValue2002] = useState<string>(answer5[1])
    const [value2003, setValue2003] = useState<string>(answer5[2])
    const [value2004, setValue2004] = useState<string>(answer5[3])
    const [value2005, setValue2005] = useState<string>(answer5[4])
    const [value2006, setValue2006] = useState<string>(answer5[5])
    const [value2007, setValue2007] = useState<string>(answer5[6])
    const [value2008, setValue2008] = useState<string>(answer5[7])
    const [value2009, setValue2009] = useState<string>(answer5[8])
    const [value2010, setValue2010] = useState<string>(answer5[9])
    const [value2011, setValue2011] = useState<string>(answer5[10])
    const [value2012, setValue2012] = useState<string>(answer5[11])
    const [value2013, setValue2013] = useState<string>(answer5[12])
    const [value2014, setValue2014] = useState<string>(answer5[13])
    const [value2015, setValue2015] = useState<string>(answer5[14])
    const [value2016, setValue2016] = useState<string>(answer5[15])

    // NOTE : create new variable and assign value from answer2
    useEffect(() => {
        setValue2001(answer5[0])
        setValue2002(answer5[1])
        setValue2003(answer5[2])
        setValue2004(answer5[3])
        setValue2005(answer5[4])
        setValue2006(answer5[5])
        setValue2007(answer5[6])
        setValue2008(answer5[7])
        setValue2009(answer5[8])
        setValue2010(answer5[9])
        setValue2011(answer5[10])
        setValue2012(answer5[11])
        setValue2013(answer5[12])
        setValue2014(answer5[13])
        setValue2015(answer5[14])
        setValue2016(answer5[15])
    }, [answer5])

    // NOTE : For handle change
    const [allValue, setAllValue] = useState<string[]>([])
    const [result, setResult] = useState<number>(0)
    const [validate, setValidate] = useState(false)

    function validateAns() {
        if (value2001 === undefined || value2002 === undefined || value2003 === undefined || value2004 === undefined || value2005 === undefined || value2006 === undefined || value2007 === undefined || value2008 === undefined || value2009 === undefined || value2010 === undefined || value2011 === undefined || value2012 === undefined || value2013 === undefined || value2014 === undefined || value2015 === undefined || value2016 === undefined) {
            toast({
                title: "รบกวนตอบคำถามให้ครบทุกข้อด้วยนะคั้บ 🫶",
                status: "warning",
                variant: 'subtle',
                duration: 3000,
                isClosable: true,
            })
        } else {
            setValidate(true);
            setTimeout(() => {
                onOpen()
            }, 500)

            // REVIEW : old version use redux
            // disPatch(addAnswer2([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020]))

            // NOTE : contain value for calculate
            setAllValue([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016])

            // NOTE : For Store data
            setAnswer5([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016])
            localStorage.setItem("answer5", JSON.stringify([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016]));

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
        // disPatch(addAnswer2([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020]))

        // NOTE : contain value for calculate
        setAllValue([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016])
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


    return (
        <>
            <Head>
                <title>แบบสำรวจความเครียด</title>
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
                        แบบสำรวจ
                    </Heading>
                    <Heading
                        size='xl'
                        fontWeight='700'
                        textAlign='match-parent'
                        my={4}
                    >
                        ความเครียด
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
                        <RadioRowBox label={QUESTION_ITEMS5[0].label} choices={QUESTION_ITEMS5[0].choices} value={value2001} setValue={setValue2001} />
                        <RadioRowBox label={QUESTION_ITEMS5[1].label} choices={QUESTION_ITEMS5[1].choices} value={value2002} setValue={setValue2002} />
                        <RadioRowBox label={QUESTION_ITEMS5[2].label} choices={QUESTION_ITEMS5[2].choices} value={value2003} setValue={setValue2003} />
                        <RadioRowBox label={QUESTION_ITEMS5[3].label} choices={QUESTION_ITEMS5[3].choices} value={value2004} setValue={setValue2004} />
                        <RadioRowBox label={QUESTION_ITEMS5[4].label} choices={QUESTION_ITEMS5[4].choices} value={value2005} setValue={setValue2005} />
                        <RadioRowBox label={QUESTION_ITEMS5[5].label} choices={QUESTION_ITEMS5[5].choices} value={value2006} setValue={setValue2006} />
                        <RadioRowBox label={QUESTION_ITEMS5[6].label} choices={QUESTION_ITEMS5[6].choices} value={value2007} setValue={setValue2007} />
                        <RadioRowBox label={QUESTION_ITEMS5[7].label} choices={QUESTION_ITEMS5[7].choices} value={value2008} setValue={setValue2008} />
                        <RadioRowBox label={QUESTION_ITEMS5[8].label} choices={QUESTION_ITEMS5[8].choices} value={value2009} setValue={setValue2009} />
                        <RadioRowBox label={QUESTION_ITEMS5[9].label} choices={QUESTION_ITEMS5[9].choices} value={value2010} setValue={setValue2010} />
                        <RadioRowBox label={QUESTION_ITEMS5[10].label} choices={QUESTION_ITEMS5[10].choices} value={value2011} setValue={setValue2011} />
                        <RadioRowBox label={QUESTION_ITEMS5[11].label} choices={QUESTION_ITEMS5[11].choices} value={value2012} setValue={setValue2012} />
                        <RadioRowBox label={QUESTION_ITEMS5[12].label} choices={QUESTION_ITEMS5[12].choices} value={value2013} setValue={setValue2013} />
                        <RadioRowBox label={QUESTION_ITEMS5[13].label} choices={QUESTION_ITEMS5[13].choices} value={value2014} setValue={setValue2014} />
                        <RadioRowBox label={QUESTION_ITEMS5[14].label} choices={QUESTION_ITEMS5[14].choices} value={value2015} setValue={setValue2015} />
                        <RadioRowBox label={QUESTION_ITEMS5[15].label} choices={QUESTION_ITEMS5[15].choices} value={value2016} setValue={setValue2016} />


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
                                        ส่งคำตอบ
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

                                    <Stack>
                                        <Box w='full'><Center>พวกเรา ขอกล่าวคำว่า</Center></Box>
                                        <Box w='full'><Center>ขอบ</Center></Box>
                                        <Box w='full'><Center>คุณ</Center></Box>
                                        <Box w='full'><Center>ค้าบบบบบบ 💖🫶</Center></Box>
                                    </Stack>

                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={onClose}>ปิด</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                </Container>
            </Box>
        </>
    )
}

export default Survery1

