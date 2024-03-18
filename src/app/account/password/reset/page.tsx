"use client";
import { PrimaryButton } from "@/components/atoms/button/PrimaryButton";
import { EmailIcon } from "@chakra-ui/icons";
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
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

export type resetPWInterface = {
  email: string;
};

export default function Reset() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<resetPWInterface>({ mode: "all" });

  const onSubmitResetPW: SubmitHandler<resetPWInterface> = (data) =>
    alert(JSON.stringify(data));

  return (
    <Flex align={"center"} justify={"center"} h={"100%"}>
      <Card w={{ base: "xs", md: "lg" }}>
        <form onSubmit={handleSubmit(onSubmitResetPW)}>
          <CardHeader>
            <Heading as="h3" size="lg" textAlign="center">
              reset password
            </Heading>
          </CardHeader>
          <Divider my={1} />
          <CardBody>
            <Stack spacing={3} divider={<StackDivider />}>
              <Box>
                <FormControl
                  isRequired={true}
                  isInvalid={errors.email ? true : false}
                >
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <EmailIcon />
                    </InputLeftElement>
                    <Input
                      type="email"
                      placeholder="xxx@xxx.com"
                      {...register("email", {
                        required: "入力必須です",
                        pattern: {
                          value: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/,
                          message: "メールアドレスを入力してください",
                        },
                      })}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </Stack>
          </CardBody>
          <CardFooter justify={"center"}>
            <PrimaryButton
              type="submit"
              colorScheme="red"
              size={{ base: "md", md: "lg" }}
              isdisabled={!isValid || isSubmitting}
              isLoading={isSubmitting}
            >
              再設定用のメールを送信
            </PrimaryButton>
          </CardFooter>
        </form>
      </Card>
    </Flex>
  );
}
