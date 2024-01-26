import { Flex, Heading } from "@chakra-ui/react"


export const Header = () => {
  return(
    <>
      <Flex as="nav" bg="red.300" color="blackAlpha.900" align="center">
        <Flex align="center">
          <Heading as="h1" size={{ base: "lg", md: "xl"}}>Support for iOS</Heading>
        </Flex>
      </Flex>
    </>
  )
}