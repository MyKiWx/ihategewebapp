import { Badge, Box, Button, Center, Container, Flex, Heading, SimpleGrid, Stack, Text, useColorMode, useColorModeValue, VStack, Image, chakra, VisuallyHidden, Divider } from '@chakra-ui/react'
import Link from 'next/link';
import React, { ReactNode, useState } from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

type Props = {}

export const AboutUsComponent = (props: Props) => {

    const contentCoverBGColor = useColorModeValue('#f7f5fa', 'none');
    const contentSubHeadingColor = useColorModeValue('blackAlpha.400', 'whiteAlpha.700');
    const contentTextColor = useColorModeValue('blackAlpha.900', 'whiteAlpha.900');

    return (
        <>
            <Box bg={'white'} pt={'70px'}>
                <Flex align={'center'} justify={'center'}>
                    <Box
                        w={'full'}

                        className={'gradient'}
                    >
                        <Box
                            bg={'rgba(0,0,0,.25)'}
                            backdropFilter="saturate(180%) blur(20px)" backdropBlur="6px"
                            py={'40px'}
                        >
                            <Center>
                                <Text fontSize={'24px'}>
                                    🦋
                                </Text>
                            </Center>
                            <Center mt={'10px'} mb={'10px'}>
                                <Heading
                                    color='white'
                                    fontFamily={'Sarabun, sans-serif'}
                                >
                                    สมาชิกร่วมชะตากรรม
                                </Heading>
                            </Center>

                            <Text
                                color={'whiteAlpha.800'}
                                fontSize='md'
                                px={{ base: 2, md: 'auto' }}
                                textAlign='center'
                                lineHeight={'26px'}
                                fontFamily={'Sarabun, sans-serif'}
                            >
                                สมาชิกในทีมมีทั้งหมด 9 คน โดยแบ่งเป็นทำงานเอกสาร 5 คน งานพัฒนาเว็บแอพ 4 คน
                            </Text>

                            <Center>
                                <Text>

                                </Text>
                            </Center>
                        </Box>
                    </Box>

                </Flex>
            </Box>
            <Box>
                <Container maxW='container.lg' my={12}>
                    <Heading
                        size={'xl'}
                        color={contentSubHeadingColor}
                        my={8}
                    >
                        # ทีมเดฟ
                    </Heading>


                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 2, md: 10 }} >
                        <BlockProfile
                            name={'ชัยวัฒน์ จันทร์ชาลี'}
                            job={'Full-Stack Developer & Designer'}
                            pic={'profile'}
                            nameColor={'#485ab5'}
                            linkin={'https://www.linkedin.com/in/chaiwat-janchalee-51a280251/'}
                            github={'https://github.com/MyKiWx'}
                            instagram={'https://www.instagram.com/keeeeeeeeeeeeeeeeeeeeeeeeeeeeu/'}
                            mail=''
                        />
                        <BlockProfile
                            name={'ณัฏฐพงษ์ ฐานะวัน'}
                            job={'Back-end Developer'}
                            pic={'dewProfile'}
                            nameColor={'#23a6d5'}
                            linkin={''}
                            github={'https://github.com/dewmonk'}
                            instagram={'https://www.instagram.com/deww_natthaphong/'}
                        />
                        {/* <BlockProfile name={''} job={''} pic={''} nameColor={'#'} /> */}
                        <BlockProfile name={'ศุภชัย ยะราไสย์'} job={'Back-end Developer'} pic={'ohmProfile'} nameColor={'#ee7752'} />
                        <BlockProfile name={'จักรพรรดิ์ บุญวิรัตน์'} job={'Designer'} pic={'bosProfile'} nameColor={'#cc7a22'} />
                    </SimpleGrid>
                    <Divider my={10} />
                    <Heading
                        size={'xl'}
                        color={contentSubHeadingColor}
                        my={8}
                    >
                        # ทีมเอกสาร
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 2, md: 10 }} >
                        <BlockProfile name={'ชานน วิริยธนชิต'} job={'รายงานบทที่ 2'} pic={'nonProfile'} nameColor={'#C56E90'} />
                        <BlockProfile name={'ณัฐวุฒิ แจ้งอรุณ'} job={'รายงานบทที่ 1, 4'} pic={'nutProfile'} nameColor={'#957DAD'} />
                        <BlockProfile name={'ติณณภพ มารวิชัย'} job={'รายงานบทที่ 1, 4'} pic={'poProfile'} nameColor={'#DEB3DF'} />
                        <BlockProfile name={'ปริญญา ชาบุญเรือง'} job={'รายงานบทที่ 3'} pic={'joProfile'} nameColor={'#C56E90'} />
                        <BlockProfile name={'ทฤษฏี จิรลักษณวงศ์'} job={'รายงานบทที่ 3'} pic={'baseProfile'} nameColor={'#A4DEAD'} />
                    </SimpleGrid>

                </Container>
            </Box>
            {/* <Box h={'150vh'}></Box> */}

        </>
    )
}

