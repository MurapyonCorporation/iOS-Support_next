import { Button } from "@chakra-ui/react"
import { FC, ReactNode, memo } from "react"

type Props = {
  children: ReactNode;
  colorScheme: string;
  color?: string;
  size?: object;
  onClick: () => void;
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const { colorScheme, color, size, onClick, children } = props;
  return (
    <Button colorScheme={colorScheme} color={color} size={size} onClick={onClick}>
      {children}
    </Button>
  )
})