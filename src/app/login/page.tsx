"use client";
import { useState } from "react";
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
  Box,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { LogInForm } from "@/components/molecules/form/LogInForm";
import { SubmitHandler, useForm } from "react-hook-form";

export type LogInInterface = {
  email: string;
  password?: string;
};

export default function Login() {
  // const router = useRouter();

  const [show, setShow] = useState(false);

  const hundleClick = () => setShow(!show);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LogInInterface>({ mode: "all" });

  // const onSubmitLogIn: SubmitHandler<LogInInterface> = async () => {}
  const onSubmitLogIn: SubmitHandler<LogInInterface> = (data) =>
    console.log(data);

  return (
    <Flex align={"center"} justify={"center"} h={"100%"}>
      <Card w={{ base: "xs", md: "lg" }}>
        <form onSubmit={handleSubmit(onSubmitLogIn)}>
          <CardHeader>
            <Heading as="h3" size="lg" textAlign="center">
              Log in
            </Heading>
          </CardHeader>
          <Divider my={1} />
          <CardBody>
            <Stack spacing={3} divider={<StackDivider />}>
              <Box>
                <LogInForm
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
                <LogInForm
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
                <Box mt={"10px"} textAlign={"end"}>
                  <Link
                    as={NextLink}
                    href="/account/password/reset"
                    color={"blue.500"}
                  >
                    パスワードを忘れた場合
                  </Link>
                </Box>
              </Box>
            </Stack>
          </CardBody>
          <CardFooter justify={"center"}>
            <PrimaryButton
              type="submit"
              colorScheme="messenger"
              size={{ base: "md", md: "lg" }}
              isdisabled={!isValid || isSubmitting}
              isLoading={isSubmitting}
            >
              ログイン
            </PrimaryButton>
          </CardFooter>
        </form>
      </Card>
    </Flex>
  );
}
