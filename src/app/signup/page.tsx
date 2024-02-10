'use client'
import { Box, Divider, Flex, Heading, Stack, useColorModeValue } from "@chakra-ui/react";

export default function Signup() {
  const bg = useColorModeValue('white', 'black')
  return (
    <Flex align={'center'} justify={'center'} height={'100vh'}>
      <Box bg={bg} w={'sm'} p={4} borderRadius={'md'} shadow={'md'}>
        <Heading as="h1" size="lg" textAlign="center">サインアップ</Heading>
        <Divider my={4} />
        <Stack spacing={6} p={4} px={10}></Stack>
      </Box>
    </Flex>
  )
}