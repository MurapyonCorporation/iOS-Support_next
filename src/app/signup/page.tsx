'use client'
import { useState } from "react";
import { Box, Card, CardBody, CardFooter, CardHeader, Divider, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Stack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Signup() {
  const [show, setShow] = useState(false)
  const hundleClick = () => setShow(!show)
  const onClickSignUp = () => {alert("ok!")}

  return (
    <Flex align={'center'} justify={'center'} height={"100%"}>
      <Card p={4} w={{ base: "xs", md: "lg" }}>
        <CardHeader>
          <Heading as="h3" size="lg" textAlign="center">Sign Up</Heading>
        </CardHeader>
        <Divider my={4} />
        <CardBody>
          <Stack spacing={6} divider={<StackDivider />}>
            <Box>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents={'none'}>
                    <EmailIcon />
                  </InputLeftElement>
                  <Input type="email" placeholder="xxx@xxx.com"/>
                </InputGroup>                
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents={'none'}>
                    <LockIcon />
                  </InputLeftElement>
                  <Input type={show ? 'text' : 'password'} placeholder="Enter Password"/>
                  <InputRightElement>
                    <IconButton aria-label="view on/off" icon={show ? <ViewOffIcon /> : <ViewIcon />} onClick={hundleClick} />                    
                  </InputRightElement>
                </InputGroup>                
              </FormControl>
            </Box>
            <Box>
              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents={'none'}>
                    <LockIcon />
                  </InputLeftElement>
                  <Input type={show ? 'text' : 'password'} placeholder="Enter Confirm Password"/>
                  <InputRightElement>
                    <IconButton aria-label="view on/off" icon={show ? <ViewOffIcon /> : <ViewIcon />} onClick={hundleClick} />                    
                  </InputRightElement>
                </InputGroup>                
              </FormControl>
            </Box>
          </Stack>
        </CardBody>
        <CardFooter justify={"center"}>
          <PrimaryButton colorScheme="red" size={{ base: "md", md: "lg"}} onClick={onClickSignUp}>サインアップ</PrimaryButton>
        </CardFooter>
      </Card>
    </Flex> 
  )
}