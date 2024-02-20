'use client'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Button, ButtonGroup, Flex, Heading, IconButton, Spacer, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { MenuIconButton } from "@/components/atoms/button/MenuIconButton";
import { MenuDrawer } from "@/components/molecules/MenuDrawer";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";

export const Header = () => {
  const router = useRouter()

  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('red.900', 'red.200')
  const color = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const PushSignUpPage = () => {
    router.push('/signup')
  }

  const PushLogInPage = () => {
    router.push('/login')
  }  

  return(
    <>
      <Flex as={'nav'} p={{base: 1, md: 2}} pl={{base: "3%", md: "8%"}} bg={bg} color={color}>
        <Link as={NextLink} href='/' _hover={{textDecoration: 'none'}} >
          <Heading as="h1" size={{base: "md", md: "lg"}}>App iOS</Heading>
        </Link>
        <Spacer />
        <ButtonGroup gap={{base: 1, md: 5}} px={{md: 5}} display={{ base: 'none', md: 'flex'}}>
          <PrimaryButton colorScheme="teal" size={{base: "sm", md: "md"}} onClick={PushSignUpPage}>Sign up</PrimaryButton>
          <PrimaryButton colorScheme="messenger" size={{base: "sm", md: "md"}} onClick={PushLogInPage}>Log in</PrimaryButton>
        </ButtonGroup>
        <ButtonGroup gap={{base: 1, md: 5}} px={{md: 5}}>
          <IconButton aria-label="Mode-Toggle" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} size={{base: "sm", md: "md"}} />
          <MenuIconButton onOpen={onOpen}/>
        </ButtonGroup>
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} onClickSignUp={PushSignUpPage} onClickLogIn={PushLogInPage} />      
    </>
  )
}