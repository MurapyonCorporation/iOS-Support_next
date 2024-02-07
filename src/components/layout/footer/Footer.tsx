'use client'
import { Center, HStack, Text, useColorModeValue } from "@chakra-ui/react"

export const Footer = () => {
  const bg = useColorModeValue('gray.900', 'gray.200')
  const color = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  
  return(
    <Center p={{base: 2, md: 3}} bg={bg} color={color}>
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