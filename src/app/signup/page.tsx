'use client'
import { useState } from "react";
import { ImUser } from "react-icons/im";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { InputFormBox } from "@/components/molecules/InputFormBox";
import { SignUpLogInCard } from "@/components/organisms/SignUpLogInCard";

export default function Signup() {
  const [show, setShow] = useState(false)
  const [confirmShow, setConfirmShow] = useState(false)
  const hundleClick = () => setShow(!show)
  const ConfirmHundleClick = () => setConfirmShow(!confirmShow)
  const onClickSignUp = () => alert("ok!")

  return (
    <SignUpLogInCard headingText="Sign up" colorScheme="linkedin" onClick={onClickSignUp} buttonText="サインアップ">
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
    </SignUpLogInCard>
  )
}