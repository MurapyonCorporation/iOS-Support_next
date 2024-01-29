import { Center, HStack, Text } from "@chakra-ui/react"

export const Footer = () => {  
  return(
    <Center w="full" p={{base: 1, md: 2}} bg="gray.900" color="whiteAlpha.900">
      <HStack spacing="10%">
        <HStack spacing="3%">
          <Text fontSize={{base: "xs", md: "sm"}} >Copyright©</Text>
          <Text fontSize={{base: "xs", md: "sm"}} >MurapyonCorp</Text>
        </HStack>
        <HStack spacing="3%">
          <Text fontSize={{base: "xs", md: "sm"}} >All</Text>
          <Text fontSize={{base: "xs", md: "sm"}} >right</Text>
          <Text fontSize={{base: "xs", md: "sm"}} >reserved.</Text>
        </HStack>
      </HStack>
    </Center>
  )
}