import { Box, Button, ButtonGroup, Flex, HStack, Heading, Spacer } from "@chakra-ui/react"

export const Header = () => {
  const onClickSignUp = () => {}

  return(
    <Flex as="nav" p={{base: 1, md: 2}} pl={{base: "5%", md: "8%"}} bg="red.300" color="blackAlpha.900" align="center">
      <Box h="full">
        <HStack spacing="10%">
          <Heading as="h1" size={{base: "md", md: "lg"}}>Support</Heading>
          <Heading as="h1" size={{base: "md", md: "lg"}}>for</Heading>
          <Heading as="h1" size={{base: "md", md: "lg"}}>iOS</Heading>
        </HStack>
      </Box>
      <Spacer />
      <ButtonGroup gap={10} px={{base: 10, md: 20}}>
        <Button colorScheme="teal" size={{base: "sm", md: "md"}} onClick={onClickSignUp}>Sign up</Button>
        <Button colorScheme="messenger" size={{base: "sm", md: "md"}}>Log in</Button>
      </ButtonGroup>
    </Flex>
  )
}