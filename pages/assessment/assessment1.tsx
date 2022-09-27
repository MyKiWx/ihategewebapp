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
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import FadeIn from 'react-fade-in';
import RadioRowBox from '../../components/question/RadioRowBox';
import { db } from '../../service/firebase.config';
import { QUESTION_ITEMS2 } from '../../src/data/QUESTION_ITEMS';
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import Head from 'next/head';

// REVIEW : old version use redux
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../app/store';
// import { addAnswer2 } from '../../features/answerFormSurvey/answerSlice';

type Props = {}

const Assessment1 = (props: Props) => {

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
    const [answer2, setAnswer2] = useState(() => {
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

    // NOTE : create new variable and assign value from answer2
    const [value2001, setValue2001] = useState<string>(answer2[0])
    const [value2002, setValue2002] = useState<string>(answer2[1])
    const [value2003, setValue2003] = useState<string>(answer2[2])
    const [value2004, setValue2004] = useState<string>(answer2[3])
    const [value2005, setValue2005] = useState<string>(answer2[4])
    const [value2006, setValue2006] = useState<string>(answer2[5])
    const [value2007, setValue2007] = useState<string>(answer2[6])
    const [value2008, setValue2008] = useState<string>(answer2[7])
    const [value2009, setValue2009] = useState<string>(answer2[8])
    const [value2010, setValue2010] = useState<string>(answer2[9])
    const [value2011, setValue2011] = useState<string>(answer2[10])
    const [value2012, setValue2012] = useState<string>(answer2[11])
    const [value2013, setValue2013] = useState<string>(answer2[12])
    const [value2014, setValue2014] = useState<string>(answer2[13])
    const [value2015, setValue2015] = useState<string>(answer2[14])
    const [value2016, setValue2016] = useState<string>(answer2[15])
    const [value2017, setValue2017] = useState<string>(answer2[16])
    const [value2018, setValue2018] = useState<string>(answer2[17])
    const [value2019, setValue2019] = useState<string>(answer2[18])
    const [value2020, setValue2020] = useState<string>(answer2[19])

    // NOTE : create new variable and assign value from answer2
    useEffect(() => {
        setValue2001(answer2[0])
        setValue2002(answer2[1])
        setValue2003(answer2[2])
        setValue2004(answer2[3])
        setValue2005(answer2[4])
        setValue2006(answer2[5])
        setValue2007(answer2[6])
        setValue2008(answer2[7])
        setValue2009(answer2[8])
        setValue2010(answer2[9])
        setValue2011(answer2[10])
        setValue2012(answer2[11])
        setValue2013(answer2[12])
        setValue2014(answer2[13])
        setValue2015(answer2[14])
        setValue2016(answer2[15])
        setValue2017(answer2[16])
        setValue2018(answer2[17])
        setValue2019(answer2[18])
        setValue2020(answer2[19])
    }, [answer2])

    // NOTE : For handle change
    const [allValue, setAllValue] = useState<string[]>([])
    const [result, setResult] = useState<number>(0)
    const [validate, setValidate] = useState(false)

    function validateAns() {
        if (value2001 === undefined || value2002 === undefined || value2003 === undefined || value2004 === undefined || value2005 === undefined || value2006 === undefined || value2007 === undefined || value2008 === undefined || value2009 === undefined || value2010 === undefined || value2011 === undefined || value2012 === undefined || value2013 === undefined || value2014 === undefined || value2015 === undefined || value2016 === undefined || value2017 === undefined || value2018 === undefined || value2019 === undefined || value2020 === undefined) {
            toast({
                title: "รบกวนตอบคำถามให้ครบทุกข้อด้วยนะคั้บ 🫶",
                status: "warning",
                variant: 'subtle',
                duration: 3000,
                isClosable: true,
            })
        } else {
            setValidate(true);
            setDataTest();
            setTimeout(() => {
                onOpen()
            }, 500)

            // REVIEW : old version use redux
            // disPatch(addAnswer2([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020]))

            // NOTE : contain value for calculate
            setAllValue([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020])

            // NOTE : For Store data
            setAnswer2([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020])
            localStorage.setItem("answer2", JSON.stringify([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020]));

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
        setAllValue([value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020])
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
            assessment1 : [value2001, value2002, value2003, value2004, value2005, value2006, value2007, value2008, value2009, value2010, value2011, value2012, value2013, value2014, value2015, value2016, value2017, value2018, value2019, value2020]
        }, { merge: true });
    }

    return (
        <>
                    <Head>
                <title>แบบประเมินความเครียด</title>
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
                        <RadioRowBox label={QUESTION_ITEMS2[0].label} choices={QUESTION_ITEMS2[0].choices} value={value2001} setValue={setValue2001} />
                        <RadioRowBox label={QUESTION_ITEMS2[1].label} choices={QUESTION_ITEMS2[1].choices} value={value2002} setValue={setValue2002} />
                        <RadioRowBox label={QUESTION_ITEMS2[2].label} choices={QUESTION_ITEMS2[2].choices} value={value2003} setValue={setValue2003} />
                        <RadioRowBox label={QUESTION_ITEMS2[3].label} choices={QUESTION_ITEMS2[3].choices} value={value2004} setValue={setValue2004} />
                        <RadioRowBox label={QUESTION_ITEMS2[4].label} choices={QUESTION_ITEMS2[4].choices} value={value2005} setValue={setValue2005} />
                        <RadioRowBox label={QUESTION_ITEMS2[5].label} choices={QUESTION_ITEMS2[5].choices} value={value2006} setValue={setValue2006} />
                        <RadioRowBox label={QUESTION_ITEMS2[6].label} choices={QUESTION_ITEMS2[6].choices} value={value2007} setValue={setValue2007} />
                        <RadioRowBox label={QUESTION_ITEMS2[7].label} choices={QUESTION_ITEMS2[7].choices} value={value2008} setValue={setValue2008} />
                        <RadioRowBox label={QUESTION_ITEMS2[8].label} choices={QUESTION_ITEMS2[8].choices} value={value2009} setValue={setValue2009} />
                        <RadioRowBox label={QUESTION_ITEMS2[9].label} choices={QUESTION_ITEMS2[9].choices} value={value2010} setValue={setValue2010} />
                        <RadioRowBox label={QUESTION_ITEMS2[10].label} choices={QUESTION_ITEMS2[10].choices} value={value2011} setValue={setValue2011} />
                        <RadioRowBox label={QUESTION_ITEMS2[11].label} choices={QUESTION_ITEMS2[11].choices} value={value2012} setValue={setValue2012} />
                        <RadioRowBox label={QUESTION_ITEMS2[12].label} choices={QUESTION_ITEMS2[12].choices} value={value2013} setValue={setValue2013} />
                        <RadioRowBox label={QUESTION_ITEMS2[13].label} choices={QUESTION_ITEMS2[13].choices} value={value2014} setValue={setValue2014} />
                        <RadioRowBox label={QUESTION_ITEMS2[14].label} choices={QUESTION_ITEMS2[14].choices} value={value2015} setValue={setValue2015} />
                        <RadioRowBox label={QUESTION_ITEMS2[15].label} choices={QUESTION_ITEMS2[15].choices} value={value2016} setValue={setValue2016} />
                        <RadioRowBox label={QUESTION_ITEMS2[16].label} choices={QUESTION_ITEMS2[16].choices} value={value2017} setValue={setValue2017} />
                        <RadioRowBox label={QUESTION_ITEMS2[17].label} choices={QUESTION_ITEMS2[17].choices} value={value2018} setValue={setValue2018} />
                        <RadioRowBox label={QUESTION_ITEMS2[18].label} choices={QUESTION_ITEMS2[18].choices} value={value2019} setValue={setValue2019} />
                        <RadioRowBox label={QUESTION_ITEMS2[19].label} choices={QUESTION_ITEMS2[19].choices} value={value2020} setValue={setValue2020} />

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
                                        <Badge>score : {result}/60</Badge>
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
                                                    {result >= 0 && result <= 5 ? <b>0 - 5</b> : <>0 - 5</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 0 && result <= 5 ? <b>ไม่แน่ใจในคำถาม&nbsp;&nbsp;👈</b> : <>ไม่แน่ใจในคำถาม</>}
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
                                                    {result >= 6 && result <= 17 ? <b>6 - 17</b> : <>6 - 17</>}
                                                </Flex>
                                            </GridItem>
                                            <GridItem rowSpan={1} colSpan={8} bg=''>
                                                <Flex
                                                    w='full'
                                                    h='full'
                                                    align='center'
                                                >
                                                    {result >= 6 && result <= 17 ? <b>ปกติ/ไม่เครียด&nbsp;&nbsp;👈</b> : <>ปกติ/ไม่เครียด</>}
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
                                    {result >= 26 ?
                                        <Text mt={8} mb={2} >อยากลองทำแบบประเมินโรคซึมเศร้าหน่อยไหม ? (เนื่องจากการประเมิน คุณมีโอกาสเป็น <Badge colorScheme={'purple'}>โรคซึมเศร้า</Badge>)</Text> :
                                        <Text mt={4} ></Text>
                                    }

                                </ModalBody>
                                <ModalFooter>
                                    <Link href={'/assessment/assessment2'}>
                                        <a>
                                            <Button mx={4} colorScheme='pink'>แบบประเมินโรคซึมเศร้า</Button>
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

export default Assessment1

