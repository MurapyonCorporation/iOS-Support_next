/* eslint-disable react/display-name */
'use client'
import { FC, ReactNode, memo } from "react"
import { Flex, Card, CardHeader, Heading, Divider, CardBody, Stack, StackDivider, CardFooter, Button } from "@chakra-ui/react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"

type Props = {
  headingText: string;
  colorScheme: string;
  disabled: boolean;
  onClick: (e: React.FormEvent) => void;
  buttonText: string;
  children: ReactNode;
}

export const SignUpLogInCard: FC<Props> = memo((props) => {
  const { headingText, colorScheme, disabled, onClick, buttonText, children } = props;
  
  return (
    <Flex align={'center'} justify={'center'} height={"100%"}>
      <Card p={3} w={{ base: "xs", md: "lg" }}>
        <CardHeader>
          <Heading as="h3" size="lg" textAlign="center">{headingText}</Heading>
        </CardHeader>
        <Divider my={3} />
        <CardBody>
          <Stack spacing={5} divider={<StackDivider />}>{children}</Stack>
        </CardBody>
        <CardFooter justify={"center"}>
          <Button colorScheme={colorScheme} size={{ base: "md", md: "lg" }} isDisabled={disabled} onClick={onClick}>{buttonText}</Button>
        </CardFooter>
      </Card>
    </Flex>
  )
})