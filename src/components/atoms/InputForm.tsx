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
import { useForm } from "react-hook-form";

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
  email: string;
  password: string;
  passwordConfirm: string;
};

export const InputForm: FC<Props> = memo((props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Form>();
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
        {...register('email', {
          pattern: { value: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/, message: 'メールアドレスを入力してください' }
        })}
        onChange={onChange}
      />
      <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
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
