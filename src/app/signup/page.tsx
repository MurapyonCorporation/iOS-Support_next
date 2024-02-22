'use client'
import { useEffect, useState } from "react";
import { ImUser } from "react-icons/im";
import { Box, Card, CardBody, CardFooter, CardHeader, Divider, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Stack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { InputFormBox } from "@/components/molecules/InputFormBox";

export default function Signup() {
  const [show, setShow] = useState(false)
  const [confirmShow, setConfirmShow] = useState(false)
  const hundleClick = () => setShow(!show)  
  const ConfirmHundleClick = () => setConfirmShow(!confirmShow)
  const onClickSignUp = () => {alert("ok!")}

  return (
    <Flex align={'center'} justify={'center'} height={"100%"}>
      <Card p={3} w={{ base: "xs", md: "lg" }}>
        <CardHeader>
          <Heading as="h3" size="lg" textAlign="center">Sign Up</Heading>
        </CardHeader>
        <Divider my={3} />
        <CardBody>
          <Stack spacing={5} divider={<StackDivider />}>
            <InputFormBox isRequired={false} formLabel="User Name" type="text" placeholder="Hogetaro" leftElementIcon={<ImUser />} />
            <InputFormBox isRequired={true} formLabel="Email" type="email" placeholder="xxx@xxx.com" leftElementIcon={<EmailIcon />} />
            <InputFormBox
              isRequired={true}
              formLabel="Password"
              type={show ? "text" : "password" }
              placeholder="Enter Password"
              leftElementIcon={<LockIcon />}
              rightElementIcon={show ? <ViewOffIcon /> : <ViewIcon />}
              onClick={hundleClick}
            />
            <InputFormBox
              isRequired={true}
              formLabel="Confirm Password"
              type={confirmShow ? "text" : "password" }
              placeholder="Enter Confirm Password"
              leftElementIcon={<LockIcon />}
              rightElementIcon={confirmShow ? <ViewOffIcon /> : <ViewIcon />}
              onClick={ConfirmHundleClick}
            />
            {/* <Box>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size={{ base: "sm", md: "md" }}>
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
                <InputGroup size={{ base: "sm", md: "md" }}>
                  <InputLeftElement pointerEvents={'none'}>
                    <LockIcon />
                  </InputLeftElement>
                  <Input type={confirmShow ? 'text' : 'password'} placeholder="Enter Confirm Password"/>
                  <InputRightElement>
                    <IconButton aria-label="view on/off" icon={confirmShow ? <ViewOffIcon /> : <ViewIcon />} onClick={ConfirmHundleClick} />                    
                  </InputRightElement>
                </InputGroup>                
              </FormControl>
            </Box> */}
          </Stack>
        </CardBody>
        <CardFooter justify={"center"}>
          <PrimaryButton colorScheme="red" size={{ base: "md", md: "lg"}} onClick={onClickSignUp}>サインアップ</PrimaryButton>
        </CardFooter>
      </Card>
    </Flex> 
  )
}