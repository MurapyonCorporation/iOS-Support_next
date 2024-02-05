'use client'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup, Flex, HStack, Heading, IconButton, Spacer, useColorMode, useColorModeValue } from "@chakra-ui/react"

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('red.900', 'red.200')
  const color = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  
  return(
    <Flex as="nav" p={{base: 1, md: 2}} pl={{base: "5%", md: "8%"}} bg={bg} color={color} align="center">
      <Box h="full">
        <HStack spacing="10%">
          <Heading as="h1" size={{base: "md", md: "lg"}}>Support</Heading>
          <Heading as="h1" size={{base: "md", md: "lg"}}>for</Heading>
          <Heading as="h1" size={{base: "md", md: "lg"}}>iOS</Heading>
        </HStack>
      </Box>
      <Spacer />
      <ButtonGroup gap={{base: 3, md: 5}} px={{base: 3, md: 5}}>
        <IconButton aria-label="Mode-Toggle" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} size={{base: "sm", md: "md"}} />
        <Button colorScheme="teal" size={{base: "sm", md: "md"}}>Sign up</Button>
        <Button colorScheme="messenger" size={{base: "sm", md: "md"}}>Log in</Button>
      </ButtonGroup>
    </Flex>
  )
}