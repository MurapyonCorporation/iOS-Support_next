"use client";
import { useState } from "react";
import { ImUser } from "react-icons/im";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { SignLogForm } from "@/components/molecules/form/SignLogForm";
import axios from "axios";
import { User } from "../types/User";
import { SubmitHandler, useForm } from "react-hook-form";
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
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export type Form = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function Signup() {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);

  const hundleClick = () => setShow(!show);
  const confirmHundleClick = () => setConfirmShow(!confirmShow);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Form>({ mode: "all" });

  const onSubmitSignUp: SubmitHandler<Form> = async (data) => {
    await axios.post<User>("http://localhost:3000/v1/users", {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    router.push("/")
  };

  return (
    <Flex align={"center"} justify={"center"} h={"100%"}>
      <Card w={{ base: "xs", md: "lg" }}>
        <form onSubmit={handleSubmit(onSubmitSignUp)}>
          <CardHeader>
            <Heading as="h3" size="lg" textAlign="center">
              Sign up
            </Heading>
          </CardHeader>
          <Divider my={1} />
          <CardBody>
            <Stack spacing={3} divider={<StackDivider />}>
              <Box>
                <SignLogForm
                  isRequired={false}
                  isInvalid={false}
                  formLabel="User Name"
                  type="text"
                  placeholder="Hogetaro"
                  register={register}
                  label="name"
                  errors={errors}
                  leftElementIcon={<ImUser />}
                />
              </Box>
              <Box>
                <SignLogForm
                  isRequired={true}
                  isInvalid={errors.email ? true : false}
                  formLabel="Email"
                  type="email"
                  placeholder="xxx@xxx.com"
                  register={register}
                  label="email"
                  errors={errors}
                  leftElementIcon={<EmailIcon />}
                />
              </Box>
              <Box>
                <SignLogForm
                  isRequired={true}
                  isInvalid={errors.password ? true : false}
                  formLabel="Password"
                  type={show ? "text" : "password"}
                  placeholder="半角英数字8文字以上"
                  register={register}
                  label="password"
                  errors={errors}
                  leftElementIcon={<LockIcon />}
                  rightElementIcon={show ? <ViewOffIcon /> : <ViewIcon />}
                  onClick={hundleClick}
                />
              </Box>
              <Box>
                <SignLogForm
                  isRequired={true}
                  isInvalid={errors.passwordConfirm ? true : false}
                  formLabel="Password Confirm"
                  type={confirmShow ? "text" : "password"}
                  placeholder="パスワード確認用"
                  register={register}
                  label="passwordConfirm"
                  getValues={getValues}
                  errors={errors}
                  leftElementIcon={<LockIcon />}
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
              isdisabled={!isValid || isSubmitting}
              isLoading={isSubmitting}
            >
              サインアップ
            </PrimaryButton>
          </CardFooter>
        </form>
      </Card>
    </Flex>
  );
}
