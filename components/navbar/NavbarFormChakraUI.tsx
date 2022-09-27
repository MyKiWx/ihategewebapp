import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    // Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Container,
    useColorMode,
    Tooltip,
    Image,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons';
import { FaBroom } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function WithSubnavigation() {
    // For responsive navbar when screen is small
    const { isOpen, onToggle } = useDisclosure();

    // For button color change when clicked
    const { colorMode, toggleColorMode } = useColorMode()

    const navBarBoxBGColor = useColorModeValue('rgba(255,255,257,.95)', 'rgba(26, 32, 44, 0.85)')

    return (
        <Box
            w='full'
            position="fixed"
            bg={navBarBoxBGColor}
            backdropFilter="saturate(180%) blur(20px)" backdropBlur="6px"
            color={useColorModeValue('gray.600', 'white')}
            h={'70px'}
            px={{ base: 4 }}
            borderBottom={1}
            zIndex={1200}
        >
            <Container
                maxW='container.lg'
                h='full'
            >
                <Flex h='full' align={'center'}>
                    <Flex
                        flex={{ base: 1, md: 'auto' }}
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                        <Link href={'/'}>
                            <a>
                                <Tooltip label='กลับสู่หน้าหลัก'>
                                    <Box w={'100px'} h={'37px'}>
                                        <Image h='full' src='/iconFinalWhite.png' alt='Dan Abramov' />
                                    </Box>
                                </Tooltip>
                            </a>
                        </Link>

                        <Flex display={{ base: 'none', md: 'flex' }} ml={6}>
                            <DesktopNav />
                        </Flex>
                    </Flex>
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={4}>

                        <Link href={'/assessment'}>
                            <a>
                                <Tooltip label='เริ่มทำแบบประเมิน 🚀'>
                                    <Button
                                        display={{ base: 'none', md: 'inline-flex' }}
                                        fontSize={'sm'}
                                        fontWeight={600}
                                        color={'white'}
                                        bg={'pink.400'}
                                        size='md'
                                        _hover={{
                                            bg: 'pink.300',
                                        }}
                                    >
                                        ทำแบบประเมิน
                                    </Button>
                                </Tooltip>
                            </a>
                        </Link>

                        <Link href={'/assessment'}>
                            <a>
                                <Button
                                    display={{ base: 'block', md: 'none' }}
                                    fontSize={'md'}
                                    fontWeight={600}
                                    color={'white'}
                                    bg={'pink.400'}
                                    size='md'
                                    _hover={{
                                        bg: 'pink.300',
                                    }}
                                >
                                    <FaBroom />
                                </Button>
                            </a>
                        </Link>

                        <Tooltip label='กำลังพัฒนาคั้บ 🙏'>
                            <Button
                                // onClick={toggleColorMode}
                                transition='all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s'
                                borderRadius={'md'}
                                display={{ base: 'none', md: 'block' }}
                                p={0}
                                _hover={{
                                    textDecoration: 'none',
                                    transition: 'all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s',
                                    // color: linkHoverColor,
                                    // bg: linkBgHoverColor,
                                }}

                            >
                                {colorMode == 'light' ? (

                                    <Flex
                                        w='full'
                                        h='full'
                                        align='center'
                                        justify='center'
                                        transition='all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s'
                                        opacity='0.6'
                                        _hover={{
                                            opacity: '1',
                                            transition: 'all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s',
                                            transform: 'rotate(-360deg)',
                                        }}
                                    >
                                        <MoonIcon />
                                    </Flex>
                                ) : (
                                    <Flex
                                        w='full'
                                        h='full'
                                        align='center'
                                        justify='center'
                                        transition='all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s'
                                        opacity='0.6'
                                        _hover={{
                                            opacity: '1',
                                            transition: 'all 600ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s',
                                            transform: 'rotate(-360deg)',
                                        }}
                                    >
                                        <SunIcon />
                                    </Flex>
                                )}
                            </Button>
                        </Tooltip>
                    </Stack>
                </Flex>
            </Container>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    const router = useRouter();

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                p={2}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={navItem.href && (router.pathname.split('/')[1] == navItem.href.split('/')[1] ? 'pink.500' : linkColor)}
                                bg={navItem.href && (router.pathname.split('/')[1] == navItem.href.split('/')[1] ? 'pink.50' : 'transparent')}
                                transition={'all 300ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s'}
                                borderRadius='lg'
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                    transition: 'all 300ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s',
                                    bg: 'pink.50'
                                }}
                                _active={{
                                    bg: 'pink.100',
                                    border: 'none'
                                }}
                            >
                                <Link
                                    href={navItem.href ?? '#'}
                                >
                                    <a>
                                        {navItem.label} {navItem.children && <ChevronDownIcon />}
                                    </a>
                                </Link>
                            </Box>
                        </PopoverTrigger>
                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href ?? '#'}
        >
            <a>
                <Box
                    role={'group'}
                    display={'block'}
                    p={2}
                    rounded={'md'}
                    _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
                >
                    <Stack direction={'row'} align={'center'}>
                        <Box>
                            <Text
                                transition={'all .3s ease'}
                                _groupHover={{ color: 'pink.400' }}
                                fontWeight={500}>
                                {label}
                            </Text>
                            <Text fontSize={'sm'}>{subLabel}</Text>
                        </Box>
                        <Flex
                            transition={'all .3s ease'}
                            transform={'translateX(-10px)'}
                            opacity={0}
                            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                            justify={'flex-end'}
                            align={'center'}
                            flex={1}>
                            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                        </Flex>
                    </Stack>
                </Box>
            </a>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Link
                href={href ?? '#'}
            >
                <a>
                    <Flex
                        py={2}
                        justify={'space-between'}
                        align={'center'}
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        <Text
                            fontWeight={600}
                            color={useColorModeValue('gray.600', 'gray.200')}>
                            {label}
                        </Text>
                        {children && (
                            <Icon
                                as={ChevronDownIcon}
                                transition={'all .25s ease-in-out'}
                                transform={isOpen ? 'rotate(180deg)' : ''}
                                w={6}
                                h={6}
                            />
                        )}
                    </Flex>
                </a>
            </Link>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link href={child.href ?? '#'} key={child.label} >
                                <a>
                                    <Box
                                        py={2}
                                        children={child.label}
                                    />
                                </a>
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: '🌊 ความเครียด',
        // children: [
        //     // {
        //     //     label: 'coming soon..',
        //     //     // subLabel: 'Trending Design to inspire you',
        //     //     // href: '/stress/aboutstress1',
        //     // },
        //     // {
        //     //     label: 'รูปแบบ ลักษณะต่างๆ ของความเครียด',
        //     //     // subLabel: 'Up-and-coming Designers',
        //     //     href: '#',
        //     // },
        //     // {
        //     //     label: 'วิธีการรักษา อาการข้างเคียง',
        //     //     // subLabel: 'Up-and-coming Designers',
        //     //     href: '#',
        //     // },
        //     // {
        //     //     label: 'ผลดีของการไม่เครียด',
        //     //     // subLabel: 'Up-and-coming Designers',
        //     //     href: '#',
        //     // },
        // ],
        href: '/stress',
    },
    {
        label: '📃 แบบประเมิน',
        children: [
            {
                label: 'แบบประเมินความเครียด',
                // subLabel: 'Find your dream design job',
                href: '/assessment/assessment1',
            },
            {
                label: 'แบบประเมินโรคซึมเศร้า',
                // subLabel: 'An exclusive list for contract work',
                href: '/assessment/assessment2',
            },
            {
                label: 'แบบประเมินการฆ่าตัวตาย',
                // subLabel: 'An exclusive list for contract work',
                href: '/assessment/assessment3',
            },
            {
                label: 'แบบสำรวจความเครียด',
                // subLabel: 'An exclusive list for contract work',
                href: '/assessment/survey1',
            },
        ],
        href: '/assessment',
    },
    {
        label: '👋 เกี่ยวกับเรา',
        href: '/aboutus',
    },
    // {
    //     label: 'Hire Designers',
    //     href: '#',
    // },
];