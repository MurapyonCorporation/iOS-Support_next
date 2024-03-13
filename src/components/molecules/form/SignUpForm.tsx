/* eslint-disable react/display-name */
import { SignUpInterface } from "@/app/signup/page";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ChangeEvent, FC, ReactElement, memo } from "react";
import {
  FieldErrors,
  Path,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";

type Props = {
  isRequired: boolean;
  isInvalid?: boolean;
  formLabel: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<SignUpInterface>;
  label: Path<SignUpInterface>;
  getValues?: UseFormGetValues<SignUpInterface>;
  errors: FieldErrors<SignUpInterface>;
  leftElementIcon: ReactElement;
  rightElementIcon?: ReactElement;
  onClick?: () => void;
};

export const SignUpForm: FC<Props> = memo((props) => {
  const {
    isRequired,
    isInvalid,
    formLabel,
    type,
    placeholder,
    register,
    label,
    getValues,
    errors,
    leftElementIcon,
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
            name: register("name"),
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
            }),
            passwordConfirm: register("passwordConfirm", {
              required: "入力必須です",
              pattern: {
                value: /^[0-9a-zA-Z]*$/,
                message: "半角英数字で入力してください",
              },
              validate: (value) =>
                value === getValues?.("password") || "パスワードが一致しません",
            }),
          }[label]}
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
            name: errors.name && errors.name.message,
            email: errors.email && errors.email.message,
            password: errors.password && errors.password.message,
            passwordConfirm:
              errors.passwordConfirm && errors.passwordConfirm.message,
          }[label]
        }
      </FormErrorMessage>
    </FormControl>
  );
});
