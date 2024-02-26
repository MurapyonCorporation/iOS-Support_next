/* eslint-disable react/display-name */
import { ChangeEvent, FC, ReactElement, memo } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";

type Props = {
  formLabel: string;
  type: string;
  placeholder: string;
  value: string;
  leftElementIcon: ReactElement;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  rightElementIcon?: ReactElement;
  onClick?: () => void;
};

type Form = {
  userName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const InputForm: FC<Props> = memo((props) => {
  const {
    formLabel,
    type,
    placeholder,
    value,
    leftElementIcon,
    onChange,
    rightElementIcon,
    onClick,
  } = props;

  return (
    <InputGroup size={{ base: "sm", md: "md" }}>
      <InputLeftElement pointerEvents={"none"}>
        {leftElementIcon}
      </InputLeftElement>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {formLabel === "Password" || formLabel === "Password Confirmation" ? (
        <InputRightElement>
          <IconButton
            aria-label="view on/off"
            icon={rightElementIcon}
            onClick={onClick}
          />
        </InputRightElement>
      ) : null}
    </InputGroup>
  );
});
