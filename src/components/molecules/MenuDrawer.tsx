import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { FC, memo } from "react"

type Props = {
  onClose: () => void,
  isOpen: boolean,
  onClickSignUp: () => void,
  onClickLogIn: () => void
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickSignUp, onClickLogIn } = props;
  return (
    <Drawer placement="right" size={'xs'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0}>
            <Button colorScheme="teal" w={"100%"} size={"lg"} variant={"ghost"} onClick={onClickSignUp}>Sign up</Button>
            <Button colorScheme="messenger" w={"100%"} size={"lg"} variant={"ghost"} onClick={onClickLogIn}>Log in</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})