import { Button } from "@chakra-ui/react"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export const PrimaryButton: FC<Props> = () => {
  return (
    <Button bg={'red'}>
      {children}
    </Button>
  )
}