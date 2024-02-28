"use client";
import { ChangeEvent, useState } from "react";
import { ImUser } from "react-icons/im";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FormBox } from "@/components/molecules/FormBox";
import { InputForm } from "@/components/atoms/InputForm";
import { SignUpLogInCard } from "@/components/organisms/SignUpLogInCard";
import axios from "axios";
import { User } from "../types/User";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { type } from "os";

type Form = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function Signup() {
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmation, setInputConfirmation] = useState("");

  const hundleClick = () => setShow(!show);
  const confirmHundleClick = () => setConfirmShow(!confirmShow);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) =>
    setInputName(e.target.value);
  const onChangeInputEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setInputEmail(e.target.value);
  const onChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setInputPassword(e.target.value);
  const onChangeInputConfirmation = (e: ChangeEvent<HTMLInputElement>) =>
    setInputConfirmation(e.target.value);

  // const onClickSignUp = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   await axios.post<User>("http://localhost:3000/v1/users", {
  //     name: inputName,
  //     email: inputEmail,
  //     password: inputPassword,
  //   });
  // };
  const onClickSignUp = handleSubmit((data) => alert(data));

  return (
    <SignUpLogInCard
      headingText="Sign up"
      colorScheme="linkedin"
      disabled={
        inputEmail === "" || inputPassword === "" || inputConfirmation === ""
          ? true
          : false
      }
      onClick={onClickSignUp}
      buttonText="サインアップ"
    >
      <FormBox isRequired={false} formLabel="User Name">
        <InputForm
          formLabel="User Name"
          type="text"
          placeholder="Hogetaro"
          value={inputName}
          leftElementIcon={<ImUser />}
          onChange={onChangeInputName}
        />
      </FormBox>
      <FormBox isRequired={true} formLabel="Email">
        <InputForm
          formLabel="Email"
          type="text"
          placeholder="xxx@xxx.com"
          value={inputEmail}
          leftElementIcon={<EmailIcon />}
          onChange={onChangeInputEmail}
        />
      </FormBox>
      <FormControl isInvalid={Boolean(errors.email)}>
        <Input
          type="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/,
              message: "メールアドレスを入力してください",
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormBox isRequired={true} formLabel="Passoword">
        <InputForm
          formLabel="Password"
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          value={inputPassword}
          leftElementIcon={<LockIcon />}
          onChange={onChangeInputPassword}
          rightElementIcon={show ? <ViewOffIcon /> : <ViewIcon />}
          onClick={hundleClick}
        />
      </FormBox>
      <FormBox isRequired={true} formLabel="Passoword Confirmation">
        <InputForm
          formLabel="Password Confirmation"
          type={confirmShow ? "text" : "password"}
          placeholder="Enter Confirm Password"
          value={inputConfirmation}
          leftElementIcon={<LockIcon />}
          onChange={onChangeInputConfirmation}
          rightElementIcon={confirmShow ? <ViewOffIcon /> : <ViewIcon />}
          onClick={confirmHundleClick}
        />
      </FormBox>
    </SignUpLogInCard>
  );
}
