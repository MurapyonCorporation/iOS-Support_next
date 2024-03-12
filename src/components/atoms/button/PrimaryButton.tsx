/* eslint-disable react/display-name */
import { Button } from "@chakra-ui/react"
import { FC, ReactNode, memo } from "react"

type Props = {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  colorScheme: string;
  isdisabled: boolean
  size?: object;
  isLoading?: boolean;
  onClick?: () => void;
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const { type, colorScheme, size, isdisabled, isLoading, onClick, children } = props;
  return (
    <Button type={type} colorScheme={colorScheme} isDisabled={isdisabled} size={size} isLoading={isLoading} onClick={onClick}>
      {children}
    </Button>
  )
})