/* eslint-disable react/display-name */
import { Button } from "@chakra-ui/react"
import { FC, ReactNode, memo } from "react"

type Props = {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  colorScheme: string;
  isdisabled: boolean
  size?: object;
  onClick?: () => void;
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const { type, colorScheme, size, isdisabled,  onClick, children } = props;
  return (
    <Button type={type} colorScheme={colorScheme} isDisabled={isdisabled} size={size} onClick={onClick}>
      {children}
    </Button>
  )
})