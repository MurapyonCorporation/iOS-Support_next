/* eslint-disable react/display-name */
"use client";
import { ChangeEvent, FC, memo, useState } from "react";
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
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SignUpForm } from "../molecules/form/SignUpForm";
import { EmailIcon, LockIcon, ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import { useForm, Form } from "react-hook-form";
import { ImUser } from "react-icons/im";

export type Form = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const SignUpLogInCard: FC = memo((props) => {
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

  // const onSubmitSignUp = handleSubmit((data) => alert(data));

  return (
    <Flex align={"center"} justify={"center"} h={"100%"}>
      <Card w={{ base: "xs", md: "lg" }}>
        <CardHeader>
          <Heading as="h3" size="lg" textAlign="center">
            Sign up
          </Heading>
        </CardHeader>
        <Divider my={3} />
        <CardBody>
          <Stack spacing={5} divider={<StackDivider />}>
            <form>
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
            </form>
            <form>
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
            </form>
            <form>
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
            </form>
            <form>
              <SignUpForm
                isRequired={true}
                formLabel="Confirm Password"
                type={confirmShow ? "text" : "password"}
                placeholder="パスワード確認用"
                value={inputConfirmation}
                register={register}
                label="passwordConfirm"
                getValues={getValues}
                errors={errors}
                leftElementIcon={<LockIcon />}
                onChange={onChangeInputConfirmation}
                rightElementIcon={confirmShow ? <ViewOffIcon /> : <ViewIcon />}
                onClick={confirmHundleClick}
              />
            </form>
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
      </Card>
    </Flex>
  );
});