export default AboutUsComponent


interface BlockProfileProps {
    name: string,
    job: string,
    pic: string,
    nameColor: string,
    linkin?: string,
    github?: string,
    instagram?: string,
    mail?: string
}


export const BlockProfile = (props: BlockProfileProps) => {
    return (
        <>
            <Box
                w='full'
                // h={'450px'}
                bg={'#ededfd'}
                borderRadius={'20px'}
                p={'30px'}
                transition='all 200ms ease'
                position={'relative'}
                shadow='md'
                zIndex={0}

                _hover={{
                    // bg: '#d7d6f1',
                    transition: 'all 200ms ease',
                    _before: {
                        content: '""',
                        background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                        position: 'absolute',
                        top: '-1px',
                        left: '-1px',
                        backgroundSize: '400%',
                        zIndex: -1,
                        filter: 'blur(5px)',
                        width: 'calc(100% + 2px)',
                        height: 'calc(100% + 2px)',
                        animation: 'glowing 20s linear infinite',
                        transition: 'opacity .3s ease-in-out',
                        borderRadius: '20px',
                    }
                }}
                // _before= {{
                //     content: '""',
                //     background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
                //     position: 'absolute',
                //     top: '-1px',
                //     left: '-1px',
                //     backgroundSize: '400%',
                //     zIndex: -1,
                //     filter: 'blur(5px)',
                //     width: 'calc(100% + 2px)',
                //     height: 'calc(100% + 2px)',
                //     animation: 'glowing 20s linear infinite',
                //     transition: 'opacity .3s ease-in-out',
                //     borderRadius: '20px',
                // }}
                _after={{
                    content: '""',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: '20px',
                    background: 'white',
                    zIndex: -1,
                    bg: 'rgba(255,255,257,.98)',
                    backdropFilter: "saturate(180%) blur(20px)",
                    backdropBlur: "6px",

                }}

            >
                <Box
                    w={'160px'}
                    h={'160px'}
                    borderRadius={'100px'}
                    overflow='hidden'
                    shadow={'sm'}
                    // pointerEvents={'none'}
                    transition='all 200ms ease'
                    position='absolute'
                    _hover={{
                        borderRadius: '4px',
                        transition: 'all 800ms ease',
                        // w: '245px',
                        h: '100%'
                    }}
                >
                    <Image src={`/${props.pic}.jpg`} w={'100%'}></Image>
                </Box>
                <Text
                    fontSize='2xl'
                    mt={'240px'}
                    mb={'10px'}
                    fontWeight='900'
                    // color={'#485ab5'}
                    color={props.nameColor}
                    fontFamily="Sarabun, sans-serif"
                >
                    {props.name}
                </Text>
                <Text
                    color={'#333'}
                    fontSize='md'
                    lineHeight={'24px'}
                    fontFamily="Sarabun, sans-serif"
                >
                    นักศึกษาคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น
                </Text>
                <Text
                    color={'#333'}
                    mt={2}
                    fontSize='md'
                    lineHeight={'24px'}
                    fontFamily="Sarabun, sans-serif"
                >
                    <Badge colorScheme='purple'>หน้าที่งาน</Badge> : {props.job}
                </Text>

                {/* TODO : Add social links */}
                <Stack direction={'row'} spacing={6} justify='center' mt={6}>
                    {props.linkin && <SocialButton label={'Linkedin'} href={props.linkin ?? ''}>
                        <FaLinkedin />
                    </SocialButton>}
                    {props.github && <SocialButton label={'Github'} href={props.github ?? ''}>
                        <FaGithub />
                    </SocialButton>}
                    {props.instagram && <SocialButton label={'Instagram'} href={props.instagram ?? ''}>
                        <FaInstagram />
                    </SocialButton>}

                </Stack>

            </Box>
        </>

    )
}
const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};