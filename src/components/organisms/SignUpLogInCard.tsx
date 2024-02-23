'use client'
import { FC, ReactNode, memo } from "react"
import { Flex, Card, CardHeader, Heading, Divider, CardBody, Stack, StackDivider, CardFooter } from "@chakra-ui/react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"

type Props = {
  headingText: string;
  colorScheme: string;
  onClick: () => void;
  buttonText: string;
  children: ReactNode;
}

export const SignUpLogInCard: FC<Props> = memo((props) => {
  const { headingText, colorScheme, onClick, buttonText, children } = props;
  
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
          <PrimaryButton colorScheme={colorScheme} size={{ base: "md", md: "lg" }} onClick={onClick}>{buttonText}</PrimaryButton>
        </CardFooter>
      </Card>
    </Flex>
  )
})