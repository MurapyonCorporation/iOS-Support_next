"use client";
import { useState } from "react";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { InputFormBox } from "@/components/molecules/InputFormBox";
import { EmailIcon, LockIcon, ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Flex,
  Card,
  CardHeader,
  Heading,
  Divider,
  CardBody,
  Stack,
  StackDivider,
  CardFooter,
} from "@chakra-ui/react";
import { SignUpLogInCard } from "@/components/organisms/SignUpLogInCard";

export default function Login() {
  const [show, setShow] = useState(false);
  const hundleClick = () => setShow(!show);
  const onClickLogIn = () => alert("ok!");

  return (
    <SignUpLogInCard headingText="Log in" colorScheme="red" onClick={onClickLogIn} buttonText="ログイン">
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
    </SignUpLogInCard>
  )
}
