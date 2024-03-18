/* eslint-disable react/display-name */
import { LogInInterface } from "@/app/login/page";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import { ChangeEvent, FC, ReactElement, memo } from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
} from "react-hook-form";

type Props = {
  isRequired: boolean;
  isInvalid: boolean;
  formLabel: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<LogInInterface>;
  label: Path<LogInInterface>;
  errors: FieldErrors<LogInInterface>;
  leftElementIcon: ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  rightElementIcon?: ReactElement;
  onClick?: () => void;
};

export const LogInForm: FC<Props> = memo((props) => {
  const {
    isRequired,
    isInvalid,
    formLabel,
    type,
    placeholder,
    register,
    label,
    errors,
    leftElementIcon,
    onChange,
    rightElementIcon,
    onClick,
  } = props;

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel>{formLabel}</FormLabel>
      <InputGroup>
        <InputLeftElement>{leftElementIcon}</InputLeftElement>
        <Input
          type={type}
          placeholder={placeholder}
          {...{
            email: register("email", {
              required: "入力必須です",
              pattern: {
                value: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/,
                message: "メールアドレスを入力してください",
              },
            }),
            password: register("password", {
              required: "入力必須です",
              minLength: {
                value: 8,
                message: "8文字以上で入力してください",
              },
              pattern: {
                value: /^[0-9a-zA-Z]*$/,
                message: "半角英数字で入力してください",
              },
            })
          }[label]}
          onChange={onChange}
        />
        {(formLabel === "Password" || formLabel === "Password Confirm") && (
          <InputRightElement>
            <IconButton
              aria-label="view on off"
              icon={rightElementIcon}
              onClick={onClick}
            />
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>
        {
          {
            email: errors.email && errors.email.message,
            password: errors.password && errors.password.message,
          }[label]
        }
      </FormErrorMessage>
    </FormControl>
  );
});