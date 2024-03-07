"use client";
import { ChangeEvent, useState } from "react";
import { ImUser } from "react-icons/im";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { SignUpForm } from "@/components/molecules/form/SignUpForm";
import { SignUpLogInCard } from "@/components/organisms/SignUpLogInCard";
import axios from "axios";
import { User } from "../types/User";
import { useForm } from "react-hook-form";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
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
  Box,
  Button,
} from "@chakra-ui/react";

export type Form = {
  name: string;
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
    getValues,
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

  // const onClickSignUp = handleSubmit(async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   await axios.post<User>("http://localhost:3000/v1/users", {
  //     name: inputName,
  //     email: inputEmail,
  //     password: inputPassword,
  //   }).then((res) => {});
  // });
  const onSubmitSignUp = handleSubmit((data) => alert(data));

  return (
    <Flex align={"center"} justify={"center"} h={"100%"}>
      <Card w={{ base: "xs", md: "lg" }}>
        <CardHeader>
          <Heading as="h3" size="lg" textAlign="center">
            Sign up
          </Heading>
        </CardHeader>
        <Divider my={1} />
        <form onSubmit={onSubmitSignUp}>
          <CardBody>
            <Stack spacing={3} divider={<StackDivider />}>
              <Box>
                <SignUpForm
                  isRequired={false}
                  formLabel="User Name"
                  type="text"
                  placeholder="Hogetaro"
                  value={inputName}
                  register={register}
                  label="name"
                  errors={errors}
                  leftElementIcon={<ImUser />}
                  onChange={onChangeInputName}
                />
              </Box>
              <Box>
                <SignUpForm
                  isRequired={true}
                  formLabel="Email"
                  type="email"
                  placeholder="xxx@xxx.com"
                  value={inputEmail}
                  register={register}
                  label="email"
                  errors={errors}
                  leftElementIcon={<EmailIcon />}
                  onChange={onChangeInputEmail}
                />
              </Box>
              <Box>
                <SignUpForm
                  isRequired={true}
                  formLabel="Password"
                  type={show ? "text" : "password"}
                  placeholder="半角英数字8文字以上"
                  value={inputPassword}
                  register={register}
                  label="password"
                  errors={errors}
                  leftElementIcon={<LockIcon />}
                  onChange={onChangeInputPassword}
                  rightElementIcon={show ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={hundleClick}
                />
              </Box>
              <Box>
                <SignUpForm
                  isRequired={true}
                  formLabel="Password Confirm"
                  type={confirmShow ? "text" : "password"}
                  placeholder="パスワード確認用"
                  value={inputConfirmation}
                  register={register}
                  label="passwordConfirm"
                  getValues={getValues}
                  errors={errors}
                  leftElementIcon={<LockIcon />}
                  onChange={onChangeInputConfirmation}
                  rightElementIcon={
                    confirmShow ? <ViewOffIcon /> : <ViewIcon />
                  }
                  onClick={confirmHundleClick}
                />
              </Box>
            </Stack>
          </CardBody>
          <CardFooter justify={"center"}>
            <PrimaryButton
              type="submit"
              colorScheme="linkedin"
              size={{ base: "md", md: "lg" }}
              isdisabled={
                inputEmail === "" ||
                inputPassword === "" ||
                inputConfirmation === ""
                  ? true
                  : false
              }
            >
              サインアップ
            </PrimaryButton>
          </CardFooter>
        </form>
      </Card>
    </Flex>
    // <SignUpLogInCard />
  );
}
