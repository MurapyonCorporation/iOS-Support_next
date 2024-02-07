'use client'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Button, ButtonGroup, Flex, HStack, Heading, IconButton, Spacer, useColorMode, useColorModeValue } from "@chakra-ui/react"
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
  
  return(
    <Flex as={'nav'} p={{base: 1, md: 2}} pl={{base: "3%", md: "8%"}} bg={bg} color={color} align={"center"}>
      <Link as={NextLink} href="/home">
        <HStack spacing={"10%"}>
          <Heading as="h1" size={{base: "sm", md: "lg"}}>Support</Heading>
          <Heading as="h1" size={{base: "sm", md: "lg"}}>for</Heading>
          <Heading as="h1" size={{base: "sm", md: "lg"}}>iOS</Heading>
        </HStack>
      </Link>
      <Spacer />
      <ButtonGroup gap={{base: 1, md: 5}} px={{md: 5}}>
        <Button colorScheme="teal" size={{base: "sm", md: "md"}} onClick={onClickSignUp}>Sign up</Button>
        <Button colorScheme="messenger" size={{base: "sm", md: "md"}}>Log in</Button>
        <IconButton aria-label="Mode-Toggle" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} size={{base: "sm", md: "md"}} />
      </ButtonGroup>
    </Flex>
  )
}