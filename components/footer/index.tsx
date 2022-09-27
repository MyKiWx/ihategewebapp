import {
    Box,
    chakra,
    Container,
    Heading,
    // Link,
    Stack,
    Text,
    Tooltip,
    useColorModeValue,
    VisuallyHidden,
    Image,
    Center,
    Flex,
    Icon,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
// import { TbBrandNextjs } from 'react-icons/Tb';
// import { SiFirebase, SiTypescript } from 'react-icons/Si';
// import { SiChakraui } from 'react-icons/Si';
import { ReactNode } from 'react';
import Link from 'next/link';

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

export default function SmallCentered() {
    return (
        <Box
            // bg={useColorModeValue('gray.50', 'gray.900')}
            bg={'#171a2e'}
            // color={useColorModeValue('gray.700', 'gray.200')}
            color={'white'}
        >

            <Container
                as={Stack}
                maxW={'container.lg'}
                py={8}
                spacing={4}
                justify={'center'}
                align={'center'}>

                <Box
                    h={'150px'}
                    pointerEvents='none'
                >
                    <Image h='full' src='/logoFinalDark.png' alt='Dan Abramov' />

                </Box>

                <Stack direction={'row'} spacing={8}>
                    <Link href={'/'}><a>หนัาหลัก</a></Link>
                    <Link href={'/stress'}><a>ความเครียด</a></Link>
                    <Link href={'/assessment'}><a>แบบประเมิน</a></Link>
                    <Link href={'/aboutus'}><a>เกี่ยวกับเรา</a></Link>
                </Stack>
            </Container>

            <Box
                // borderTopWidth={1}
                // borderStyle={'solid'}
                // borderColor={useColorModeValue('gray.200', 'gray.700')}
                bg={'#0f0f1a'}
            >
                <Container
                    as={Stack}
                    maxW={'container.lg'}
                    py={2}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>This website made by NextJS, TypeScript, Chakra UI and Firebase</Text>

                    {/* TODO : add tooltip */}
                    <Stack direction={'row'} spacing={6}>
                        {/* <SocialButton label={'NextJS'} href={'https://nextjs.org/'}>
                            <TbBrandNextjs />
                        </SocialButton>
                        <SocialButton label={'TypeScript'} href={'https://www.typescriptlang.org/'}>
                            <SiTypescript />
                        </SocialButton>
                        <SocialButton label={'ChakraUI'} href={'https://chakra-ui.com/'}>
                            <SiChakraui />
                        </SocialButton>
                        <SocialButton label={'SiFirebase'} href={'https://firebase.google.com/'}>
                            <SiFirebase />
                        </SocialButton> */}
                    </Stack>
                </Container>
            </Box>
            <Box bg='white' color='black'>
                <Center>
                    <Flex className="developBy" direction={{base: 'column', md: 'row'}} justify={'center'} >
                        <FaCode style={{ display: 'inline-block', alignSelf: 'center' }} />
                        <span style={{textAlign: 'center'}}>&nbsp;Develop by&nbsp;</span>
                        <b><i className="developByAnimateCharcter" style={{textAlign: 'center'}}>Chaiwat x Natthaphong x Jakkapat x Suphachai</i></b>
                    </Flex>
                </Center>
            </Box>
        </Box>
    );
}