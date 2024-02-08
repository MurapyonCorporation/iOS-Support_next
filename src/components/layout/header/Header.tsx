'use client'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Button, ButtonGroup, Flex, Heading, IconButton, Spacer, useColorMode, useColorModeValue, Stack } from "@chakra-ui/react"
import { useRouter } from "next/navigation";
import NextLink from "next/link";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const bg = useColorModeValue('red.900', 'red.200')
  const color = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')

  const router = useRouter()

  const onClickSignUp = () => {
    router.push('/signup')
  }

  const onClickLogIn = () => {
    router.push('/login')
  }  

  return(
    <Flex as={'nav'} p={{base: 1, md: 2}} pl={{base: "3%", md: "8%"}} bg={bg} color={color}>
      <Link as={NextLink} href='/' _hover={{textDecoration: 'none'}} >
        <Heading as="h1" size={{base: "md", md: "lg"}}>App iOS</Heading>
      </Link>
      <Spacer />
      <ButtonGroup gap={{base: 1, md: 5}} px={{md: 5}}>
        <Button colorScheme="teal" size={{base: "sm", md: "md"}} onClick={onClickSignUp}>Sign up</Button>
        <Button colorScheme="messenger" size={{base: "sm", md: "md"}} onClick={onClickLogIn}>Log in</Button>
        <IconButton aria-label="Mode-Toggle" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} size={{base: "sm", md: "md"}} />
      </ButtonGroup>
    </Flex>
  )
}